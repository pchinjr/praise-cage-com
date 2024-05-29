export default function HTML(props = {}) {
  const {
    title = '',
    html = '',
    imageUrl = ''
  } = props;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
          }
          main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          p {
            line-height: 1.6;
            margin: 1rem 0;
          }
          a {
            color: #0070f3;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          pre {
            background: #f0f0f0;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', Courier, monospace;
          }
          img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 1rem;
            max-width: 100%;
            height: auto;
          }
        </style>
    </head>
    <body>
        <main>
            <h1>${title}</h1>
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}>` : ''}
            <div>
                ${html}
            </div>
        </main>
    </body>
    </html>
  `;
}
