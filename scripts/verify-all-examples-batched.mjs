import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const projectsDir = fileURLToPath(new URL('../src/views/projects', import.meta.url));
const BATCH_SIZE = 5;

function getProjectFiles() {
  return readdirSync(projectsDir)
    .filter((file) => file.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b));
}

function chunkFiles(files, size) {
  const batches = [];
  for (let i = 0; i < files.length; i += size) {
    batches.push(files.slice(i, i + size));
  }
  return batches;
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

  const buttons = await page.$$('button');
  for (const btn of buttons) {
    try {
      await btn.click();
    } catch {
      /* ignore */
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
  const files = getProjectFiles();
  const batches = chunkFiles(files, BATCH_SIZE);
  const browser = await chromium.launch();
  const results = [];

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batchFiles = batches[batchIndex];
    console.log(`\n--- Batch ${batchIndex + 1} ---`);
    batchFiles.forEach((file) => console.log(`  • ${file}`));

    for (const file of batchFiles) {
      const markdown = readFileSync(join(projectsDir, file), 'utf8');
      try {
        const snippet = extractHtmlSnippet(markdown, file);
        await verifySnippet(browser, file, snippet);
        results.push({ file, status: 'pass', batch: batchIndex + 1 });
        console.log(`✅ ${file}`);
      } catch (error) {
        results.push({ file, status: 'fail', message: error.message, batch: batchIndex + 1 });
        console.error(`❌ ${file}: ${error.message}`);
      }
    }
  }

  await browser.close();

  const failures = results.filter((r) => r.status === 'fail');

  console.log('\n=== Test Runner Summary ===');
  const grouped = batches.map((batchFiles, idx) => {
    const batchResults = results.filter((r) => r.batch === idx + 1);
    const passed = batchResults.filter((r) => r.status === 'pass').length;
    const failed = batchResults.length - passed;
    return { index: idx + 1, passed, failed };
  });

  grouped.forEach(({ index, passed, failed }) => {
    console.log(`Batch ${index}: ${passed} passed, ${failed} failed`);
  });

  if (failures.length) {
    console.error('\nFailures detected:');
    failures.forEach((failure) => console.error(`- ${failure.file}: ${failure.message}`));
    process.exit(1);
  } else {
    console.log('\nAll project examples loaded successfully.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});