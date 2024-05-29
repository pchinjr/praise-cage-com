const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');

// Adjusted path to go up one level from the scripts directory
const markdownDir = path.join(__dirname, '..', 'src', 'views', 'projects');

async function fetchImageURL(wikiUrl) {
  try {
    const response = await axios.get(wikiUrl);
    const $ = cheerio.load(response.data);
    const imageElement = $('td.infobox-image img').first();
    let imageUrl = imageElement.attr('src');
    // Construct the full image URL
    if (imageUrl) {
      if (!imageUrl.startsWith('http')) {
        imageUrl = `https:${imageUrl}`;
      }
    } else {
      // Try srcset if src is not found
      const srcset = imageElement.attr('srcset');
      if (srcset) {
        const srcsetUrls = srcset.split(', ');
        const highResUrl = srcsetUrls[srcsetUrls.length - 1].split(' ')[0];
        if (highResUrl && !highResUrl.startsWith('http')) {
          imageUrl = `https:${highResUrl}`;
        }
      }
    }

    return imageUrl || null;
  } catch (error) {
    console.error(`Failed to fetch image URL from ${wikiUrl}:`, error.message);
    return null;
  }
}

async function updateMarkdownFile(fileName) {
  try {
    const filePath = path.join(markdownDir, fileName);
    const content = await fs.readFile(filePath, 'utf8');
    const { data: frontmatter, content: markdownContent } = matter(content);
    const referenceMatch = markdownContent.match(/\*\*Film\*\*: \[.*?\]\((https:\/\/en\.wikipedia\.org\/wiki\/.+?\))/);
    
    if (referenceMatch) {
      const wikiUrl = referenceMatch[1];
      const imageUrl = await fetchImageURL(wikiUrl);
      
      if (imageUrl) {
        frontmatter.imageUrl = imageUrl;
        const newContent = matter.stringify({ content: markdownContent, data: frontmatter });
        await fs.writeFile(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath} with image URL: ${imageUrl}`);
      } else {
        console.log(`No image URL found for ${filePath}`);
      }
    } else {
      console.log(`No film reference found in ${filePath}`);
    }
  } catch (error) {
    console.error(`Failed to update markdown file ${fileName}:`, error);
  }
}

async function processMarkdownFiles() {
  try {
    const files = await fs.readdir(markdownDir);
    for (const file of files) {
      if (file.endsWith('.md')) {
        await updateMarkdownFile(file);
      }
    }
  } catch (error) {
    console.error('Failed to process markdown files:', error);
  }
}

processMarkdownFiles();
