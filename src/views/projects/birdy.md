### Project Title: **"Birdy's Flight Paths: A Geolocation Journey"**

### Description
"Birdy," a film that delves deep into themes of trauma, freedom, and transformation through the metaphor of flight, presents a unique narrative about a Vietnam War veteran's struggle with reality and his deep bond with birds. In the project "Birdy's Flight Paths," the Geolocation API is utilized to create an interactive web experience that traces both metaphorical and literal journeys of freedom.

This application allows users to explore various bird migration paths overlaid on real-world maps, comparing them with key locations from the film where significant events occur. Users can "fly" alongside different bird species, learning about their migration habits and patterns, while also discovering more about the film's locations and their importance to the narrative. This dual exploration serves as a form of healing and educational journey, much like Birdy's own quest for understanding and liberation.

### Starting Code
Here’s the HTML, JavaScript, and some CSS to start the "Birdy's Flight Paths: A Geolocation Journey" project:

#### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Birdy's Flight Paths</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="map" style="width: 100%; height: 100%"></div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>

```

#### CSS (styles.css)
```css
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}

#map {
    height: 100%;
}

```

#### JavaScript (script.js)
```javascript
document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([40.7128, -74.0060], 13); // New York City coordinates and initial zoom level

    // Adding OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Marker for demonstration purposes
    var marker = L.marker([40.7128, -74.0060]).addTo(map);
    marker.bindPopup('<b>Hello World!</b><br>I am a popup.').openPopup();

    // Example of using Geolocation API to set map to user's location
    map.locate({setView: true, maxZoom: 16});
    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();
        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationerror', onLocationError);
});

```

### References
- For more about **Birdy**, visit [Wikipedia: Birdy (film)](https://en.wikipedia.org/wiki/Birdy_(film)).
- Learn more about the **Geolocation API** and how to implement it from the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

This project marries the narrative of personal and physical journeys in "Birdy" with the capabilities of the Geolocation API, providing a unique and insightful exploration of both the film's themes and the natural world.