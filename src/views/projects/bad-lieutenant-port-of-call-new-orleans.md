---
imageUrl: "https://via.placeholder.com/300x450?text=Bad%20Lieutenant"
---
### **Title: Evidence Alert Console**

### **Description:**
Ping field teams about volatile leads like *Bad Lieutenant* by requesting permission and firing notifications from a single console.

### **Features:**
- Request Notification API permission from the UI.
- Send alerts with gritty copy once allowed.
- Mirror log statements in the console for auditing.

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
    <title>Evidence Alert Console</title>
<style>
    body { background:#090b0f; color:#fff; font-family: 'Source Code Pro', monospace; text-align:center; padding:40px; }
    button { padding:12px 18px; margin:10px; border:none; border-radius:6px; cursor:pointer; }
    .primary { background:#ff3366; color:#fff; }
    .secondary { background:#1b1f2a; color:#8ef6ff; border:1px solid #8ef6ff; }
</style>
</head>
<body>
    <h1>Evidence Alert Console</h1>
    <p>Send critical alerts the way <em>Bad Lieutenant: Port of Call New Orleans</em> escalates every lead.</p>
    <button class="primary" id="request">Request Permission</button>
    <button class="secondary" id="notify">Dispatch Notification</button>
<script>
function log(msg) { console.log('[Alert] ' + msg); }
document.getElementById('request').addEventListener('click', function() {
    Notification.requestPermission().then(function(status) {
        log('Permission: ' + status);
    });
});
document.getElementById('notify').addEventListener('click', function() {
    if (Notification.permission !== 'granted') {
        log('Grant permission before dispatching.');
        return;
    }
    new Notification('Evidence Alert Console', { body: 'New clue logged. Stay sharp.' });
});
</script>
</body>
</html>
```
