---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Conairinternational.jpg/220px-Conairinternational.jpg
---
### Project Title: **"Flight Load: Adaptive Content Delivery"**

### Description:
Inspired by "Con Air," where Nicolas Cage plays Cameron Poe, a paroled inmate aboard a transport plane that gets hijacked, "Flight Load: Adaptive Content Delivery" is a web application designed to optimize media delivery based on device capabilities. This concept mirrors the resource constraints and adaptive strategies in the film's plot, where characters must navigate a tense and dynamic environment.

Using the Device Memory API, this application dynamically adjusts the quality of video and images served to users based on their device's memory capacity. This ensures that users on devices with lower memory get a streamlined experience without sacrificing load times or performance, while those with higher-spec devices enjoy higher quality media.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flight Load: Adaptive Content Delivery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Adaptive Content Delivery Based on Your Device</h1>
    <video id="videoPlayer" controls></video>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS (styles.css):
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

video {
    max-width: 90%;
    height: auto;
    margin-top: 20px;
}
```

#### JavaScript (script.js):
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const memory = navigator.deviceMemory || 1; // Fallback to 1GB if undefined

    let videoSource = 'default-video.mp4'; // Default video for low-spec devices
    if (memory >= 4) {
        videoSource = 'high-quality-video.mp4'; // High-quality video for high-spec devices
    } else if (memory >= 2) {
        videoSource = 'medium-quality-video.mp4'; // Medium-quality video for medium-spec devices
    }

    const source = document.createElement('source');
    source.src = videoSource;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();
});
```

### References:
- **Film**: [Con Air (1997)](https://en.wikipedia.org/wiki/Con_Air)
- **API**: [Device Memory API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API)

"Flight Load: Adaptive Content Delivery" not only captures the theme of adapting to challenging situations from "Con Air" but also uses modern web technology to improve user experience based on device capabilities. This project ensures that all users, regardless of their device's hardware, can access content in a manner best suited to their situation, enhancing accessibility and efficiency.
