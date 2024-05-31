---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Butchers_crossing_poster.jpg"
---
### **Title: Frontier Files with Butcher's Crossing and File System API**

### **Description:**
Inspired by Nicolas Cage's rugged and transformative role in *Butcher's Crossing*, this project uses the File System API to create a web application that allows users to manage and interact with files, reflecting the film's themes of survival, exploration, and transformation. The application captures the raw and adventurous atmosphere of the film, enabling users to create, read, and write files dynamically. This project showcases the practical use of the File System API to enhance user interaction and file management.

### **Features:**
- **File Management:** Use the File System API to create, read, and write files.
- **Interactive File Operations:** Provide controls for users to manage files dynamically.
- **Thematic Design:** Reflect the rugged and transformative atmosphere of *Butcher's Crossing* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontier Files with Butcher's Crossing and File System API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #2d2d2d;
            color: #f0f0f0;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #3c3c3c;
            border: 1px solid #444;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
            margin-bottom: 20px;
            color: #ff4500;
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
        textarea {
            width: 100%;
            height: 150px;
            border: 1px solid #555;
            border-radius: 5px;
            padding: 10px;
            margin-top: 10px;
            background-color: #444;
            color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Frontier Files</h1>
        <p>Manage your files inspired by Butcher's Crossing.</p>

        <textarea id="fileContent" placeholder="Type your file content here..."></textarea>
        <div class="controls">
            <button id="createButton">Create File</button>
            <button id="readButton">Read File</button>
            <button id="writeButton">Write File</button>
        </div>
    </div>

    <script>
        let fileHandle;

        document.getElementById('createButton').addEventListener('click', async () => {
            const newHandle = await window.showSaveFilePicker({
                suggestedName: 'new-file.txt',
                types: [{
                    description: 'Text Files',
                    accept: { 'text/plain': ['.txt'] },
                }],
            });
            fileHandle = newHandle;
            const writableStream = await fileHandle.createWritable();
            await writableStream.write('');
            await writableStream.close();
            alert('File created successfully!');
        });

        document.getElementById('readButton').addEventListener('click', async () => {
            [fileHandle] = await window.showOpenFilePicker({
                types: [{
                    description: 'Text Files',
                    accept: { 'text/plain': ['.txt'] },
                }],
            });
            const file = await fileHandle.getFile();
            const contents = await file.text();
            document.getElementById('fileContent').value = contents;
            alert('File read successfully!');
        });

        document.getElementById('writeButton').addEventListener('click', async () => {
            if (!fileHandle) {
                alert('No file is selected.');
                return;
            }
            const writableStream = await fileHandle.createWritable();
            await writableStream.write(document.getElementById('fileContent').value);
            await writableStream.close();
            alert('File written successfully!');
        });
    </script>
</body>
</html>
```

### **References:**
- **[Butcher's Crossing (2021) - Wikipedia](https://en.wikipedia.org/wiki/Butcher%27s_Crossing)**
- **[File System API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)**

### **Project Overview:**
This project captures the raw and adventurous atmosphere of *Butcher's Crossing* using the File System API to manage and interact with files. Users can create, read, and write file contents dynamically, providing an engaging and practical experience. The application showcases the practical use of the File System API for enhancing user interaction and file management, reflecting the film's themes of survival, exploration, and transformation. Embrace the rugged determination and exploration spirit of Nicolas Cage’s character to master the use of the File System API in web development. Praise Cage!