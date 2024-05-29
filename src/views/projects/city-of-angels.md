---
imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e1/City_Of_Angels.jpg'
---
### Project Title: **"Heavenly Scripts: Angelic Font Styler"**

### Description:
Inspired by the spiritual and transcendent themes of "City of Angels," where Nicolas Cage plays an angel experiencing the mortal world, "Heavenly Scripts: Angelic Font Styler" is a web application that allows users to experiment with text using a range of ethereal and angelic font styles. Utilizing the CSS Font Loading API, this application dynamically loads various custom fonts that convey a sense of divinity or otherworldliness, providing users the tools to create inspirational quotes, messages, or any text content that resonates with the heavenly aesthetic.

This tool is ideal for graphic designers, spiritual bloggers, or anyone looking to add a celestial touch to their digital content, aligning closely with the film's themes of love, sacrifice, and the ethereal.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heavenly Scripts: Angelic Font Styler</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Create Your Heavenly Script</h1>
    <textarea id="textInput" placeholder="Type your message here..."></textarea>
    <div id="styledText"></div>
    <button onclick="applyFont()">Style My Text</button>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS (styles.css):
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

textarea {
    width: 60%;
    height: 100px;
    margin-bottom: 20px;
}

#styledText {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #ccc;
    min-height: 50px;
    font-size: 24px;
    font-family: 'Angelic', serif;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}
```

#### JavaScript (script.js):
```javascript
document.fonts.load('10pt "Angelic"').then(function () {
    console.log('Angelic font is ready to use.');
});

function applyFont() {
    const textInput = document.getElementById('textInput').value;
    const styledText = document.getElementById('styledText');
    styledText.textContent = textInput;
    styledText.style.fontFamily = 'Angelic';
}
```

### References:
- **Film**: [City of Angels (1998)](https://en.wikipedia.org/wiki/City_of_Angels_(film))
- **API**: [CSS Font Loading API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API)

"Heavenly Scripts: Angelic Font Styler" enhances users' ability to convey messages with an angelic and spiritual nuance, much like the thematic elements of "City of Angels." This project not only provides a tool for artistic and spiritual expression but also demonstrates a practical use of the CSS Font Loading API to enhance web typography dynamically.
