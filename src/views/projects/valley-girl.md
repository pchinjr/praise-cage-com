---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c8/Valley_girl_poster.jpg"
---

### Project Title: 
**"Memory Lane: Storing Your 80s Memories with Valley Girl"**

### Description:
In the movie "Valley Girl," Julie Richman navigates her teenage years filled with romantic dilemmas and cultural clashes, all set against the vibrant backdrop of the 1980s. Drawing from this, the project "Memory Lane" leverages the IndexedDB API to create a web application where users can store and revisit their own cherished memories from the 1980s. Whether it's concert tickets, photos, iconic movie quotes, or even personal anecdotes, users can save these memories in a database locally on their browser. The application will feature a stylish, retro interface inspired by the aesthetics of "Valley Girl," complete with neon colors and classic 80s fonts. As users add memories, they can also tag them with categories like 'music', 'movies', 'fashion', or 'quotes', making it easy to search and relive the past.

### Starting Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Lane: 80s Memories</title>
</head>
<body>
    <h1>Memory Lane: Store Your 80s Memories</h1>
    <input type="text" id="memoryInput" placeholder="Enter your memory here">
    <button onclick="addMemory()">Save Memory</button>
    <div id="memoryList"></div>

    <script>
        let db;

        window.onload = function() {
            let request = window.indexedDB.open('MemoriesDB', 1);

            request.onerror = function(event) {
                console.error('Database failed to open');
            };

            request.onsuccess = function(event) {
                console.log('Database opened successfully');
                db = request.result;
                displayMemories();
            };

            request.onupgradeneeded = function(event) {
                let db = event.target.result;
                let objectStore = db.createObjectStore('memories', { keyPath: 'id', autoIncrement:true });
                objectStore.createIndex('memory', 'memory', { unique: false });
                console.log('Database setup complete');
            };
        };

        function addMemory() {
            let newMemory = document.getElementById('memoryInput').value;
            let transaction = db.transaction(['memories'], 'readwrite');
            let store = transaction.objectStore('memories');

            let memory = { memory: newMemory };
            store.add(memory);

            transaction.oncomplete = function() {
                console.log('Memory added');
                document.getElementById('memoryInput').value = '';
                displayMemories();
            };

            transaction.onerror = function() {
                console.error('Error adding memory');
            };
        }

        function displayMemories() {
            while (memoryList.firstChild) {
                memoryList.removeChild(memoryList.firstChild);
            }

            let objectStore = db.transaction('memories').objectStore('memories');
            objectStore.openCursor().onsuccess = function(event) {
                let cursor = event.target.result;
                if(cursor) {
                    const memoryItem = document.createElement('p');
                    memoryItem.textContent = cursor.value.memory;
                    document.getElementById('memoryList').appendChild(memoryItem);
                    cursor.continue();
                } else {
                    if(!memoryList.firstChild) {
                        const listItem = document.createElement('p');
                        listItem.textContent = 'No memories stored yet.';
                        memoryList.appendChild(listItem);
                    }
                    console.log('Memories all displayed');
                }
            };
        }
    </script>
</body>
</html>
```

### References:
- **"Valley Girl" Film Details:** [Valley Girl on Wikipedia](https://en.wikipedia.org/wiki/Valley_Girl_(1983_film))
- **IndexedDB API:** [API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

This project not only offers a nostalgic stroll down memory lane but also introduces users to modern web technologies, allowing them to engage actively with their past in a digital format.