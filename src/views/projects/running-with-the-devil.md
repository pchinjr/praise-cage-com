---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/25/Running_with_the_Devil_poster.jpg"
---
### **Title: Criminal Alerts with Running with the Devil and Web Notifications API**

### **Description:**
Inspired by Nicolas Cage's intense and gritty role in *Running with the Devil*, this project uses the Web Notifications API to create a web application that sends timely alerts and notifications related to criminal activities and operations. The application captures the themes of crime, danger, and constant vigilance, enabling users to receive real-time updates and alerts. This project demonstrates the practical use of the Web Notifications API to enhance user engagement and information dissemination.

### **Features:**
- **Real-Time Notifications:** Use the Web Notifications API to send alerts and notifications.
- **Interactive Alerts:** Provide controls for users to trigger notifications.
- **Thematic Design:** Reflect the intense and gritty atmosphere of *Running with the Devil* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criminal Alerts with Running with the Devil and Web Notifications API</title>
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
    </style>
</head>
<body>
    <div class="container">
        <h1>Criminal Alerts</h1>
        <p>Get real-time updates inspired by Running with the Devil.</p>

        <div class="controls">
            <button id="notifyButton">Send Notification</button>
        </div>
    </div>

    <script>
        document.getElementById('notifyButton').addEventListener('click', () => {
            if (Notification.permission === 'granted') {
                sendNotification();
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        sendNotification();
                    }
                });
            }
        });

        function sendNotification() {
            const options = {
                body: 'A new criminal activity has been reported. Stay alert!',
                icon: 'https://via.placeholder.com/128', // Example icon URL
                vibrate: [200, 100, 200],
                tag: 'criminal-alert',
                actions: [
                    { action: 'view', title: 'View Details' }
                ]
            };

            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('Criminal Alert', options);
            });
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js').then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(error => {
                console.error('Service Worker registration failed:', error);
            });
        }
    </script>
</body>
</html>
```

### **Service Worker (service-worker.js):**

```javascript
self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (event.action === 'view') {
        clients.openWindow('https://www.imdb.com/title/tt5792656/'); // IMDb link to Running with the Devil
    } else {
        clients.openWindow('/');
    }
});
```

### **References:**
- **[Running with the Devil (2019) - IMDb](https://www.imdb.com/title/tt5792656/)**
- **[Web Notifications API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)**
- **[Service Workers - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)**

### **Project Overview:**
This project captures the intense and gritty atmosphere of *Running with the Devil* using the Web Notifications API to send real-time alerts and notifications. Users can receive timely updates related to criminal activities, enhancing engagement and information dissemination. The application demonstrates the practical use of the Web Notifications API and Service Workers for enhancing user interaction and engagement, reflecting the film's themes of crime and constant vigilance. Embrace the intensity and vigilance of Nicolas Cage’s character to master the use of the Web Notifications API in web development. Praise Cage!