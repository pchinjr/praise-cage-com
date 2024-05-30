---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Adaptation._film.jpg"
---

### Project Title: "Adaptation Achievements: Badging API with 'Adaptation'"

#### Description
In the film "Adaptation" (2002), Nicolas Cage portrays Charlie Kaufman, a screenwriter grappling with the challenges of adapting a book into a screenplay. This project, "Adaptation Achievements," uses the **Badging API** to create an application that awards users virtual badges as they complete creative writing tasks or milestones. Just as Charlie struggles and overcomes various obstacles in his creative process, users can earn badges that represent their progress and achievements.

"Adaptation Achievements" encourages users to set writing goals and track their progress, rewarding them with badges for milestones such as word count goals, time spent writing, and number of drafts completed.

#### Starting Code

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adaptation Achievements</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Adaptation Achievements</h1>
        <p>Set your writing goals and earn badges as you achieve them.</p>
        <div class="input-group">
            <label for="wordCount">Word Count Goal:</label>
            <input type="number" id="wordCount" placeholder="Enter your word count goal">
        </div>
        <div class="input-group">
            <label for="timeSpent">Time Spent Writing (minutes):</label>
            <input type="number" id="timeSpent" placeholder="Enter your time spent writing">
        </div>
        <button onclick="awardBadge()">Award Badge</button>
        <div id="badgeResult"></div>
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

.input-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#badgeResult {
    margin-top: 20px;
    font-size: 1.2em;
}
```

**JavaScript (script.js):**
```javascript
async function awardBadge() {
    const wordCount = document.getElementById('wordCount').value;
    const timeSpent = document.getElementById('timeSpent').value;

    if (wordCount && timeSpent) {
        try {
            await navigator.setAppBadge(parseInt(wordCount));
            document.getElementById('badgeResult').innerText = `Badge awarded for ${wordCount} words and ${timeSpent} minutes of writing!`;
        } catch (error) {
            document.getElementById('badgeResult').innerText = `Error awarding badge: ${error.message}`;
        }
    } else {
        document.getElementById('badgeResult').innerText = 'Please enter both word count and time spent.';
    }
}
```

### References
- **Film: "Adaptation" (2002)**
  - [Wikipedia Link](https://en.wikipedia.org/wiki/Adaptation_(film))
- **API: Badging API**
  - [API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Badging_API)