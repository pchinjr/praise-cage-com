---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/37/Grand_Isle_2019_film_poster.jpg"
---
### **Title: Dark Highlights with Grand Isle and CSS Custom Highlight API**

### **Description:**
Inspired by Nicolas Cage's suspenseful and thrilling role in *Grand Isle*, this project uses the CSS Custom Highlight API to create a web application that allows users to highlight and mark text sections that represent key plot points and mysterious elements. The application captures the themes of suspense, mystery, and hidden truths, enabling users to interactively highlight parts of the text, reflecting the dark and ominous atmosphere of the film. This project demonstrates the practical use of the CSS Custom Highlight API to enhance user interaction and visual emphasis.

### **Features:**
- **Interactive Highlighting:** Use the CSS Custom Highlight API to create and apply custom highlights to text sections.
- **Thematic Design:** Reflect the dark and mysterious atmosphere of *Grand Isle* through the application's design and interactions.
- **Highlight Key Plot Points:** Allow users to mark and highlight text that represents key plot points and mysterious elements.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Highlights with Grand Isle and CSS Custom Highlight API</title>
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
        p {
            text-align: left;
            line-height: 1.6;
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
        mark {
            background-color: #ff6347;
            color: #1c1c1c;
            padding: 0 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dark Highlights</h1>
        <p>Interactively highlight key plot points inspired by Grand Isle.</p>

        <p id="textContent">
            Walter (Nicolas Cage) and his wife lure a young man into their Victorian home to escape a hurricane. As the storm rages on, secrets are revealed, and the young man is accused of murder. The plot thickens as dark truths and hidden motives come to light.
        </p>
        <div class="controls">
            <button id="highlightButton">Highlight Key Points</button>
        </div>
    </div>

    <script>
        const textContent = document.getElementById('textContent');
        const highlightButton = document.getElementById('highlightButton');

        if (CSS.highlights) {
            const highlight = new Highlight();
            CSS.highlights.set('darkHighlight', highlight);

            highlightButton.addEventListener('click', () => {
                const range = new Range();
                const text = textContent.textContent;
                const keyPhrases = [
                    'lure a young man',
                    'escape a hurricane',
                    'accused of murder',
                    'dark truths',
                    'hidden motives'
                ];

                keyPhrases.forEach(phrase => {
                    const startIndex = text.indexOf(phrase);
                    if (startIndex !== -1) {
                        range.setStart(textContent.firstChild, startIndex);
                        range.setEnd(textContent.firstChild, startIndex + phrase.length);
                        highlight.add(range);
                    }
                });

                textContent.setAttribute('style', `color: #f0f0f0; background-color: #2e2e2e;`);
            });
        } else {
            console.warn('CSS Custom Highlight API is not supported in this browser.');
            highlightButton.addEventListener('click', () => {
                const text = textContent.innerHTML;
                const keyPhrases = [
                    'lure a young man',
                    'escape a hurricane',
                    'accused of murder',
                    'dark truths',
                    'hidden motives'
                ];

                keyPhrases.forEach(phrase => {
                    const regex = new RegExp(`(${phrase})`, 'gi');
                    textContent.innerHTML = textContent.innerHTML.replace(regex, `<mark>$1</mark>`);
                });
            });
        }
    </script>
</body>
</html>
```

### **References:**
- **[Grand Isle (2019) - Wikipedia](https://en.wikipedia.org/wiki/Grand_Isle_(film))**
- **[CSS Custom Highlight API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Highlight_API)**

### **Project Overview:**
This project captures the dark and mysterious atmosphere of *Grand Isle* using the CSS Custom Highlight API to interactively highlight key plot points and mysterious elements. Users can highlight sections of text that represent significant moments and hidden truths, providing an engaging and interactive experience. The application demonstrates the practical use of the CSS Custom Highlight API for enhancing user interaction and visual emphasis, reflecting the film's themes of suspense, mystery, and hidden truths. Embrace the intensity and suspense of Nicolas Cage’s character to master the use of the CSS Custom Highlight API in web development. Praise Cage!