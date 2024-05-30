---
imageUrl:"https://upload.wikimedia.org/wikipedia/en/e/e0/Astro_boy_ver7.jpg"
---
### Project Title: "Astro Boy: Secure Data Storage with Storage Access API"

#### Description:
In this project, we integrate the futuristic and high-tech world of *Astro Boy* with the capabilities of the Storage Access API. *Astro Boy* tells the story of a young robot navigating a technologically advanced world. Similarly, this project will enable users to securely manage access to storage data, enhancing privacy and control over stored information.

#### Features:
1. **Secure Data Storage**: Use the Storage Access API to manage access to storage data securely.
2. **User Interaction**: Allow users to grant or deny access to storage, providing control over their data.
3. **Thematic Design**: Implement a futuristic design reflecting the technological advancements in *Astro Boy*.

#### Starting Code:
Here's a basic setup to get you started. This includes the initial HTML, CSS, and JavaScript to integrate the Storage Access API and create a secure data storage system.

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astro Boy: Secure Data Storage</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Astro Boy: Secure Data Storage</h1>
    <p>Manage access to your data securely with the Storage Access API!</p>
    <button id="requestAccessBtn">Request Storage Access</button>
    <button id="checkAccessBtn">Check Storage Access</button>
    <div id="output"></div>

    <script src="main.js"></script>
</body>
</html>
```

**styles.css**:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #111;
    color: #fff;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #ff4500;
}

button {
    background-color: #ff4500;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 5px;
}

#output {
    margin-top: 20px;
    font-size: 18px;
    white-space: pre-wrap;
    text-align: left;
}
```

**main.js**:
```javascript
document.getElementById('requestAccessBtn').addEventListener('click', async () => {
    if ('hasStorageAccess' in document && 'requestStorageAccess' in document) {
        try {
            const hasAccess = await document.hasStorageAccess();
            if (hasAccess) {
                document.getElementById('output').innerText = 'You already have storage access.';
            } else {
                await document.requestStorageAccess();
                document.getElementById('output').innerText = 'Storage access granted!';
            }
        } catch (error) {
            document.getElementById('output').innerText = `Storage access request failed: ${error.message}`;
        }
    } else {
        document.getElementById('output').innerText = 'Storage Access API is not supported in this browser.';
    }
});

document.getElementById('checkAccessBtn').addEventListener('click', async () => {
    if ('hasStorageAccess' in document) {
        try {
            const hasAccess = await document.hasStorageAccess();
            document.getElementById('output').innerText = hasAccess ? 'You have storage access.' : 'You do not have storage access.';
        } catch (error) {
            document.getElementById('output').innerText = `Error checking storage access: ${error.message}`;
        }
    } else {
        document.getElementById('output').innerText = 'Storage Access API is not supported in this browser.';
    }
});
```

#### References:
- **Astro Boy (2009)**:
  - [Wikipedia](https://en.wikipedia.org/wiki/Astro_Boy_(film))
- **Storage Access API**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API)

**Praise Cage!** Embark on this coding adventure and create a secure data storage system that leverages the Storage Access API, inspired by the futuristic world of *Astro Boy*.