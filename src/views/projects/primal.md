---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7e/Primal-DVD-Cover.jpg"
---
### **Title: Primal Notes with Primal and Web Storage API**

### **Description:**
Inspired by Nicolas Cage's action-packed and suspenseful role in *Primal*, this project uses the Web Storage API to create a web application that allows users to manage notes related to capturing exotic animals or any other adventurous tasks. The application captures the themes of survival, meticulous planning, and adventure, enabling users to store and retrieve their notes even after closing the browser. This project demonstrates the practical use of the Web Storage API to enhance user interaction and data persistence.

### **Features:**
- **Persistent Notes:** Use the Web Storage API to store notes that persist across browser sessions.
- **Interactive Note Management:** Provide controls for adding, editing, and deleting notes.
- **Thematic Design:** Reflect the adventurous and intense atmosphere of *Primal* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primal Notes with Primal and Web Storage API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1c1c1c;
            color: #f0f0f0;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #2e2e2e;
            border: 1px solid #444;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
            margin-bottom: 20px;
            color: #ff6347;
        }
        .note {
            margin: 20px 0;
            padding: 10px;
            background-color: #3e3e3e;
            border: 1px solid #555;
            border-radius: 5px;
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
            height: 100px;
            border: 1px solid #555;
            border-radius: 5px;
            padding: 10px;
            margin-top: 10px;
            background-color: #3e3e3e;
            color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Primal Notes</h1>
        <p>Manage your notes inspired by Primal.</p>

        <textarea id="noteInput" placeholder="Type your note here..."></textarea>
        <div class="controls">
            <button id="saveButton">Save Note</button>
            <button id="clearButton">Clear Notes</button>
        </div>
        <div class="note" id="noteDisplay">Your saved notes will appear here.</div>
    </div>

    <script>
        const noteInput = document.getElementById('noteInput');
        const saveButton = document.getElementById('saveButton');
        const clearButton = document.getElementById('clearButton');
        const noteDisplay = document.getElementById('noteDisplay');

        function displayNotes() {
            const notes = JSON.parse(localStorage.getItem('primalNotes')) || [];
            noteDisplay.innerHTML = '';
            notes.forEach((note, index) => {
                const noteElement = document.createElement('div');
                noteElement.className = 'note';
                noteElement.textContent = note;
                noteDisplay.appendChild(noteElement);
            });
        }

        saveButton.addEventListener('click', () => {
            const notes = JSON.parse(localStorage.getItem('primalNotes')) || [];
            notes.push(noteInput.value);
            localStorage.setItem('primalNotes', JSON.stringify(notes));
            noteInput.value = '';
            displayNotes();
        });

        clearButton.addEventListener('click', () => {
            localStorage.removeItem('primalNotes');
            displayNotes();
        });

        displayNotes();
    </script>
</body>
</html>
```

### **References:**
- **[Primal (2019) - Wikipedia](https://en.wikipedia.org/wiki/Primal_(2019_film))**
- **[Web Storage API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)**

### **Project Overview:**
This project captures the adventurous and intense atmosphere of *Primal* using the Web Storage API to manage notes effectively. Users can store and retrieve notes, ensuring data persistence across browser sessions. The application demonstrates the practical use of the Web Storage API for enhancing user interaction and data management, reflecting the film's themes of survival, meticulous planning, and adventure. Embrace the determination and resourcefulness of Nicolas Cage’s character to master the use of the Web Storage API in web development. Praise Cage!