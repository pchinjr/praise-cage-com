import { readFileSync } from 'fs';
import { join } from 'path';
import { Arcdown } from 'arcdown';
import Html from "@architect/views/modules/document/html.mjs";

// Function to convert file name to a human-readable title
function convertToTitle(fileName) {
  return fileName
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\.md$/, '') // Remove the .md extension
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
}

export async function handler(req) {
  const { pathParameters } = req;
  const project = `${pathParameters.id}`;
  
  const arcdown = new Arcdown();

  const filePath = join(
    new URL('.', import.meta.url).pathname,
    'node_modules',
    '@architect',
    'views',
    'projects',
    project
  );

  const fromFile = await arcdown.render(readFileSync(filePath, 'utf8'));
  const projectTitle = convertToTitle(project);

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Html({
      html: fromFile.html,
      title: projectTitle,
      imageUrl: fromFile.frontmatter.imageUrl
    })
  };
}
