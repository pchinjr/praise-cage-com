import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const projectsDir = fileURLToPath(new URL('../src/views/projects', import.meta.url));

function getFirstTenProjectFiles() {
  return readdirSync(projectsDir)
    .filter((file) => file.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 10);
}

function extractHtmlSnippet(markdown, file) {
  const match = markdown.match(/```html([\s\S]*?)```/i);
  if (!match) {
    throw new Error(`No HTML code block found in ${file}`);
  }
  return match[1];
}

async function verifySnippet(browser, file, htmlSnippet) {
  const page = await browser.newPage();
  const pageErrors = [];
  const consoleErrors = [];

  page.on('pageerror', (err) => pageErrors.push(err.message || String(err)));
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.setContent(htmlSnippet, { waitUntil: 'load' });

  await page.evaluate(() => {
    const clipboardStub = {
      _value: '',
      async writeText(text) {
        this._value = String(text ?? '');
      },
      async readText() {
        return this._value || '';
      },
    };
    try {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: clipboardStub,
      });
    } catch {
      navigator.clipboard = clipboardStub;
    }

    if (!window.MediaStream) {
      window.MediaStream = class {
        constructor() {
          this.id = 'fake-media-stream';
        }
        getTracks() {
          return [];
        }
      };
    }

    const mediaDevicesStub = navigator.mediaDevices || {};
    mediaDevicesStub.getUserMedia = async () => new window.MediaStream();
    try {
      Object.defineProperty(navigator, 'mediaDevices', {
        configurable: true,
        value: mediaDevicesStub,
      });
    } catch {
      navigator.mediaDevices = mediaDevicesStub;
    }

    window.MediaRecorder = class {
      constructor() {
        this.ondataavailable = null;
        this.state = 'inactive';
      }
      start() {
        this.state = 'recording';
      }
      stop() {
        this.state = 'inactive';
        if (this.ondataavailable) {
          const data = new Blob(['placeholder'], { type: 'video/webm' });
          this.ondataavailable({ data, size: data.size });
        }
      }
    };

    document.hasStorageAccess = async () => true;
    document.requestStorageAccess = async () => true;
  });

  // Attempt to trigger basic interactions so event handlers fire.
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    try {
      await btn.click();
    } catch {
      // Ignore non-interactable buttons; goal is to surface console errors.
    }
  }

  await page.waitForTimeout(200);

  const bodyContent = await page.evaluate(() => document.body && document.body.innerHTML.trim().length);

  await page.close();

  if (!bodyContent) {
    throw new Error('Body content is empty after load.');
  }

  if (pageErrors.length || consoleErrors.length) {
    const messages = [...pageErrors, ...consoleErrors].join(' | ');
    throw new Error(`Runtime errors detected: ${messages}`);
  }
}

async function main() {
  const files = getFirstTenProjectFiles();
  const browser = await chromium.launch();
  const results = [];

  for (const file of files) {
    const markdown = readFileSync(join(projectsDir, file), 'utf8');
    try {
      const snippet = extractHtmlSnippet(markdown, file);
      await verifySnippet(browser, file, snippet);
      results.push({ file, status: 'pass' });
      console.log(`✅ ${file} loaded without errors`);
    } catch (error) {
      results.push({ file, status: 'fail', message: error.message });
      console.error(`❌ ${file} failed: ${error.message}`);
    }
  }

  await browser.close();

  const failures = results.filter((result) => result.status === 'fail');
  if (failures.length) {
    console.error('\nFailures detected:');
    failures.forEach((failure) => console.error(`- ${failure.file}: ${failure.message}`));
    process.exit(1);
  } else {
    console.log('\nAll first 10 examples loaded successfully in headless Chromium.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
