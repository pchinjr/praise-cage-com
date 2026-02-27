---
imageUrl: "https://via.placeholder.com/300x450?text=Madden"
---
### **Title: Franchise Field Visualizer**

### **Description:**
Diagram legendary plays for the upcoming *Madden* biopic using a simplified canvas field.

### **Features:**
- Draw quick strokes for passing lanes.
- Switch brush attributes for different units.
- Clear the board to pitch the next play.

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
    <title>Franchise Field Visualizer</title>
<style>
    body { font-family: 'Segoe UI', sans-serif; background:#1b0c18; color:#fdf7f2; text-align:center; padding:30px; }
    canvas { border:3px solid #f45b69; background:#fff; border-radius:8px; cursor:crosshair; }
    .toolbar { margin:15px 0; }
</style>
</head>
<body>
    <h1>Franchise Field Visualizer</h1>
    <p>Sketch bold strokes inspired by <em>Madden</em>.</p>
    <div class="toolbar">
        <label>Color <input type="color" id="colorPicker" value="#5c1bff"></label>
        <label>Size <input type="range" id="sizePicker" min="1" max="20" value="6"></label>
        <button id="clearBtn">Clear Canvas</button>
    </div>
    <canvas id="board" width="600" height="400"></canvas>
<script>
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let drawing = false;
function start(e) { drawing = true; draw(e); }
function stop() { drawing = false; ctx.beginPath(); }
function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = document.getElementById('sizePicker').value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mouseleave', stop);
document.getElementById('clearBtn').addEventListener('click', () => ctx.clearRect(0,0,canvas.width,canvas.height));
</script>
</body>
</html>
```
