---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Theboyinblue.jpg/220px-Theboyinblue.jpg
---
### Project Title: **Rowing Towards Glory: Wakeful Waters**

### Description:
In the 1986 film "The Boy in Blue," Nicolas Cage portrays Ned Hanlan, a legendary rower who overcomes numerous challenges to achieve greatness in the sport. This coding project, "Rowing Towards Glory: Wakeful Waters," mirrors the perseverance and relentless drive of Hanlan by integrating the Screen Wake Lock API to create a motivational web application designed for athletes, particularly rowers, who practice long hours.

The application will feature a dashboard that provides motivational quotes, training tips, and historical facts about rowing to inspire users during their training sessions. To align with the film's theme of dedication, the Screen Wake Lock API will ensure that the device's screen remains active as long as the training session is ongoing, preventing it from going into sleep mode during crucial training or motivational moments.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wakeful Waters</title>
</head>
<body>
    <h1>Welcome to Wakeful Waters</h1>
    <p id="motivation">Stay motivated and row towards your glory!</p>
    <button onclick="lockScreen()">Keep Screen Awake</button>
    <script src="app.js"></script>
</body>
</html>
```

#### JavaScript (app.js):
```javascript
// Function to request a screen wake lock
async function lockScreen() {
    try {
        const wakeLock = await navigator.wakeLock.request('screen');
        console.log('Screen wake lock is active.');

        // Automatically release the wake lock if visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                wakeLock.release();
                console.log('Screen wake lock released.');
            }
        });
    } catch (err) {
        console.error(`Failed to activate screen wake lock: ${err}`);
    }
}
```

### References:
- **Film**: [The Boy in Blue (1986)](https://en.wikipedia.org/wiki/The_Boy_in_Blue_(1986_film))
- **API**: [Screen Wake Lock API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)

This project not only reflects the enduring spirit seen in "The Boy in Blue" but also leverages modern web technology to enhance athletic training, making it a unique blend of historical inspiration and contemporary application.
