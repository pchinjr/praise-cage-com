import { readdir } from "fs/promises";
import { join } from "path";
import layout from "@architect/views/layout/layout.mjs";

// Function to convert file name to a human-readable title
function convertToTitle(fileName) {
  return fileName
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\.md$/, '') // Remove the .md extension
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
}

export async function handler(req) {
  // Define the file path of md files
  const filePath = join(
    new URL(".", import.meta.url).pathname,
    "node_modules",
    "@architect",
    "views",
    "projects",
  );

  // Function to generate project links
  async function generateProjectLinks() {
    try {
      const files = await readdir(filePath);
      let links = "";

      files.forEach((file) => {
        if (file.endsWith(".md")) {
          const project = convertToTitle(file)
          links += `<a href="/project/${file}">${project}</a><br>`;
        }
      });

      return `<ul class="project-list">${links}</ul>`;
    } catch (error) {
      console.error("Error reading project files:", error);
      return "<p>Error loading projects</p>";
    }
  }

  const links = await generateProjectLinks();

  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: layout({
      links,
    }),
  };
}
