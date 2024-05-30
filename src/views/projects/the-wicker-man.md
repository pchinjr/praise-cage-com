---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fa/Wicker-man-poster.jpg"
---
### Project Title: "The Wicker Worker: A Service Workers API Mystery"

#### Description:
In this unique project, we blend the eerie and mysterious atmosphere of Nicolas Cage's 2006 film *The Wicker Man* with the powerful capabilities of the Service Workers API. Your task is to create a web application that emulates the unsettling experience of the film while leveraging the offline capabilities, caching, and background processes of the Service Workers API.

*The Wicker Man* follows Edward Malus, a police officer who investigates the disappearance of a young girl on a remote island, only to uncover dark secrets and disturbing rituals. Similarly, our project will guide users through an interactive and mysterious narrative that continues to function even when offline, thanks to the Service Workers API.

#### Features:
1. **Offline Mode**: Utilize Service Workers to cache the application's assets and ensure it remains accessible even when the user is offline.
2. **Background Sync**: Implement background synchronization to update the application's content when connectivity is restored.
3. **Push Notifications**: Keep users engaged with push notifications that provide hints or eerie messages as they navigate the mystery.

#### Starting Code:
Here's a basic setup to get you started. This includes the initial HTML, CSS, and JavaScript to register a Service Worker and enable offline functionality.

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Wicker Worker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to The Wicker Worker</h1>
    <p>Can you uncover the mystery of the island?</p>
    <button id="startBtn">Start Your Journey</button>

    <script src="main.js"></script>
</body>
</html>
```

**styles.css**:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #d9534f;
}

button {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

**main.js**:
```javascript
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

document.getElementById('startBtn').addEventListener('click', () => {
    alert('Your journey begins...');
    // Add interactive story logic here
});
```

**service-worker.js**:
```javascript
const CACHE_NAME = 'wicker-worker-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/main.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
```

#### References:
- **The Wicker Man (2006)**:
  - [Wikipedia](https://en.wikipedia.org/wiki/The_Wicker_Man_(2006_film))
- **Service Workers API**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

**Praise Cage!** Dive into this coding adventure and create a web experience that captures the essence of *The Wicker Man* while showcasing the capabilities of the Service Workers API.