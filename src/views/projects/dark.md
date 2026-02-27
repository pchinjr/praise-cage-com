---
imageUrl: "https://via.placeholder.com/300x450?text=Dark"
---
### **Title: Shadow Corridor Monitor**

### **Description:**
Track which ominous corridor is currently in focus by animating sections as they cross the viewport, echoing the tension of *Dark*.

### **Features:**
- Observe scroll-triggered reveals with Intersection Observer.
- Amplify active sections with transforms.
- Chain a story beat to each chapter.

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
    <title>Shadow Corridor Monitor</title>
<style>
    body { margin:0; background:#040404; color:#fefefe; font-family:'Nunito',sans-serif; }
    section { height:100vh; display:flex; align-items:center; justify-content:center; font-size:2rem; opacity:0.2; transition:opacity 0.6s ease, transform 0.6s ease; transform:scale(0.9); }
    section.visible { opacity:1; transform:scale(1); }
</style>
</head>
<body>
    <section style="background:#0b132b;">Chapter 1: Flicker</section>
    <section style="background:#1c2541;">Chapter 2: Corridor</section>
    <section style="background:#3a506b;">Chapter 3: Reveal</section>
    <section style="background:#5bc0be; color:#111;">Chapter 4: Dawn</section>
<script>
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.6 });
document.querySelectorAll('section').forEach(section => observer.observe(section));
</script>
</body>
</html>
```
