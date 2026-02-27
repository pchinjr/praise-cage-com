---
imageUrl: "https://via.placeholder.com/300x450?text=Gunslingers"
---
### **Title: Duelist Reflex Trainer**

### **Description:**
Train for the dusty standoffs of *Gunslingers* by monitoring controller input latency with the Gamepad API.

### **Features:**
- Detect controllers as soon as they connect.
- Display button press states in real time.
- Loop updates forever for instant feedback.

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
    <title>Duelist Reflex Trainer</title>
<style>
    body { font-family:'Chakra Petch',sans-serif; background:#120026; color:#fdfcfe; text-align:center; padding:40px; }
    .status { margin-top:20px; font-size:1.2rem; }
    ul { list-style:none; padding:0; margin-top:20px; }
</style>
</head>
<body>
    <h1>Duelist Reflex Trainer</h1>
    <p>Connect a controller to practice high-noon reflexes inspired by <em>Gunslingers</em>.</p>
    <div class="status" id="status">Waiting for a gamepad...</div>
    <ul id="buttons"></ul>
<script>
function update() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = pads && pads[0];
    const status = document.getElementById('status');
    const list = document.getElementById('buttons');
    if (!pad) {
        status.textContent = 'Plug in a controller or press any button.';
        list.innerHTML = '';
    } else {
        status.textContent = 'Controller: ' + pad.id;
        list.innerHTML = Array.from(pad.buttons).slice(0, 8)
            .map((btn, index) => '<li>Button ' + index + ': ' + (btn.pressed ? 'Pressed' : 'Idle') + '</li>')
            .join('');
    }
    requestAnimationFrame(update);
}
update();
</script>
</body>
</html>
```
