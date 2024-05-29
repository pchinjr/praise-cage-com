---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/8mm-film-poster.jpg/220px-8mm-film-poster.jpg
---

### Project Title: **"Shadow Trace: Digital Footprint Analyzer"**

### Description:
Inspired by "8MM," where Nicolas Cage's character, Tom Welles, delves into the dark underworld of illegal activities to uncover the truth behind a mysterious film, "Shadow Trace: Digital Footprint Analyzer" is a web application that uses the DOM (Document Object Model) API to help users understand and visualize the trail of digital footprints they leave while browsing online. This tool aims to educate users about privacy and security by showing how easily one's actions can be tracked on the web.

The application features a live interaction tracker that records and displays various user actions, such as clicks, text inputs, and page navigations within the site. This real-time demonstration will help users understand how website interactions can be used to gather data about their behavior. This mirrors the investigative and revelation aspects of "8MM."

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shadow Trace: Digital Footprint Analyzer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Digital Footprint Analyzer</h1>
    <div>
        <input type="text" placeholder="Type here..." id="textInput">
        <button id="clickButton">Click Me!</button>
    </div>
    <div id="activityLog">Activity log will be displayed here...</div>
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

#activityLog {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    height: 300px;
    overflow-y: scroll;
    background-color: #fff;
}

input, button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
}

```

#### JavaScript (script.js):
```javascript
const activityLog = document.getElementById('activityLog');

document.getElementById('textInput').addEventListener('input', function(event) {
    logActivity(`User typed: "${event.target.value}"`);
});

document.getElementById('clickButton').addEventListener('click', function() {
    logActivity('User clicked the button.');
});

function logActivity(action) {
    const entry = document.createElement('div');
    entry.textContent = action;
    activityLog.appendChild(entry);
    activityLog.scrollTop = activityLog.scrollHeight; // Auto-scroll to the bottom of the log
}
```

### References:
- **Film**: [8MM (1999)](https://en.wikipedia.org/wiki/8mm_(film))
- **API**: [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

"Shadow Trace: Digital Footprint Analyzer" not only reflects the investigative journey of the protagonist in "8MM" but also provides a useful educational tool for understanding digital privacy and the implications of one's online actions. By visualizing how interactions with web elements can be tracked, this project raises awareness about the importance of safeguarding personal information online.
