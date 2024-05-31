---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Mandy_%282018_film%29.png"
---
### **Title: Vengeful Shadows with Mandy and Pointer Events**

### **Description:**
Inspired by Nicolas Cage's intense and surreal role in *Mandy*, this project uses the Pointer Events API to create a web application that captures the eerie and vengeful atmosphere of the film. The application allows users to interact with shadowy elements that react to their pointer movements, creating a dynamic and immersive experience. This project demonstrates the practical use of the Pointer Events API to enhance user interaction and engagement.

### **Features:**
- **Interactive Shadows:** Use the Pointer Events API to create shadowy elements that react to pointer movements.
- **Dynamic Feedback:** Provide immediate visual feedback for pointer interactions.
- **Thematic Design:** Reflect the eerie and intense atmosphere of *Mandy* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vengeful Shadows with Mandy and Pointer Events</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #f0f0f0;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1c1c1c;
            border: 1px solid #444;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
            margin-bottom: 20px;
            color: #ff6347;
        }
        .shadow-element {
            width: 100px;
            height: 100px;
            background-color: #ff6347;
            border-radius: 50%;
            position: absolute;
            transition: transform 0.1s ease;
        }
        .area {
            width: 100%;
            height: 400px;
            border: 2px solid #444;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Vengeful Shadows</h1>
        <p>Interact with the shadows inspired by Mandy.</p>

        <div class="area" id="interactiveArea">
            <div class="shadow-element" id="shadow1"></div>
            <div class="shadow-element" id="shadow2"></div>
            <div class="shadow-element" id="shadow3"></div>
        </div>
    </div>

    <script>
        const interactiveArea = document.getElementById('interactiveArea');
        const shadows = document.querySelectorAll('.shadow-element');

        interactiveArea.addEventListener('pointermove', (e) => {
            const rect = interactiveArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            shadows.forEach((shadow, index) => {
                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                shadow.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
            });
        });

        interactiveArea.addEventListener('pointerdown', (e) => {
            shadows.forEach(shadow => {
                shadow.style.backgroundColor = '#900C3F';
            });
        });

        interactiveArea.addEventListener('pointerup', (e) => {
            shadows.forEach(shadow => {
                shadow.style.backgroundColor = '#ff6347';
            });
        });
    </script>
</body>
</html>
```

### **References:**
- **[Mandy (2018) - Wikipedia](https://en.wikipedia.org/wiki/Mandy_(2018_film))**
- **[Pointer Events - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)**

### **Project Overview:**
This project captures the eerie and intense atmosphere of *Mandy* using the Pointer Events API to create interactive shadowy elements that react to pointer movements. Users can experience dynamic feedback and visual effects, providing an immersive and engaging interaction. The application demonstrates the practical use of the Pointer Events API for enhancing user interaction and engagement, reflecting the film's themes of vengeance and surrealism. Embrace the intensity and otherworldliness of Nicolas Cage’s character to master the use of the Pointer Events API in web development. Praise Cage!