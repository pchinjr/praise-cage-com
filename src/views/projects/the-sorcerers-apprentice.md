---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Sorcerers_apprentice_poster.jpg"
---
### Project Title: "The Sorcerer's Apprentice: Magical File Management with File System API"

#### Description:
In this project, we blend the magical and adventurous elements of *The Sorcerer's Apprentice* with the capabilities of the File System API. *The Sorcerer's Apprentice* follows a young man who becomes an apprentice to a powerful sorcerer and learns to harness magical powers. Similarly, this project will allow users to manage files and directories with magical ease, leveraging the power of the File System API to read, write, and manipulate files.

#### Features:
1. **File Management**: Use the File System API to create, read, write, and delete files and directories.
2. **Interactive Interface**: Provide an interactive interface for users to manage files as if they were performing magical tasks.
3. **Thematic Design**: Implement a mystical and magical design reflecting the themes of *The Sorcerer's Apprentice*.

#### Starting Code:
Here's a basic setup to get you started. This includes the initial HTML, CSS, and JavaScript to integrate the File System API and create a magical file management experience.

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Sorcerer's Apprentice: Magical File Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>The Sorcerer's Apprentice: Magical File Management</h1>
    <p>Manage your files with the magic of the File System API!</p>
    <button id="createFileBtn">Create File</button>
    <button id="readFileBtn">Read File</button>
    <button id="writeFileBtn">Write to File</button>
    <button id="deleteFileBtn">Delete File</button>
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
let fileHandle;

async function getFileHandle() {
    if (!fileHandle) {
        [fileHandle] = await window.showOpenFilePicker();
    }
    return fileHandle;
}

document.getElementById('createFileBtn').addEventListener('click', async () => {
    try {
        const opts = { type: 'save-file', suggestedName: 'magic.txt' };
        fileHandle = await window.showSaveFilePicker(opts);
        const writable = await fileHandle.createWritable();
        await writable.write('This is a magical file created by the sorcerer’s apprentice.');
        await writable.close();
        document.getElementById('output').innerText = 'File created successfully!';
    } catch (error) {
        document.getElementById('output').innerText = `Error: ${error.message}`;
    }
});

document.getElementById('readFileBtn').addEventListener('click', async () => {
    try {
        fileHandle = await getFileHandle();
        const file = await fileHandle.getFile();
        const contents = await file.text();
        document.getElementById('output').innerText = `File contents: ${contents}`;
    } catch (error) {
        document.getElementById('output').innerText = `Error: ${error.message}`;
    }
});

document.getElementById('writeFileBtn').addEventListener('click', async () => {
    try {
        fileHandle = await getFileHandle();
        const writable = await fileHandle.createWritable();
        const content = 'Updated content written by the sorcerer’s apprentice.';
        await writable.write(content);
        await writable.close();
        document.getElementById('output').innerText = 'File written successfully!';
    } catch (error) {
        document.getElementById('output').innerText = `Error: ${error.message}`;
    }
});

document.getElementById('deleteFileBtn').addEventListener('click', async () => {
    try {
        fileHandle = await getFileHandle();
        await fileHandle.remove();
        fileHandle = null;
        document.getElementById('output').innerText = 'File deleted successfully!';
    } catch (error) {
        document.getElementById('output').innerText = `Error: ${error.message}`;
    }
});
```

#### References:
- **The Sorcerer's Apprentice (2010)**:
  - [Wikipedia](https://en.wikipedia.org/wiki/The_Sorcerer%27s_Apprentice_(2010_film))
- **File System API**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)

**Praise Cage!** Embark on this coding adventure and create an interactive file management system that leverages the File System API, inspired by the magical world of *The Sorcerer's Apprentice*.