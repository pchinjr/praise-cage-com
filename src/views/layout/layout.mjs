export default function Layout({ links }) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Praise Cage!</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
      }
      h1 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .project-list {
        list-style-type: none;
        padding: 0;
      }
      .project-list li {
        margin: 0.5rem 0;
      }
      .project-list a {
        text-decoration: none;
        color: #0070f3;
        font-size: 1rem;
        display: block;
        padding: 0.75rem;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, box-shadow 0.3s;
      }
      .project-list a:hover {
        background-color: #eaeaea;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Praise Cage - JavaScripture Revelations</h1>
      ${links}
    </div>
  </body>
  </html>
    `;
  }