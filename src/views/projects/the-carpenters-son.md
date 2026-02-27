---
imageUrl: "https://via.placeholder.com/300x450?text=The%20Carpenter%27s%20Son"
---
### **Title: Heritage Blueprint Components**

### **Description:**
Build reusable interface blocks for *The Carpenter's Son* with a tiny custom element system.

### **Features:**
- Define a bespoke element for mission cards.
- Feed attributes for title and status.
- Render reflective copy right inside the template.

### **Starting Code:**

### Beginner Hints:
- Create a single `index.html` file.
- Copy the full HTML code block into that file.
- Open `index.html` in your browser. If something doesn't work, try a local server like `python -m http.server`.
- Open DevTools Console to spot errors and typos quickly.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heritage Blueprint Components</title>
<style>
    body { font-family:'Quicksand',sans-serif; background:#f2ede4; color:#3e3022; padding:30px; }
    mission-card { display:block; margin-bottom:12px; padding:16px; border-radius:10px; background:#fff; box-shadow:0 6px 18px rgba(0,0,0,0.08); }
</style>
</head>
<body>
    <h1>Heritage Blueprint Components</h1>
    <mission-card title="Design" status="draft">Sketch new structures inspired by <em>The Carpenter's Son</em>.</mission-card>
    <mission-card title="Build" status="in progress">List materials and rituals.</mission-card>
    <mission-card title="Reflect" status="complete">Capture lessons learned.</mission-card>
<script>
class MissionCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const status = this.getAttribute('status');
        const detail = this.textContent.trim();
        this.innerHTML = '<strong>' + title + '</strong><p>' + detail + '</p><small>Status: ' + status + '</small>';
    }
}
customElements.define('mission-card', MissionCard);
</script>
</body>
</html>
```
