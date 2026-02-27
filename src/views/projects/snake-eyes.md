---
imageUrl: "https://via.placeholder.com/300x450?text=Snake%20Eyes"
---
### **Title: Conspiracy Pulse Board**

### **Description:**
Visualize shifting camera angles from *Snake Eyes* by animating an all-seeing cursor that changes radius and pace as you investigate.

### **Features:**
- Control an orbit path with the Web Animations API.
- Adjust radius and timing mid-investigation.
- Loop the animation forever as you chase new clues.

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
    <title>Conspiracy Pulse Board</title>
<style>
    body { background:#04070f; color:#f5f5f5; font-family: 'Orbitron', sans-serif; text-align:center; padding:40px; }
    .arena { width:300px; height:300px; margin:0 auto; border:2px solid #ff214f; border-radius:50%; position:relative; }
    .eye { width:30px; height:30px; border-radius:50%; background:#21ffe7; position:absolute; top:135px; left:135px; }
    input { width:80%; margin:10px auto; }
</style>
</head>
<body>
    <h1>Conspiracy Pulse Board</h1>
    <p>Recreate the swirling paranoia of <em>Snake Eyes</em> with keyframe control.</p>
    <div class="arena">
        <div class="eye" id="eye"></div>
    </div>
    <label>Orbit Speed (seconds)</label>
    <input type="range" id="speed" min="2" max="12" value="6">
    <label>Radius</label>
    <input type="range" id="radius" min="40" max="130" value="90">
<script>
const eye = document.getElementById('eye');
let animation;
function play() {
    if (animation) animation.cancel();
    const radius = Number(document.getElementById('radius').value);
    const duration = Number(document.getElementById('speed').value) * 1000;
    animation = eye.animate([
        { transform: 'translate(' + radius + 'px, 0)' },
        { transform: 'translate(0, ' + radius + 'px)' },
        { transform: 'translate(-' + radius + 'px, 0)' },
        { transform: 'translate(0, -' + radius + 'px)' },
        { transform: 'translate(' + radius + 'px, 0)' }
    ], { duration: duration, iterations: Infinity, easing: 'linear' });
}
['speed','radius'].forEach(function(id) { document.getElementById(id).addEventListener('input', play); });
play();
</script>
</body>
</html>
```
