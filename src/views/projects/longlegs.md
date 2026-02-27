---
imageUrl: "https://via.placeholder.com/300x450?text=Longlegs"
---
### **Title: Occult Signal Oscillator**

### **Description:**
Prep for the unsettling casework of *Longlegs* by warping tones that resemble coded transmissions.

### **Features:**
- Use oscillators to craft chilling pulses.
- Adjust gain and frequency live.
- Toggle the signal at will from one control room.

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
    <title>Occult Signal Oscillator</title>
<style>
    body { font-family: 'Courier New', monospace; background:#020410; color:#f7f4ea; text-align:center; padding:40px; }
    .panel { max-width:500px; margin:0 auto; padding:20px; border:1px solid #444; border-radius:12px; background:rgba(7,7,22,0.8); }
    label { display:block; margin:15px 0 5px; }
    input[type=range] { width:100%; }
    button { padding:10px 16px; border:none; background:#ff507a; color:#fff; border-radius:8px; cursor:pointer; margin-top:15px; }
</style>
</head>
<body>
    <h1>Occult Signal Oscillator</h1>
    <div class="panel">
        <p>Blend tones to recreate the surreal soundscape of <em>Longlegs</em>.</p>
        <label for="frequency">Frequency</label>
        <input type="range" id="frequency" min="80" max="1200" value="440">
        <label for="volume">Volume</label>
        <input type="range" id="volume" min="0" max="1" step="0.01" value="0.2">
        <button id="toggle">Start Drone</button>
    </div>
<script>
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
const context = new AudioContextClass();
let oscillator;
let gainNode;
const freqSlider = document.getElementById('frequency');
const volSlider = document.getElementById('volume');
const button = document.getElementById('toggle');
button.addEventListener('click', () => {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        gainNode.disconnect();
        oscillator = null;
        gainNode = null;
        button.textContent = 'Start Drone';
        return;
    }
    oscillator = context.createOscillator();
    gainNode = context.createGain();
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = Number(freqSlider.value);
    gainNode.gain.value = Number(volSlider.value);
    oscillator.connect(gainNode).connect(context.destination);
    oscillator.start();
    button.textContent = 'Stop Drone';
});
freqSlider.addEventListener('input', () => {
    if (oscillator) oscillator.frequency.value = Number(freqSlider.value);
});
volSlider.addEventListener('input', () => {
    if (gainNode) gainNode.gain.value = Number(volSlider.value);
});
</script>
</body>
</html>
```
