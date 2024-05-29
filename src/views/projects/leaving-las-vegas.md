---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Leaving_las_vegas_ver1.jpg/220px-Leaving_las_vegas_ver1.jpg
---
### Project Title: **"Echoes of Vegas: Memory Box"**

### Description:
Inspired by "Leaving Las Vegas," a film that explores themes of loss, memory, and self-destruction through the life of Ben Sanderson, played by Nicolas Cage, "Echoes of Vegas: Memory Box" is a web application designed to securely store and recall cherished memories. This project utilizes the Storage Access API to provide a safe and private way for users to store personal memories, photos, and notes in a digital format that emphasizes privacy and user consent.

This application is particularly aimed at those who want to keep their personal memories private or need a secure place to reflect on past experiences without fear of unauthorized access.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echoes of Vegas: Memory Box</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Memory Box</h1>
    <div id="memoryContainer"></div>
    <button onclick="storeMemory()">Store New Memory</button>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS (styles.css):
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
    color: #333;
    text-align: center;
    padding: 20px;
}

#memoryContainer {
    margin-top: 20px;
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
}
```

#### JavaScript (script.js):
```javascript
document.addEventListener('DOMContentLoaded', async () => {
    if (await document.hasStorageAccess()) {
        console.log('Storage access granted');
    } else {
        console.log('Storage access not granted');
    }
});

async function storeMemory() {
    if (await document.requestStorageAccess()) {
        const memory = prompt("Enter your memory:");
        localStorage.setItem('latestMemory', memory);
        document.getElementById('memoryContainer').textContent = 'Memory stored successfully!';
    } else {
        alert("Storage access denied.");
    }
}
```

### References:
- **Film**: [Leaving Las Vegas (1995)](https://en.wikipedia.org/wiki/Leaving_Las_Vegas)
- **API**: [Storage Access API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API)

"Echoes of Vegas: Memory Box" not only touches on the poignant themes of "Leaving Las Vegas" but also integrates these into a functional application that provides a private space for users to secure their personal histories, mirroring the character's journey through the city and his life. This project blends emotional resonance with practical web technology, offering a unique tool for personal reflection and memory preservation.
