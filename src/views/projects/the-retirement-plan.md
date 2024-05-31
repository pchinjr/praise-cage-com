---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cf/Retirement_Plan_film_poster.png"
---
### **Title: Secure Locations with The Retirement Plan and Geolocation API**

### **Description:**
Inspired by Nicolas Cage's strategic and intense role in *The Retirement Plan*, this project uses the Geolocation API to create a web application that tracks and displays the user's current location, capturing the themes of secrecy, security, and planning. The application reflects the film's strategic atmosphere, enabling users to view their location on a map and save secure locations for future reference. This project demonstrates the practical use of the Geolocation API to enhance user interaction and location-based services without requiring third-party APIs.

### **Features:**
- **Real-Time Location Tracking:** Use the Geolocation API to get and display the user's current location.
- **Interactive Map:** Display the user's location using a simple HTML and CSS map.
- **Secure Locations:** Allow users to save and view secure locations.
- **Thematic Design:** Reflect the strategic and secure atmosphere of *The Retirement Plan* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Locations with The Retirement Plan and Geolocation API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1d1d1d;
            color: #f0f0f0;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #2b2b2b;
            border: 1px solid #444;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
            margin-bottom: 20px;
            color: #ff6347;
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
        #map {
            width: 100%;
            height: 400px;
            margin-top: 20px;
            background-color: #3c3c3c;
            border-radius: 10px;
            border: 1px solid #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Secure Locations</h1>
        <p>Track and save your secure locations inspired by The Retirement Plan.</p>

        <div class="controls">
            <button id="getLocationButton">Get Current Location</button>
            <button id="saveLocationButton">Save Location</button>
        </div>
        <div id="feedback" class="feedback"></div>
        <div id="map"></div>
    </div>

    <script>
        const feedback = document.getElementById('feedback');
        const getLocationButton = document.getElementById('getLocationButton');
        const saveLocationButton = document.getElementById('saveLocationButton');
        const map = document.getElementById('map');

        let currentPos = null;

        getLocationButton.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    currentPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    feedback.textContent = `Latitude: ${currentPos.lat}, Longitude: ${currentPos.lng}`;
                    displayLocation(currentPos);
                }, () => {
                    feedback.textContent = 'Error: The Geolocation service failed.';
                });
            } else {
                feedback.textContent = 'Error: Your browser doesn\'t support geolocation.';
            }
        });

        saveLocationButton.addEventListener('click', () => {
            if (currentPos) {
                localStorage.setItem('secureLocation', JSON.stringify(currentPos));
                feedback.textContent = 'Location saved successfully!';
            } else {
                feedback.textContent = 'No location to save.';
            }
        });

        function displayLocation(pos) {
            map.innerHTML = `<div style="height: 100%; display: flex; align-items: center; justify-content: center; color: #fff;">
                Latitude: ${pos.lat.toFixed(4)}, Longitude: ${pos.lng.toFixed(4)}
            </div>`;
        }

        window.onload = function() {
            const savedLocation = JSON.parse(localStorage.getItem('secureLocation'));
            if (savedLocation) {
                feedback.textContent = `Saved Latitude: ${savedLocation.lat}, Longitude: ${savedLocation.lng}`;
                displayLocation(savedLocation);
            }
        };
    </script>
</body>
</html>
```

### **References:**
- **[The Retirement Plan (2023) - Wikipedia](https://en.wikipedia.org/wiki/The_Retirement_Plan)**
- **[Geolocation API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)**

### **Project Overview:**
This project leverages the Geolocation API to create a dynamic and interactive web application inspired by *The Retirement Plan*. Users can track their current location, display it on a simple HTML and CSS map, and save secure locations for future reference. The application reflects the strategic and intense atmosphere of the film, providing an engaging user experience without requiring third-party APIs. Embrace the strategic planning and intensity of Nicolas Cage’s character to master the use of the Geolocation API in web development. Praise Cage!