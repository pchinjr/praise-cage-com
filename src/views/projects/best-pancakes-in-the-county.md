---
imageUrl: "https://via.placeholder.com/300x450?text=Best%20Pancakes%20in%20the%20County"
---
### **Title: Pancake Pop-Up Shareboard**

### **Description:**
Even before release, celebrate *Best Pancakes in the County* with a pop-up that shares your daily flavor lineup.

### **Features:**
- Select special flavors from a dropdown.
- Use the Web Share API to broadcast menus (secure context required).
- Notify unsupported browsers with polite fallbacks.

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
    <title>Pancake Pop-Up Shareboard</title>
<style>
    body { font-family:'Poppins',sans-serif; background:#fff5ec; color:#5b3414; text-align:center; padding:40px; }
    select, button { padding:10px 14px; border-radius:6px; border:1px solid #cc8b65; margin:6px; }
</style>
</head>
<body>
    <h1>Pancake Pop-Up Shareboard</h1>
    <p>Share pancake specials inspired by <em>Best Pancakes in the County</em> using the Web Share API.</p>
    <select id="flavor">
        <option value="Maple Horizon">Maple Horizon</option>
        <option value="Berry Blaze">Berry Blaze</option>
        <option value="Savory Ember">Savory Ember</option>
    </select>
    <button id="shareBtn">Share Daily Special</button>
<script>
document.getElementById('shareBtn').addEventListener('click', async () => {
    if (!navigator.share) {
        alert('Web Share API not supported in this browser.');
        return;
    }
    const flavor = document.getElementById('flavor').value;
    await navigator.share({ title: flavor, text: 'Try the Best Pancakes in the County inspired ' + flavor + '.', url: location.href });
});
</script>
</body>
</html>
```
