---
imageUrl: "https://via.placeholder.com/300x450?text=Fortitude"
---
### **Title: Northern Resilience Log**

### **Description:**
Keep a survival log for *Fortitude* by saving every supply entry with the Local Storage API.

### **Features:**
- Log supply notes in an offline-friendly way.
- Persist records between sessions.
- Review the latest entries for morale.

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
    <title>Northern Resilience Log</title>
<style>
    body { font-family: Arial, sans-serif; background:#0f1a2d; color:#fff; text-align:center; padding:20px; }
    textarea { width:100%; max-width:600px; height:120px; margin:0 auto 10px; display:block; border-radius:8px; padding:10px; }
    button { padding:10px 20px; border:none; border-radius:6px; background:#ff7a18; color:#1b140f; cursor:pointer; }
    ul { list-style:none; padding:0; max-width:600px; margin:20px auto; text-align:left; }
    li { background:#1f2b44; margin-bottom:8px; padding:10px; border-radius:6px; }
</style>
</head>
<body>
    <h1>Northern Resilience Log</h1>
    <p>Inspired by <em>Fortitude</em>, log every adjustment to your strategy and instantly replay it.</p>
    <textarea id="entry" placeholder="Describe the next plan..."></textarea>
    <button id="saveBtn">Save Adjustment</button>
    <ul id="log"></ul>
<script>
const storageKey = 'fortitude-log';
const entryEl = document.getElementById('entry');
const listEl = document.getElementById('log');
const data = JSON.parse(localStorage.getItem(storageKey) || '[]');
function render() {
    listEl.innerHTML = data.map((item, index) => '<li><strong>Play ' + (index + 1) + '</strong>: ' + item + '</li>').join('');
}
render();
document.getElementById('saveBtn').addEventListener('click', () => {
    const text = entryEl.value.trim();
    if (!text) return;
    data.unshift(text);
    localStorage.setItem(storageKey, JSON.stringify(data.slice(0, 8)));
    entryEl.value = '';
    render();
});
</script>
</body>
</html>
```
