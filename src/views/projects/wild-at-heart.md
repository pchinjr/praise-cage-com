---
imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/60/Wild_at_Heart_film_poster.jpg'
---
### Project Title: **"Reckless Roads: Navigate with Heart"**

### Description:
"Wild at Heart," featuring Nicolas Cage as Sailor, is a film about passionate love and wild journeys against a backdrop of danger and intrigue. Drawing from this narrative, "Reckless Roads: Navigate with Heart" is a web application that enhances the navigation experience based on the device’s capabilities, particularly focusing on travel through rugged or less-traveled paths.

Using the Device Memory API, this application adjusts its features and content based on the memory capacity of the user's device, ensuring optimal performance even in remote or challenging environments. For devices with higher memory, the app can load detailed maps with rich media content and real-time updates; for devices with lower memory, it provides a simplified interface with essential navigation tools to ensure reliability and efficiency.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reckless Roads: Navigate with Heart</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Plan Your Wild Journey</h1>
        <div id="map"></div>
    </div>
    <script src="navigation.js"></script>
</body>
</html>
```

#### CSS (styles.css):
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0ebe3;
    color: #333;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#app {
    width: 80%;
    border: 1px solid #ccc;
    padding: 10px;
    overflow: auto;
}

#map {
    width: 100%;
    height: 400px;  /* Placeholder height for a map element */
    background-color: #ddd;
}
```

#### JavaScript (navigation.js):
```javascript
// Check device memory and adjust map settings accordingly
const deviceMemory = navigator.deviceMemory || 1;  // Fallback to 1GB if undefined
console.log(`Device memory: ${deviceMemory} GB`);

// Function to initialize map based on device memory
function initializeMap() {
    const mapElement = document.getElementById('map');
    if (deviceMemory > 4) {
        mapElement.innerHTML = 'Loading high-resolution map...';
        // Logic to load a high-res map would go here
    } else {
        mapElement.innerHTML = 'Loading basic map for better performance...';
        // Logic to load a basic map would go here
    }
}

document.addEventListener('DOMContentLoaded', initializeMap);
```

### References:
- **Film**: [Wild at Heart (1990)](https://en.wikipedia.org/wiki/Wild_at_Heart_(film))
- **API**: [Device Memory API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API)

"Reckless Roads: Navigate with Heart" not only captures the adventurous spirit of "Wild at Heart" but also leverages cutting-edge web technology to deliver a navigation experience that is both robust and responsive to the needs of adventurous souls.
