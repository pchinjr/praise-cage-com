---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0b/Cotton_club.jpg"
---

### Project Title: **"Jazz Push: Live Updates from The Cotton Club"**

### Description
"The Cotton Club" (1984), set in the roaring 1920s, is a film filled with the glamour and danger of a famous Harlem jazz club, capturing the intertwined lives of musicians and mobsters. The project, "Jazz Push: Live Updates from The Cotton Club," uses the Push API to create an immersive experience that brings the lively atmosphere of the jazz era to users in real time. This web application allows users to subscribe to updates about live jazz events, similar to how audiences would have felt the anticipation and excitement of performances at The Cotton Club.

Users can receive notifications for live jazz performances, new album releases, or jazz history facts, mirroring the excitement surrounding new acts and music releases of the 1920s. The application serves not only as a tool for jazz enthusiasts to stay informed but also as an educational resource, providing historical insights into the jazz era and its impact on modern music.

### Starting Code

### Beginner Hints:
- Create a single `index.html` file.
- Copy the full HTML code block into that file.
- Open `index.html` in your browser. If something doesn't work, try a local server like `python -m http.server`.
- Open DevTools Console to spot errors and typos quickly.


Here’s the HTML, JavaScript, and some CSS to get started with the "Jazz Push: Live Updates from The Cotton Club" project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jazz Push</title>
<style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #fff;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
</head>
<body>
    <div id="subscription">
        <button id="subscribe">Subscribe to Live Jazz Updates</button>
        <button id="unsubscribe" style="display:none;">Unsubscribe</button>
    </div>
<script>
    document.getElementById('subscribe').addEventListener('click', function() {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                const pushManager = new PushManager();
                pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY'
                }).then(subscription => {
                    console.log('Subscribed!', subscription);
                    document.getElementById('subscribe').style.display = 'none';
                    document.getElementById('unsubscribe').style.display = 'block';
                }).catch(error => {
                    console.error('Subscription failed', error);
                });
            }
        });
    });

    document.getElementById('unsubscribe').addEventListener('click', function() {
        const pushManager = new PushManager();
        pushManager.getSubscription().then(subscription => {
            if (subscription) {
                subscription.unsubscribe().then(successful => {
                    console.log('Unsubscribed!', successful);
                    document.getElementById('subscribe').style.display = 'block';
                    document.getElementById('unsubscribe').style.display = 'none';
                }).catch(error => {
                    console.error('Unsubscribe failed', error);
                });
            }
        });
    });
</script>
</body>
</html>
```



### References
- For more about **The Cotton Club**, visit [Wikipedia: The Cotton Club](https://en.wikipedia.org/wiki/The_Cotton_Club_(film)).
- Learn more about the **Push API** and how to implement it from the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Push_API).

This project blends the historical intrigue of "The Cotton Club" with modern web technologies to create a unique, interactive platform for jazz fans and history buffs alike.