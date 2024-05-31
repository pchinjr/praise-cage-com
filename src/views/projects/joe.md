---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3c/Joe_%282013_film%29_poster.jpg"
---
### **Title: Geometric Justice with Joe and Geometry Interfaces**

### **Description:**
Inspired by Nicolas Cage's heartfelt role in *Joe*, this project harnesses the power of the Geometry Interfaces API to create an application focused on geometric calculations and visualizations. Just as Joe helps Gary find direction in his life, this project aims to guide users through the complexities of geometry, offering tools to calculate and visualize shapes and their properties. The project melds the themes of mentorship and growth from the film with the precision and clarity of geometric principles.

### **Features:**
- **Shape Calculations:** Compute areas, perimeters, and other properties of basic geometric shapes.
- **Interactive Canvas:** Visualize shapes dynamically based on user input.
- **Educational Insights:** Provide explanations and insights into geometric concepts, echoing the mentorship theme of *Joe*.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geometric Justice with Joe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            padding: 20px;
        }
        #canvas-container {
            position: relative;
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            border: 1px solid #ccc;
        }
        canvas {
            border: 1px solid #000;
        }
        input, button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Geometric Justice with Joe</h1>
    <p>Discover the precision of geometry guided by the spirit of mentorship.</p>

    <div>
        <input type="number" id="radius" placeholder="Radius (for Circle)">
        <button onclick="drawCircle()">Draw Circle</button>
    </div>
    <div>
        <input type="number" id="side" placeholder="Side Length (for Square)">
        <button onclick="drawSquare()">Draw Square</button>
    </div>
    <div>
        <input type="number" id="width" placeholder="Width (for Rectangle)">
        <input type="number" id="height" placeholder="Height (for Rectangle)">
        <button onclick="drawRectangle()">Draw Rectangle</button>
    </div>

    <div id="canvas-container">
        <canvas id="geometryCanvas" width="800" height="400"></canvas>
    </div>

    <script>
        const canvas = document.getElementById('geometryCanvas');
        const ctx = canvas.getContext('2d');

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function drawCircle() {
            const radius = document.getElementById('radius').value;
            if (radius) {
                clearCanvas();
                ctx.beginPath();
                ctx.arc(400, 200, radius, 0, 2 * Math.PI);
                ctx.stroke();
            } else {
                alert('Please enter a valid radius.');
            }
        }

        function drawSquare() {
            const side = document.getElementById('side').value;
            if (side) {
                clearCanvas();
                ctx.beginPath();
                ctx.rect(400 - side / 2, 200 - side / 2, side, side);
                ctx.stroke();
            } else {
                alert('Please enter a valid side length.');
            }
        }

        function drawRectangle() {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            if (width && height) {
                clearCanvas();
                ctx.beginPath();
                ctx.rect(400 - width / 2, 200 - height / 2, width, height);
                ctx.stroke();
            } else {
                alert('Please enter valid dimensions.');
            }
        }
    </script>
</body>
</html>
```

### **References:**
- **[Joe (2013) - Wikipedia](https://en.wikipedia.org/wiki/Joe_(2013_film))**
- **[Geometry Interfaces - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geometry_interfaces)**

### **Project Overview:**
This project merges the heartfelt mentorship of Nicolas Cage's character in *Joe* with the precision of the Geometry Interfaces API. Users can explore geometric shapes, calculating and visualizing them interactively. The educational insights provided enhance understanding, much like Joe's guidance in the film. Embrace the spirit of mentorship and precision to master geometric concepts. Praise Cage!