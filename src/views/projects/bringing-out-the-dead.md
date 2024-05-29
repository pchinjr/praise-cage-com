---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Bringing_out_the_dead.jpg/220px-Bringing_out_the_dead.jpg
---
Absolutely, let's refine the project to focus on the functionalities we can achieve with just the standard Geolocation API and avoid needing any third-party API keys. We'll develop a comprehensive and self-contained solution suitable for training or demonstration purposes.

### Project Title: **"Night Shift Navigator: Emergency Route Tracker"**

### Description:
Drawing inspiration from "Bringing Out the Dead," where the protagonist navigates the challenging night shifts of an emergency medical service worker in a chaotic urban setting, "Night Shift Navigator: Emergency Route Tracker" is a web application designed to help paramedics and emergency responders track their routes and times. This application utilizes the Geolocation API to record the journey of emergency service vehicles during their shifts, providing insights into travel times, distances, and route efficiency.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta viewport="width=device-width, initial-scale=1.0">
    <title>Night Shift Navigator: Emergency Route Tracker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Track Your Emergency Route</h1>
    <button id="startTracking">Start Tracking</button>
    <button id="stopTracking" disabled>Stop Tracking</button>
    <div id="status">Waiting to start...</div>
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
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
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
let trackingId = null;

document.getElementById('startTracking').addEventListener('click', () => {
    if (navigator.geolocation) {
        trackingId = navigator.geolocation.watchPosition(showPosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
        document.getElementById('startTracking').disabled = true;
        document.getElementById('stopTracking').disabled = false;
        document.getElementById('status').textContent = "Tracking started...";
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

document.getElementById('stopTracking').addEventListener('click', () => {
    if (trackingId) {
        navigator.geolocation.clearWatch(trackingId);
        document.getElementById('startTracking').disabled = false;
        document.getElementById('stopTracking').disabled = true;
        document.getElementById('status').textContent = "Tracking stopped.";
    }
});

function showPosition(position) {
    const status = document.getElementById('status');
    status.innerHTML = `Current Position: Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}<br>
                        Timestamp: ${new Date(position.timestamp).toLocaleTimeString()}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
```

### References:
- **Film**: [Bringing Out the Dead (1999)](https://en.wikipedia.org/wiki/Bringing_Out_the_Dead)
- **API**: [Geolocation API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

"Night Shift Navigator: Emergency Route Tracker" effectively utilizes the Geolocation API to provide a practical tool for emergency responders to monitor and optimize their routes during critical night shifts, reflecting the intensity and challenges depicted in "Bringing Out the Dead." This project enhances operational efficiency and can serve as a training tool to improve emergency response strategies.
