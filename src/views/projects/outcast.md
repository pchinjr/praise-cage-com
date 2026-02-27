---
imageUrl: "https://via.placeholder.com/300x450?text=Outcast"
---
### **Title: Exile Strategy Drag Board**

### **Description:**
Assemble a survival convoy for *Outcast* by dragging and dropping squads between staging columns.

### **Features:**
- Use native Drag and Drop events for assets.
- Allow reordering between pool and convoy plan.
- Give visual slots for quick strategy changes.

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
    <title>Exile Strategy Drag Board</title>
<style>
    body { font-family: 'Noto Sans', sans-serif; background:#120c03; color:#ffe0b5; padding:30px; display:flex; gap:20px; flex-wrap:wrap; justify-content:center; }
    .column { width:260px; min-height:260px; border:2px dashed #d88c4e; border-radius:12px; padding:12px; }
    .item { padding:10px; background:#2a1d0a; border-radius:8px; margin-bottom:8px; cursor:grab; }
</style>
</head>
<body>
    <div>
        <h2>Available Units</h2>
        <div class="column" id="pool">
            <div class="item" draggable="true">Scout Riders</div>
            <div class="item" draggable="true">Healer Caravan</div>
            <div class="item" draggable="true">Archer Wall</div>
            <div class="item" draggable="true">Supply Carts</div>
        </div>
    </div>
    <div>
        <h2>Exile Strategy Drag Board</h2>
        <div class="column" id="plan">Drop assets here to fortify your exile convoy inspired by <em>Outcast</em>.</div>
    </div>
<script>
const pool = document.getElementById('pool');
const plan = document.getElementById('plan');
let dragged = null;
function bind(item) {
    item.addEventListener('dragstart', () => dragged = item);
}
document.querySelectorAll('.item').forEach(bind);
[pool, plan].forEach(col => {
    col.addEventListener('dragover', event => event.preventDefault());
    col.addEventListener('drop', () => {
        if (dragged) col.appendChild(dragged);
    });
});
</script>
</body>
</html>
```
