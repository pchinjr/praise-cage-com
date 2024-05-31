---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1a/Between_Worlds_poster.jpg"
---
### **Title: Beyond Realities with Between Worlds and Performance API**

### **Description:**
Inspired by Nicolas Cage's role in *Between Worlds*, this project uses the Performance API to create a web application that monitors and displays various performance metrics. The application captures the themes of mysticism and the intertwining of different realms from the film, enabling users to gain insights into the performance of their web pages. This project demonstrates the practical use of the Performance API to measure and improve web performance, reflecting the film's exploration of unseen forces and realities.

### **Features:**
- **Performance Monitoring:** Use the Performance API to track key performance metrics such as page load time, resource load times, and memory usage.
- **Dynamic Display:** Provide a real-time dashboard to display performance metrics.
- **Thematic Design:** Reflect the mystical and intertwined realities of *Between Worlds* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beyond Realities with Between Worlds and Performance API</title>
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
        .metric {
            margin: 20px 0;
            padding: 10px;
            border: 1px solid #555;
            border-radius: 5px;
            background-color: #3e3e3e;
        }
        .metric h2 {
            margin: 0;
            font-size: 1.2em;
        }
        .metric p {
            margin: 5px 0 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Beyond Realities</h1>
        <p>Monitor web performance inspired by Between Worlds.</p>

        <div class="metric">
            <h2>Page Load Time</h2>
            <p id="loadTime">Calculating...</p>
        </div>
        <div class="metric">
            <h2>Resource Load Times</h2>
            <ul id="resourceLoadTimes">Calculating...</ul>
        </div>
        <div class="metric">
            <h2>Memory Usage</h2>
            <p id="memoryUsage">Calculating...</p>
        </div>
    </div>

    <script>
        // Function to calculate and display page load time
        function displayLoadTime() {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            document.getElementById('loadTime').textContent = `${loadTime} ms`;
        }

        // Function to calculate and display resource load times
        function displayResourceLoadTimes() {
            const resources = window.performance.getEntriesByType('resource');
            const resourceLoadTimesList = document.getElementById('resourceLoadTimes');
            resourceLoadTimesList.innerHTML = '';
            resources.forEach(resource => {
                const listItem = document.createElement('li');
                listItem.textContent = `${resource.name}: ${resource.duration.toFixed(2)} ms`;
                resourceLoadTimesList.appendChild(listItem);
            });
        }

        // Function to calculate and display memory usage
        function displayMemoryUsage() {
            if (window.performance.memory) {
                const memoryUsage = window.performance.memory.usedJSHeapSize / 1048576; // Convert to MB
                document.getElementById('memoryUsage').textContent = `${memoryUsage.toFixed(2)} MB`;
            } else {
                document.getElementById('memoryUsage').textContent = 'Memory API not supported.';
            }
        }

        // Run the functions after the window has loaded
        window.addEventListener('load', () => {
            displayLoadTime();
            displayResourceLoadTimes();
            displayMemoryUsage();
        });
    </script>
</body>
</html>
```

### **References:**
- **[Between Worlds (2018) - Wikipedia](https://en.wikipedia.org/wiki/Between_Worlds)**
- **[Performance API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)**

### **Project Overview:**
This project captures the mystical and intertwined realities of *Between Worlds* using the Performance API to monitor and display web performance metrics. Users can gain insights into page load times, resource load times, and memory usage, reflecting the film's themes of hidden forces and unseen realities. The application demonstrates the practical use of the Performance API for measuring and improving web performance, providing an engaging and informative experience. Embrace the mystery and intensity of Nicolas Cage’s character to master the use of the Performance API in web development. Praise Cage!