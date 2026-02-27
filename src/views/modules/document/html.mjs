export default function HTML(props = {}) {
  const {
    title = '',
    html = '',
    imageUrl = ''
  } = props;

  const poster = imageUrl
    ? `<img src="${imageUrl}" alt="${title} poster">`
    : `<div class="placeholder-poster" role="img" aria-label="Coming soon placeholder"><span>Coming Soon</span></div>`;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          :root {
            color-scheme: dark;
            --bg: #070707;
            --card: rgba(255, 255, 255, 0.05);
            --accent: #ffb347;
            --accent-strong: #f45c43;
            --text: #f6f3f0;
            --muted: #bdb6af;
          }
          * {
            box-sizing: border-box;
          }
          body {
            font-family: "SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            min-height: 100vh;
            background: radial-gradient(circle at top, rgba(244,92,67,0.15), transparent 65%), var(--bg);
            color: var(--text);
          }
          a {
            color: var(--accent);
          }
          .shell {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
            max-width: 960px;
            margin: 0 auto;
          }
          header.hero {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            border-radius: 1.5rem;
            background: linear-gradient(135deg, rgba(10,10,10,0.7), rgba(40,40,40,0.35));
            border: 1px solid rgba(255,255,255,0.08);
            backdrop-filter: blur(18px);
          }
          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.95rem;
            color: var(--muted);
            text-decoration: none;
          }
          .back-link:hover {
            color: var(--accent);
          }
          .detail-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .poster {
            position: relative;
            padding-top: 140%;
            border-radius: 1.25rem;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .poster img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .placeholder-poster {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.08em;
            color: #ffe7d1;
            text-shadow: 0 4px 15px rgba(0,0,0,0.8);
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://placecage.com/600/900") center/cover;
          }
          .copy h1 {
            margin: 0;
            font-size: clamp(2rem, 5vw, 3rem);
          }
          .copy p {
            margin: 0;
            color: var(--muted);
            line-height: 1.6;
          }
          .eyebrow {
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 0.75rem;
            color: var(--muted);
          }
          main {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .project-body {
            background: var(--card);
            border-radius: 1.5rem;
            border: 1px solid rgba(255,255,255,0.08);
            padding: 2rem;
            line-height: 1.75;
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.35);
          }
          .project-body h2,
          .project-body h3,
          .project-body h4 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #ffe7d1;
          }
          .project-body p {
            color: var(--muted);
            margin-bottom: 1rem;
          }
          .project-body code,
          .project-body pre {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          }
          .project-body pre {
            background: rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 1rem;
            padding: 1.25rem;
            overflow-x: auto;
            color: var(--text);
          }
          .project-body code:not(pre code) {
            background: rgba(255,255,255,0.08);
            padding: 0.1rem 0.4rem;
            border-radius: 0.4rem;
          }
          .project-body ul,
          .project-body ol {
            color: var(--muted);
            padding-left: 1.25rem;
          }
          footer {
            text-align: center;
            color: var(--muted);
            font-size: 0.9rem;
            padding-bottom: 1rem;
          }
          @media (min-width: 900px) {
            .shell {
              padding: 3rem 2rem;
            }
            .detail-grid {
              flex-direction: row;
              gap: 2rem;
            }
            .poster {
              flex: 0 0 320px;
              padding-top: 0;
              height: 460px;
            }
          }
        </style>
    </head>
    <body>
        <div class="shell">
          <header class="hero detail">
            <a class="back-link" href="/">← Back to gallery</a>
            <div class="detail-grid">
              <div class="poster">
                ${poster}
              </div>
              <div class="copy">
                <p class="eyebrow">Project walkthrough</p>
                <h1>${title}</h1>
                <p>Explore the concept, hints, and starter code for this Nic Cage inspired build.</p>
              </div>
            </div>
          </header>
          <main>
            <article class="project-body">
              ${html}
            </article>
          </main>
          <footer>
            Built with Architect • Inspired by cinematic chaos
          </footer>
        </div>
        <script>
          const posterImg = document.querySelector(".poster img");
          const posterWrap = document.querySelector(".poster");
          if (posterImg && posterWrap) {
            posterImg.addEventListener("error", () => {
              posterImg.remove();
              posterWrap.insertAdjacentHTML("beforeend", '<div class="placeholder-poster" role="img" aria-label="Coming soon placeholder"><span>Coming Soon</span></div>');
            }, { once: true });
          }
        </script>
    </body>
    </html>
  `;
}
