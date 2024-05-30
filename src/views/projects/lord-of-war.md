---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/92/Lordofwar.jpg"
---
### Project Title: "Lord of War: Global Network Insights with Network Information API"

#### Description
"Lord of War" (2005) stars Nicolas Cage as Yuri Orlov, an arms dealer who navigates the complex and dangerous world of international arms trafficking. This project, "Global Network Insights," uses the **Network Information API** to create an interactive application that provides insights into network conditions and connectivity, reflecting Yuri's need to stay connected and informed in a high-stakes environment.

"Global Network Insights" allows users to monitor their network status, including the type of connection and effective bandwidth, giving them a comprehensive understanding of their connectivity, much like Yuri's need for constant information in his line of work.

#### Starting Code

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Network Insights</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Global Network Insights</h1>
        <p>Monitor your network conditions just like Yuri Orlov stays informed about his business.</p>
        <div id="networkInfo">
            <p>Connection Type: <span id="connectionType">N/A</span></p>
            <p>Effective Bandwidth: <span id="effectiveBandwidth">N/A</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**CSS (styles.css):**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
}

#networkInfo {
    margin-top: 20px;
    font-size: 1.2em;
}
```

**JavaScript (script.js):**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const connectionType = document.getElementById('connectionType');
    const effectiveBandwidth = document.getElementById('effectiveBandwidth');

    function updateNetworkInfo() {
        connectionType.innerText = connection.type || 'unknown';
        effectiveBandwidth.innerText = connection.downlink + ' Mbps' || 'unknown';
    }

    if (connection) {
        updateNetworkInfo();
        connection.addEventListener('change', updateNetworkInfo);
    } else {
        connectionType.innerText = 'Not supported';
        effectiveBandwidth.innerText = 'Not supported';
    }
});
```

### References
- **Film: "Lord of War" (2005)**
  - [Wikipedia Link](https://en.wikipedia.org/wiki/Lord_of_War)
- **API: Network Information API**
  - [API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)