---
imageUrl:"https://upload.wikimedia.org/wikipedia/en/e/ea/Bangkok_dangerous_2008_poster.jpg"
---
### Project Title: "Bangkok Dangerous: Dynamic Styles with CSS Properties and Values API"

#### Description:
In this project, we combine the action-packed and atmospheric elements of *Bangkok Dangerous* with the functionality of the CSS Properties and Values API. *Bangkok Dangerous* follows Joe, a hitman on a mission in Bangkok, navigating through the city's dangers and complexities. Similarly, this project will create a dynamic and adaptable web page that changes its styles based on custom CSS properties, providing a visually engaging experience.

#### Features:
1. **Dynamic Styles**: Use the CSS Properties and Values API to define and manipulate custom CSS properties, allowing for dynamic style changes.
2. **Interactive Elements**: Create interactive elements that change appearance based on user actions, inspired by the intense and unpredictable nature of the film.
3. **Thematic Design**: Implement a dark and edgy design that reflects the mood and atmosphere of *Bangkok Dangerous*.

#### Starting Code:
Here's a basic setup to get you started. This includes the initial HTML, CSS, and JavaScript to integrate the CSS Properties and Values API and create a dynamic styling experience.

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bangkok Dangerous: Dynamic Styles</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Bangkok Dangerous</h1>
    <p>Experience the dynamic and dangerous world of Bangkok with adaptive styles!</p>
    <div id="content">
        <button id="toggleThemeBtn">Toggle Theme</button>
    </div>

    <script src="main.js"></script>
</body>
</html>
```

**styles.css**:
```css
body {
    font-family: Arial, sans-serif;
    background-color: var(--background-color, #111);
    color: var(--text-color, #fff);
    text-align: center;
    padding: 20px;
}

h1 {
    color: var(--accent-color, #ff4500);
}

button {
    background-color: var(--button-bg-color, #ff4500);
    color: var(--button-text-color, white);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.dark-theme {
    --background-color: #111;
    --text-color: #fff;
    --accent-color: #ff4500;
    --button-bg-color: #ff4500;
    --button-text-color: white;
}

.light-theme {
    --background-color: #f0f0f0;
    --text-color: #333;
    --accent-color: #d9534f;
    --button-bg-color: #d9534f;
    --button-text-color: white;
}
```

**main.js**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');

    toggleThemeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.replace('dark-theme', 'light-theme');
        } else {
            document.body.classList.replace('light-theme', 'dark-theme');
        }
    });

    // Initially set the theme to dark
    document.body.classList.add('dark-theme');
});
```

#### References:
- **Bangkok Dangerous (2008)**:
  - [Wikipedia](https://en.wikipedia.org/wiki/Bangkok_Dangerous_(2008_film))
- **CSS Properties and Values API**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API)

**Praise Cage!** Embark on this coding adventure and create a dynamic web experience that adapts its styles using the CSS Properties and Values API, inspired by the intense and atmospheric film *Bangkok Dangerous*.