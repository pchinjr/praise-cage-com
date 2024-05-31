---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/91/The_Croods_-_A_New_Age.png"
---
### **Title: Prehistoric Selections with The Croods: A New Age and Selection API**

### **Description:**
Inspired by the adventurous and family-centric themes of *The Croods: A New Age*, this project uses the Selection API to create a web application that allows users to interactively select and highlight text elements related to the Croods' adventures. The application captures the vibrant and dynamic atmosphere of the film, enabling users to explore and highlight different parts of the story. This project demonstrates the practical use of the Selection API to enhance user interaction and engagement.

### **Features:**
- **Interactive Text Selection:** Use the Selection API to allow users to select and highlight text elements.
- **Dynamic Feedback:** Provide visual feedback when text is selected and highlighted.
- **Thematic Design:** Reflect the vibrant and dynamic atmosphere of *The Croods: A New Age* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prehistoric Selections with The Croods: A New Age and Selection API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            margin-bottom: 20px;
            color: #ff6347;
        }
        p {
            text-align: left;
            line-height: 1.6;
        }
        .highlight {
            background-color: #ffeb3b;
            color: #333;
            padding: 0 5px;
            border-radius: 3px;
        }
        .controls {
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            border-radius: 5px;
            border: none;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Prehistoric Selections</h1>
        <p>Explore and highlight the adventures of The Croods inspired by The Croods: A New Age.</p>

        <p id="textContent">
            The Croods are back with a new adventure. As they journey through a strange new world filled with fantastic creatures and hidden dangers, they encounter another family, the Bettermans, who claim to be more evolved and advanced. The two families must learn to coexist and work together to overcome the challenges they face.
        </p>
        <div class="controls">
            <button id="highlightButton">Highlight Selection</button>
        </div>
    </div>

    <script>
        const textContent = document.getElementById('textContent');
        const highlightButton = document.getElementById('highlightButton');

        highlightButton.addEventListener('click', () => {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const selectedText = range.extractContents();
                
                const span = document.createElement('span');
                span.className = 'highlight';
                span.appendChild(selectedText);
                range.insertNode(span);
                
                selection.removeAllRanges();
            }
        });
    </script>
</body>
</html>
```

### **References:**
- **[The Croods: A New Age (2020) - Wikipedia](https://en.wikipedia.org/wiki/The_Croods:_A_New_Age)**
- **[Selection API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Selection_API)**

### **Project Overview:**
This project captures the vibrant and dynamic atmosphere of *The Croods: A New Age* using the Selection API to allow users to interactively select and highlight text elements. Users can explore and highlight different parts of the story, providing an engaging and interactive experience. The application demonstrates the practical use of the Selection API for enhancing user interaction and engagement, reflecting the film's themes of adventure, family, and discovery. Embrace the excitement and curiosity of the Croods to master the use of the Selection API in web development. Praise Cage!