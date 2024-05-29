---
imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/FaceOff_poster.jpg'
---
### Project Title: **"Identity Access: Permissions Gateway"**

### Description:
Inspired by the dramatic identity swaps in "Face/Off," where characters assume each other's lives and privileges, "Identity Access: Permissions Gateway" is a web application that utilizes the Permissions API to manage and simulate access control based on user identities. This application allows users to experience how changing roles could affect their access to different levels of information or system functionalities, reflecting the thematic elements of identity and privilege seen in the film.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Identity Access: Permissions Gateway</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Permissions Gateway</h1>
    <button id="btnCamera">Access Camera</button>
    <button id="btnMicrophone">Access Microphone</button>
    <div id="status"></div>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS (styles.css):
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    padding: 20px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    margin: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#status {
    margin-top: 20px;
}
```

#### JavaScript (script.js):
```javascript
document.getElementById('btnCamera').addEventListener('click', async () => {
    const permissionStatus = await navigator.permissions.query({name: 'camera'});
    updateStatus(permissionStatus);
});

document.getElementById('btnMicrophone').addEventListener('click', async () => {
    const permissionStatus = await navigator.permissions.query({name: 'microphone'});
    updateStatus(permissionStatus);
});

function updateStatus(permissionStatus) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = `Permission for ${permissionStatus.name}: ${permissionStatus.state}`;
    permissionStatus.onchange = () => {
        statusDiv.textContent = `Permission for ${permissionStatus.name} changed to: ${permissionStatus.state}`;
    };
}
```

### References:
- **Film**: [Face/Off (1997)](https://en.wikipedia.org/wiki/Face/Off)
- **API**: [Permissions API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)

"Identity Access: Permissions Gateway" not only reflects the key elements of identity changes and control from "Face/Off" but also leverages modern web technologies to illustrate the impact of permissions in digital environments. This project enhances user understanding of privacy settings and access rights, mirroring the high-stakes access to personal and classified information as portrayed in the film.
