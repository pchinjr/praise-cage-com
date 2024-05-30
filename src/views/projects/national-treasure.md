---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/12/Movie_national_treasure.JPG"
---
### Project Title: "National Treasure: Animated Clues with Web Animations API"

#### Description
In "National Treasure" (2004), Nicolas Cage stars as Benjamin Franklin Gates, a treasure hunter on a quest to uncover hidden secrets and historical artifacts. This project, "Animated Clues," utilizes the **Web Animations API** to create an interactive web application where users can reveal and animate clues, reflecting the adventure and excitement of treasure hunting as seen in the movie.

"Animated Clues" allows users to click on elements to uncover hidden messages and animations, providing a dynamic way to present information and engage users, much like the clues and revelations in "National Treasure."

#### Starting Code

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>National Treasure: Animated Clues</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>National Treasure: Animated Clues</h1>
        <p>Click on the treasure chests to reveal hidden clues!</p>
        <div class="chest" onclick="revealClue(this)">💰</div>
        <div class="chest" onclick="revealClue(this)">💰</div>
        <div class="chest" onclick="revealClue(this)">💰</div>
        <div id="clue"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**CSS (styles.css):**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
}

.chest {
    font-size: 3em;
    cursor: pointer;
    margin: 10px;
    display: inline-block;
}

#clue {
    margin-top: 20px;
    font-size: 1.2em;
    display: none;
}
```

**JavaScript (script.js):**
```javascript
function revealClue(element) {
    const clue = document.getElementById('clue');
    clue.innerText = "You found a clue! The next step in your treasure hunt awaits...";
    clue.style.display = "block";
    clue.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 1000,
        fill: 'forwards'
    });

    element.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)', offset: 0.5 },
        { transform: 'scale(1)' }
    ], {
        duration: 500,
        fill: 'forwards'
    });
}
```

### References
- **Film: "National Treasure" (2004)**
  - [Wikipedia Link](https://en.wikipedia.org/wiki/National_Treasure_(film))
- **API: Web Animations API**
  - [API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)