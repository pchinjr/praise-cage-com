
# Praise Cage

**Praise Cage** is a unique web application that transforms Nicolas Cage's entire filmography into creative programming challenges and coding projects. Built with the Architect Framework and deployed on AWS, this site serves as both a tribute to the legendary actor and an innovative approach to programming education.

## What Makes This Special

Each of Nicolas Cage's films becomes a themed coding project that cleverly ties programming concepts to movie plots. From "The Rock" becoming an "Alcatraz Escape: Tactical Training Simulator" to "Con Air" inspiring aircraft control systems, every project makes learning code more engaging through cinematic storytelling.

## Current Status

- **100 Nicolas Cage movie projects** currently implemented
- Dynamic markdown-to-HTML conversion with movie poster integration
- Responsive, modern UI with clean project navigation
- Serverless architecture for scalable deployment

## Project Structure

- **src/http/**: Lambda function handlers for routes (`/` and `/project/:id`)
- **src/views/**: View templates, layouts, and project markdown files
- **src/views/projects/**: 100+ markdown files, each representing a Cage film project
- **node_modules/**: Project dependencies including Arcdown for markdown processing

## Missing Films to Add

The following Nicolas Cage films are not yet included in the project and need to be added:

### Recent Releases (2024-2025)
- **Longlegs** (2024) - Horror thriller where Cage plays a serial killer
- **The Carpenter's Son** (2024) - Drama film

### Potential Additions
- **National Treasure: Edge of History** (2024) - Disney+ series with Cage involvement
- Any upcoming releases or recently discovered films from his extensive catalog

*Note: This list will be updated as new Nicolas Cage films are released or discovered.*

## Technical Architecture

- **Framework**: Architect Framework for serverless AWS deployment
- **Runtime**: ES modules (.mjs) with Node.js
- **Content Processing**: Arcdown for markdown-to-HTML conversion with frontmatter support
- **Styling**: Clean, responsive CSS with hover effects and mobile optimization
- **Deployment**: AWS Lambda functions with API Gateway integration

## Key Dependencies

- **@architect/architect**: Core framework for serverless deployment
- **arcdown**: Markdown processing with frontmatter parsing
- **@architect/plugin-storage-public**: S3 integration for static assets
- **gray-matter**: YAML frontmatter parsing for movie metadata
- **axios & cheerio**: Web scraping tools for content generation

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/pchinjr/praise-cage-com.git
    ```
2. Navigate to the project directory:
    ```sh
    cd praise-cage-com
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

To run the project locally:
```sh
npm start
```

## Deployment

Deployment instructions using the Architect Framework:
```
npx arc deploy
```

## Contributing

To add a new Nicolas Cage movie project:

1. Create a new markdown file in `src/views/projects/` with the movie title as filename (kebab-case)
2. Include frontmatter with `imageUrl` for the movie poster
3. Write a creative programming challenge inspired by the movie's plot
4. Follow the existing format and style of other project files

## About

This project celebrates Nicolas Cage's incredible range as an actor while making programming education more engaging through creative storytelling. Each film becomes a gateway to learning different programming concepts, from basic algorithms to complex system design.
