import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
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

  function getSynopsis(markdown = "") {
    const clean = markdown
      .replace(/```[\s\S]*?```/g, "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[#>*_`-]/g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (!clean) {
      return "Tap in to explore the full brief, starter code, and references.";
    }

    return clean.length > 140 ? `${clean.slice(0, 137).trim()}…` : clean;
  }

  function buildCard({ title, fileName, imageUrl, synopsis }) {
    const hasImage = Boolean(imageUrl);
    const posterContent = hasImage
      ? `<img src="${imageUrl}" alt="${title} poster" loading="lazy">`
      : `<div class="placeholder-poster" role="img" aria-label="Coming soon placeholder for ${title}">
          <span>Coming Soon</span>
        </div>`;
    return `
      <article class="movie-card${hasImage ? "" : " placeholder"}">
        <a href="/project/${fileName}" class="movie-card-link">
          <div class="poster">
            ${posterContent}
          </div>
          <div class="movie-info">
            <h2>${title}</h2>
            <p>${synopsis}</p>
            <span class="cta">View Project</span>
          </div>
        </a>
      </article>
    `;
  }

  // Function to generate project cards
  async function generateProjectCards() {
    try {
      const files = await readdir(filePath);
      const projects = await Promise.all(
        files
          .filter((file) => file.endsWith(".md"))
          .map(async (file) => {
            const fullPath = join(filePath, file);
            const source = await readFile(fullPath, "utf8");
            const { data, content } = matter(source);
            const title = data.title || convertToTitle(file);
            const synopsis = getSynopsis(content);
            return {
              title,
              fileName: file,
              imageUrl: data.imageUrl,
              synopsis,
            };
          })
      );

      const sortedCards = projects
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(buildCard);

      return `<section class="movie-gallery" aria-label="Movie project list">${sortedCards.join("")}</section>`;
    } catch (error) {
      console.error("Error reading project files:", error);
      return "<p>Error loading projects</p>";
    }
  }

  const links = await generateProjectCards();

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
