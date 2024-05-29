---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Raising-Arizona-Poster.jpg/220px-Raising-Arizona-Poster.jpg
---
### Project Title: **Desert Data Heist: Indexed Arizona**

### Description:
In the 1987 film "Raising Arizona," Nicolas Cage plays H.I. McDunnough, a reformed criminal who finds himself drawn back into a life of unusual schemes when he and his wife decide to kidnap a baby from a wealthy family. Drawing from the themes of theft and redemption, "Desert Data Heist: Indexed Arizona" is a web-based game that challenges players to 'steal' data in increasingly difficult scenarios while avoiding digital security measures.

Using the IndexedDB API, the game stores various pieces of 'stolen' data locally on the player's device, simulating a data heist. Players must organize and protect this data while planning their next heists. As the game progresses, players can use their loot to 'purchase' upgrades, such as better encryption or faster data transfer capabilities, enhancing the game's challenge and replayability.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desert Data Heist</title>
</head>
<body>
    <h1>Desert Data Heist: Indexed Arizona</h1>
    <div id="status">Starting the heist...</div>
    <button id="startHeist">Start Heist</button>
    <script src="game.js"></script>
</body>
</html>
```

#### JavaScript (game.js):
```javascript
// Opening IndexedDB
let db;
const request = indexedDB.open('HeistDatabase', 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore('data', { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('Database ready for the heist!');
};

request.onerror = function(event) {
    console.error('Database error: ' + event.target.errorCode);
};

// Function to simulate a data heist
function startHeist() {
    const transaction = db.transaction(['data'], 'readwrite');
    const store = transaction.objectStore('data');
    const dataItem = { data: 'Confidential', timestamp: new Date().getTime() };
    store.add(dataItem);
    console.log('Data stolen successfully!');
}

document.getElementById('startHeist').addEventListener('click', startHeist);
```

### References:
- **Film**: [Raising Arizona (1987)](https://en.wikipedia.org/wiki/Raising_Arizona)
- **API**: [IndexedDB API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB)

"Desert Data Heist: Indexed Arizona" not only pays homage to the comic elements of "Raising Arizona" but also cleverly incorporates modern web technology to create an engaging and strategic game experience, making it a perfect blend of humor and interactivity.
