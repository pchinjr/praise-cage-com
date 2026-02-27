---
imageUrl: "https://via.placeholder.com/300x450?text=Gambino"
---
### **Title: Family Ledger Clipboard**

### **Description:**
Manage a coded ledger for *Gambino* using the Clipboard API to copy and paste tribute notes securely.

### **Features:**
- Copy integral notes to the clipboard instantly.
- Paste updates back into the ledger textarea.
- Keep the tool minimal for quick exchanges.

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
    <title>Family Ledger Clipboard</title>
<style>
    body { font-family:'Roboto Mono',monospace; background:#050d0f; color:#d8f3dc; text-align:center; padding:40px; }
    textarea { width:100%; max-width:560px; height:140px; margin:0 auto 10px; display:block; border-radius:8px; padding:12px; }
    button { padding:10px 24px; border:none; border-radius:6px; background:#2d6a4f; color:#fff; cursor:pointer; margin:0 5px; }
</style>
</head>
<body>
    <h1>Family Ledger Clipboard</h1>
    <p>Copy and paste coded ledgers the way <em>Gambino</em> shuffles loyalty.</p>
    <textarea id="ledger" placeholder="Quarterly tribute breakdown..."></textarea>
    <div>
        <button id="copyBtn">Copy</button>
        <button id="pasteBtn">Paste</button>
    </div>
<script>
const area = document.getElementById('ledger');
document.getElementById('copyBtn').addEventListener('click', async () => {
    await navigator.clipboard.writeText(area.value);
});
document.getElementById('pasteBtn').addEventListener('click', async () => {
    const text = await navigator.clipboard.readText();
    area.value = text;
});
</script>
</body>
</html>
```
