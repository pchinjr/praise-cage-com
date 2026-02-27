---
imageUrl: "https://via.placeholder.com/300x450?text=Stolen"
---
### **Title: Search Grid Control Room**

### **Description:**
Offload search grid sweeps into a background worker the way *Stolen* fans out a rescue operation.

### **Features:**
- Spawn a worker that simulates grid sweeps.
- Stream updates back to the main thread.
- Keep the UI responsive while scans run.

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
    <title>Search Grid Control Room</title>
<style>
    body { font-family: 'IBM Plex Mono', monospace; background:#020202; color:#39ff88; padding:30px; }
    button { padding:10px 18px; border:1px solid #39ff88; background:transparent; color:#39ff88; cursor:pointer; }
    pre { background:#010f07; padding:20px; border-radius:8px; min-height:140px; white-space:pre-wrap; }
</style>
</head>
<body>
    <h1>Search Grid Control Room</h1>
    <p>Push manhunts from the main thread just like <em>Stolen</em> races against time.</p>
    <button id="scanBtn">Start Grid Scan</button>
    <pre id="output">Awaiting orders...</pre>
<script>
const output = document.getElementById('output');
const worker = new Worker(URL.createObjectURL(new Blob(['self.onmessage = function(e) {\n  const total = e.data;\n  for (let i = 1; i <= total; i++) {\n    setTimeout(() => {\n      self.postMessage('Sector ' + i + ' cleared.');\n      if (i === total) {\n        self.postMessage('Scan complete.');\n      }\n    }, i * 300);\n  }\n};'], { type: 'application/javascript' })));
document.getElementById('scanBtn').addEventListener('click', () => {
    output.textContent = 'Deploying units...';
    worker.postMessage(12);
});
worker.onmessage = (event) => {
    output.textContent += '
' + event.data;
};
</script>
</body>
</html>
```
