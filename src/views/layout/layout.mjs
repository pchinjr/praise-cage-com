export default function Layout({ links }) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Praise Cage!</title>
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
      .shell {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      header.hero {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
        background: linear-gradient(135deg, rgba(10,10,10,0.7), rgba(40,40,40,0.35));
        border: 1px solid rgba(255,255,255,0.08);
        backdrop-filter: blur(18px);
      }
      .hero h1 {
        font-size: clamp(2rem, 7vw, 3.25rem);
        margin: 0;
      }
      .hero p {
        margin: 0;
        color: var(--muted);
        line-height: 1.6;
      }
      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }
      .hero-actions input {
        flex: 1 1 220px;
        padding: 0.9rem 1rem;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.15);
        background: rgba(0,0,0,0.4);
        color: var(--text);
        font-size: 1rem;
      }
      .hero-actions input::placeholder {
        color: var(--muted);
      }
      .hero-actions button {
        padding: 0.9rem 1.4rem;
        border: none;
        border-radius: 999px;
        background: linear-gradient(120deg, var(--accent), var(--accent-strong));
        color: #1c0906;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 10px 25px rgba(244,92,67,0.25);
      }
      .hero-actions button:active {
        transform: scale(0.98);
        box-shadow: 0 6px 18px rgba(244,92,67,0.35);
      }
      main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .movie-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1rem;
      }
      .movie-card {
        background: var(--card);
        border-radius: 1.25rem;
        border: 1px solid rgba(255,255,255,0.08);
        overflow: hidden;
        min-height: 360px;
        transition: transform 0.3s ease, border-color 0.3s ease;
      }
      .movie-card:hover {
        transform: translateY(-6px);
        border-color: rgba(255,255,255,0.2);
      }
      .movie-card.highlight {
        box-shadow: 0 12px 30px rgba(244,92,67,0.35);
        transform: translateY(-6px) scale(1.02);
      }
      .movie-card-link {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: inherit;
        height: 100%;
      }
      .poster {
        position: relative;
        padding-top: 140%;
        overflow: hidden;
      }
      .poster img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }
      .movie-card:hover .poster img {
        transform: scale(1.05);
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
      .movie-info {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
      }
      .movie-info h2 {
        margin: 0;
        font-size: 1.15rem;
        line-height: 1.3;
      }
      .movie-info p {
        margin: 0;
        color: var(--muted);
        font-size: 0.95rem;
        line-height: 1.4;
        flex: 1;
      }
      .cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 600;
        color: #1c0906;
        padding: 0.45rem 0.9rem;
        border-radius: 999px;
        background: linear-gradient(120deg, var(--accent), var(--accent-strong));
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
        .hero {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .hero div.copy {
          max-width: 540px;
        }
        .hero-actions {
          max-width: 420px;
          justify-content: flex-end;
        }
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <header class="hero">
        <div class="copy">
          <h1>Praise Cage</h1>
          <p>Swipe through Nic Cage’s filmography, unlock wild coding prompts inspired by each movie, and jump straight into the project walkthroughs.</p>
        </div>
        <div class="hero-actions">
          <input type="search" id="movieSearch" placeholder="Search projects or films…" aria-label="Search projects">
          <button id="shuffleMovie" type="button">Surprise Me</button>
        </div>
      </header>
      <main>
        ${links}
      </main>
      <footer>
        Built with Architect • Inspired by cinematic chaos
      </footer>
    </div>
    <script>
      const searchInput = document.getElementById("movieSearch");
      const shuffleButton = document.getElementById("shuffleMovie");
      const cards = Array.from(document.querySelectorAll(".movie-card"));
      const placeholderHTML = '<div class="placeholder-poster" role="img" aria-label="Coming soon placeholder"><span>Coming Soon</span></div>';

      document.querySelectorAll(".poster img").forEach((img) => {
        img.addEventListener("error", () => {
          const wrapper = img.closest(".poster");
          if (!wrapper) return;
          img.remove();
          wrapper.insertAdjacentHTML("beforeend", placeholderHTML);
          const card = wrapper.closest(".movie-card");
          if (card) card.classList.add("placeholder");
        }, { once: true });
      });
      
      if (searchInput) {
        searchInput.addEventListener("input", (event) => {
          const query = event.target.value.toLowerCase();
          cards.forEach((card) => {
            const match = card.textContent.toLowerCase().includes(query);
            card.style.display = match ? "" : "none";
          });
        });
      }

      if (shuffleButton) {
        shuffleButton.addEventListener("click", () => {
          const visibleCards = cards.filter((card) => card.style.display !== "none");
          if (!visibleCards.length) return;
          const randomCard = visibleCards[Math.floor(Math.random() * visibleCards.length)];
          randomCard.scrollIntoView({ behavior: "smooth", block: "center" });
          randomCard.classList.add("highlight");
          setTimeout(() => randomCard.classList.remove("highlight"), 1200);
        });
      }
    </script>
  </body>
  </html>
    `;
  }
