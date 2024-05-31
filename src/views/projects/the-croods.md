---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/63/The_Croods.png"
---
### **Title: Prehistoric Play with The Croods and HTML Drag and Drop API**

### **Description:**
Inspired by Nicolas Cage's adventurous role in *The Croods*, this project uses the HTML Drag and Drop API to create an interactive web application where users can drag and drop various prehistoric elements to build their own scenes. The application captures the essence of exploration and creativity, mirroring the journey of the Crood family as they discover new worlds and adapt to changing environments. Users can have fun while learning about the Drag and Drop API through a playful and educational interface.

### **Features:**
- **Drag and Drop Elements:** Drag and drop various prehistoric elements such as characters, plants, and animals.
- **Dynamic Scene Building:** Create and customize scenes by placing elements in different positions.
- **Interactive Learning:** Learn about the Drag and Drop API through engaging and hands-on activities.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prehistoric Play with The Croods</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #a2d5c6;
            color: #333;
            text-align: center;
            padding: 20px;
        }
        #scene {
            border: 2px solid #333;
            width: 80%;
            height: 400px;
            margin: 0 auto;
            position: relative;
            background: #f5f5f5;
        }
        .draggable {
            width: 100px;
            height: 100px;
            cursor: grab;
            position: absolute;
        }
        .draggable:active {
            cursor: grabbing;
        }
        #characters, #plants, #animals {
            display: flex;
            justify-content: center;
            margin: 20px;
        }
        img {
            width: 100px;
            height: 100px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1>Prehistoric Play with The Croods</h1>
    <p>Build your own prehistoric scene with drag and drop elements!</p>

    <div id="characters">
        <img src="https://example.com/crood1.png" alt="Crood Character 1" draggable="true" class="draggable" id="crood1">
        <img src="https://example.com/crood2.png" alt="Crood Character 2" draggable="true" class="draggable" id="crood2">
    </div>
    <div id="plants">
        <img src="https://example.com/plant1.png" alt="Prehistoric Plant 1" draggable="true" class="draggable" id="plant1">
        <img src="https://example.com/plant2.png" alt="Prehistoric Plant 2" draggable="true" class="draggable" id="plant2">
    </div>
    <div id="animals">
        <img src="https://example.com/animal1.png" alt="Prehistoric Animal 1" draggable="true" class="draggable" id="animal1">
        <img src="https://example.com/animal2.png" alt="Prehistoric Animal 2" draggable="true" class="draggable" id="animal2">
    </div>

    <div id="scene"></div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const draggables = document.querySelectorAll('.draggable');
            const scene = document.getElementById('scene');

            draggables.forEach(draggable => {
                draggable.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', draggable.id);
                });
            });

            scene.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            scene.addEventListener('drop', (e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text/plain');
                const element = document.getElementById(id);
                const x = e.clientX - scene.getBoundingClientRect().left - element.clientWidth / 2;
                const y = e.clientY - scene.getBoundingClientRect().top - element.clientHeight / 2;
                element.style.left = `${x}px`;
                element.style.top = `${y}px`;
                scene.appendChild(element);
            });
        });
    </script>
</body>
</html>
```

### **References:**
- **[The Croods (2013) - Wikipedia](https://en.wikipedia.org/wiki/The_Croods)**
- **[HTML Drag and Drop API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)**

### **Project Overview:**
This project captures the adventurous and creative spirit of *The Croods* using the HTML Drag and Drop API. Users can drag and drop elements to build their own prehistoric scenes, learning about the Drag and Drop API in an engaging and interactive way. Embrace the exploration and adaptability of the Crood family to create dynamic web applications. Praise Cage!