---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4f/Color_Out_of_Space_%282019%29_poster.jpg"
---
### **Title: Cosmic Transformations with Color Out of Space and Resize Observer API**

### **Description:**
Inspired by Nicolas Cage's role in *Color Out of Space*, this project uses the Resize Observer API to create a web application that reacts to changes in element sizes, reflecting the film's themes of cosmic transformations and otherworldly influences. The application captures the eerie and transformative atmosphere of the film, allowing users to experience dynamic visual changes as they resize elements. This project demonstrates the practical use of the Resize Observer API to enhance interactivity and responsiveness.

### **Features:**
- **Dynamic Transformations:** Use the Resize Observer API to monitor and respond to changes in element sizes.
- **Interactive Resizing:** Provide controls for users to resize elements and observe transformations.
- **Thematic Design:** Reflect the eerie and transformative atmosphere of *Color Out of Space* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cosmic Transformations with Color Out of Space and Resize Observer API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1c1c1c;
            color: #f0f0f0;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #2e2e2e;
            border: 1px solid #444;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
            margin-bottom: 20px;
            color: #ff6347;
        }
        .resize-box {
            width: 200px;
            height: 200px;
            background-color: #444;
            margin: 20px auto;
            resize: both;
            overflow: auto;
            border: 2px solid #555;
            border-radius: 10px;
        }
        .transformations {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cosmic Transformations</h1>
        <p>Experience dynamic transformations inspired by Color Out of Space.</p>

        <div class="resize-box" id="resizeBox">
            Resize me!
        </div>
        <div class="transformations" id="transformations">
            Current size: 200px x 200px
        </div>
    </div>

    <script>
        const resizeBox = document.getElementById('resizeBox');
        const transformations = document.getElementById('transformations');

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                transformations.textContent = `Current size: ${Math.round(width)}px x ${Math.round(height)}px`;
                
                const colorValue = Math.min(Math.max(width, height), 255);
                const color = `rgb(${colorValue}, ${128 + colorValue / 2}, ${255 - colorValue / 2})`;
                resizeBox.style.backgroundColor = color;
            }
        });

        resizeObserver.observe(resizeBox);
    </script>
</body>
</html>
```

### **References:**
- **[Color Out of Space (2019) - Wikipedia](https://en.wikipedia.org/wiki/Color_Out_of_Space_(film))**
- **[Resize Observer API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)**

### **Project Overview:**
This project captures the eerie and transformative atmosphere of *Color Out of Space* using the Resize Observer API to monitor and respond to changes in element sizes. Users can resize elements and observe dynamic visual transformations, providing an engaging and interactive experience. The application demonstrates the practical use of the Resize Observer API for enhancing interactivity and responsiveness, reflecting the film's themes of cosmic transformations and otherworldly influences. Embrace the intensity and surrealism of Nicolas Cage’s character to master the use of the Resize Observer API in web development. Praise Cage!