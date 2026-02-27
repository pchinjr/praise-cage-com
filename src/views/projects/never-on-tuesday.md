---
imageUrl: "https://via.placeholder.com/300x450?text=Never%20on%20Tuesday"
---
### **Title: Mirage Route Tracker**

### **Description:**
Channel the stranded travelers of *Never on Tuesday* by logging your current coordinates and accuracy readouts whenever the crew thinks they see salvation on the horizon.

### **Features:**
- Request precise coordinates with the Geolocation API.
- Log accuracy to judge whether the mirage is real.
- Give travelers instant feedback on each pin drop.

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
    <title>Mirage Route Tracker</title>
<style>
    body { font-family: 'Trebuchet MS', sans-serif; background:#201f2e; color:#f4f1d6; text-align:center; padding:40px; }
    button { padding:12px 24px; border:none; border-radius:99px; background:#f05365; color:#fff; cursor:pointer; }
    pre { background:#2e2d3f; padding:20px; border-radius:12px; margin-top:20px; min-height:120px; }
</style>
</head>
<body>
    <h1>Mirage Route Tracker</h1>
    <p>Plan an endless road trip inspired by <em>Never on Tuesday</em> using live coordinates.</p>
    <button id="trackBtn">Pin Current Location</button>
    <pre id="output">Waiting for the next desert pin...</pre>
<script>
const output = document.getElementById('output');
document.getElementById('trackBtn').addEventListener('click', () => {
    if (!navigator.geolocation) {
        output.textContent = 'Geolocation is unavailable in this browser.';
        return;
    }
    output.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude.toFixed(4);
        const longitude = position.coords.longitude.toFixed(4);
        const accuracy = Math.round(position.coords.accuracy);
        output.textContent = 'Latitude: ' + latitude + '
Longitude: ' + longitude + '
Accuracy: ' + accuracy + 'm';
    }, (error) => {
        output.textContent = 'Tracking failed: ' + error.message;
    });
});
</script>
</body>
</html>
```
