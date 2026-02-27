---
imageUrl: "https://via.placeholder.com/300x450?text=Pig"
---
### **Title: Forager Flavor Notes**

### **Description:**
Let the quiet focus of *Pig* narrate every tasting note through the Speech Synthesis API.

### **Features:**
- Capture recipe notes in a single textarea.
- Speak entries aloud for mindful tasting.
- Fall back to default mantra when notes are empty.

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
    <title>Forager Flavor Notes</title>
<style>
    body { font-family:'Merriweather',serif; background:#201715; color:#f5e1c8; padding:30px; text-align:center; }
    textarea { width:100%; max-width:600px; height:120px; margin:15px auto; display:block; border-radius:8px; padding:10px; }
    button { padding:10px 24px; border:none; border-radius:6px; background:#c46a2b; color:#fff; cursor:pointer; }
</style>
</head>
<body>
    <h1>Forager Flavor Notes</h1>
    <p>Let the voice of <em>Pig</em> read your tasting notes aloud.</p>
    <textarea id="notes" placeholder="Describe the dish and memory..."></textarea>
    <button id="speakBtn">Speak Memory</button>
<script>
document.getElementById('speakBtn').addEventListener('click', () => {
    const text = document.getElementById('notes').value.trim() || 'Forage with purpose.';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
});
</script>
</body>
</html>
```
