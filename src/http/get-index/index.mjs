// learn more about HTTP functions here: https://arc.codes/http
import { readdir } from 'fs/promises';
import { join } from 'path';
import Html from "@architect/views/modules/document/html.mjs"
import arc from "@architect/functions"

// Define the file path
const filePath = join(
  new URL('.', import.meta.url).pathname,
  'node_modules',
  '@architect',
  'views',
  'projects'
);

// Function to generate project links
async function generateProjectLinks() {
  try {
    const files = await readdir(filePath);
    let links = '';

    files.forEach(file => {
      if (file.endsWith('.md')) {
        const project = file.slice(0, -3); // Remove the .md extension
        links += `<a href="/project/${file}">${project}</a><br>`;
      }
    });

    return links;
  } catch (error) {
    console.error('Error reading project files:', error);
    return '<p>Error loading projects</p>';
  }
}

export async function handler (req) {

  const links = await generateProjectLinks();

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
    .max-width-320 { max-width: 20rem; }
    .margin-left-8 { margin-left: 0.5rem; }
    .margin-bottom-16 { margin-bottom: 1rem; }
    .margin-bottom-8 { margin-bottom: 0.5rem; }
    .padding-32 { padding: 2rem; }
    .color-grey { color: #333; }
    .color-black-link:hover { color: black; }
  </style>
</head>
<body class="padding-32">
  <div class="max-width-320">
    <h1>Praise Cage</h1>
    <p>Front Page</p>
    ${links}
  </div>
</body>
</html>
`
  };
}