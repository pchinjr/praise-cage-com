import { readFileSync } from 'fs';
import { chromium } from 'playwright';

async function main() {
  const markdown = readFileSync(new URL('../src/views/projects/211.md', import.meta.url), 'utf8');
  const htmlMatch = markdown.match(/```html([\s\S]*?)```/);
  if (!htmlMatch) {
    throw new Error('Unable to locate HTML example in src/views/projects/211.md');
  }

  const htmlSnippet = htmlMatch[1];
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(err.message));

  await page.setContent(htmlSnippet, { waitUntil: 'load' });

  const canvas = await page.$('#heistCanvas');
  if (!canvas) {
    throw new Error('Canvas element not found');
  }

  const canvasBox = await canvas.boundingBox();
  if (!canvasBox) {
    throw new Error('Canvas element is not visible');
  }

  // Simulate drawing a line on the canvas.
  await page.mouse.move(canvasBox.x + 10, canvasBox.y + 10);
  await page.mouse.down();
  await page.mouse.move(canvasBox.x + 200, canvasBox.y + 150, { steps: 15 });
  await page.mouse.up();

  const hasDrawing = await page.evaluate(() => {
    const canvasEl = document.getElementById('heistCanvas');
    const ctx = canvasEl.getContext('2d');
    const data = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height).data;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] !== 0) {
        return true;
      }
    }
    return false;
  });

  if (!hasDrawing) {
    await browser.close();
    throw new Error('Canvas pixels remained empty after drawing');
  }

  const clearButton = await page.$('#clearButton');
  if (!clearButton) {
    await browser.close();
    throw new Error('Clear button not found');
  }

  await clearButton.click();

  const isCleared = await page.evaluate(() => {
    const canvasEl = document.getElementById('heistCanvas');
    const ctx = canvasEl.getContext('2d');
    const data = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height).data;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] !== 0) {
        return false;
      }
    }
    return true;
  });

  await browser.close();

  if (!isCleared) {
    throw new Error('Canvas was not cleared after pressing the Clear button');
  }

  if (pageErrors.length) {
    throw new Error(`Page errors detected: ${pageErrors.join('; ')}`);
  }

  console.log('211 example verified in headless Chromium: drawing and clearing behave as expected.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
