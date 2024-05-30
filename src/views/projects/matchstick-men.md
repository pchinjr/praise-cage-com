---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Matchstick_Men.jpg"
---
### Project Title: "Matchstick Men Monitoring: Intersection Observer API"

#### Description
In "Matchstick Men" (2003), Nicolas Cage plays Roy Waller, a con artist struggling with obsessive-compulsive disorder (OCD) and a complicated relationship with his estranged daughter. This project, "Matchstick Men Monitoring," uses the **Intersection Observer API** to create a web application that monitors and tracks elements on the screen, reflecting Roy's meticulous attention to detail and need for control.

"Matchstick Men Monitoring" allows users to observe when specific elements enter or leave the viewport, providing visual feedback similar to Roy's constant need for awareness and control in his surroundings. This application is ideal for developers who need to monitor the visibility of elements for dynamic content loading or user engagement tracking.

#### Starting Code

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matchstick Men Monitoring</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Matchstick Men Monitoring</h1>
        <p>Scroll down to see which elements are being observed.</p>
        <div class="observed" id="element1">Element 1</div>
        <div class="spacer"></div>
        <div class="observed" id="element2">Element 2</div>
        <div class="spacer"></div>
        <div class="observed" id="element3">Element 3</div>
        <div class="spacer"></div>
        <div class="observed" id="element4">Element 4</div>
        <div id="result"></div>
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

.observed {
    width: 100%;
    padding: 50px;
    margin: 20px 0;
    background-color: #e0e0e0;
    border: 2px solid #ccc;
    border-radius: 4px;
}

.spacer {
    height: 400px;
}

#result {
    margin-top: 20px;
    font-size: 1.2em;
}
```

**JavaScript (script.js):**
```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    const result = document.getElementById('result');
    const observedElements = document.querySelectorAll('.observed');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                result.innerText = `${entry.target.id} is in the viewport`;
            } else {
                result.innerText = `${entry.target.id} is out of the viewport`;
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observedElements.forEach(element => {
        observer.observe(element);
    });
});
```

### References
- **Film: "Matchstick Men" (2003)**
  - [Wikipedia Link](https://en.wikipedia.org/wiki/Matchstick_Men)
- **API: Intersection Observer API**
  - [API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)