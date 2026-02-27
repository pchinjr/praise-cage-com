---
imageUrl: "https://via.placeholder.com/300x450?text=The%20Family%20Man"
---
### **Title: Alternate Timeline Dashboard**

### **Description:**
Just as *The Family Man* hops between lives, this dashboard pulls fresh scenario cards via the Fetch API so you can weigh different choices.

### **Features:**
- Fetch sample data for alternate futures.
- Render dynamic cards with status tags.
- Retry the call whenever you want more intel.

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
    <title>Alternate Timeline Dashboard</title>
<style>
    body { font-family: 'Inter', sans-serif; background:#0d1b2a; color:#e0e1dd; padding:30px; }
    button { padding:12px 20px; background:#415a77; border:none; border-radius:8px; color:#fff; cursor:pointer; }
    .grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-top:20px; }
    .card { padding:16px; background:#1b263b; border-radius:8px; min-height:120px; }
</style>
</head>
<body>
    <h1>Alternate Timeline Dashboard</h1>
    <p>Pull scenario data, just like <em>The Family Man</em> juggles rapidly changing intel.</p>
    <button id="loadBtn">Load Intel</button>
    <div class="grid" id="grid"></div>
<script>
const grid = document.getElementById('grid');
document.getElementById('loadBtn').addEventListener('click', function() {
    grid.innerHTML = '<p>Fetching intel...</p>';
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            grid.innerHTML = data.map(function(item) {
                var status = item.completed ? 'stable' : 'volatile';
                return '<div class="card"><h3>Scenario ' + item.id + '</h3><p>' + item.title + '</p><p>Status: ' + status + '</p></div>';
            }).join('');
        })
        .catch(function(error) {
            grid.innerHTML = '<p>Intel offline: ' + error.message + '</p>';
        });
});
</script>
</body>
</html>
```
