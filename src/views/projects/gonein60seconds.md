### Project Title: **"SpeedWatch: Car Heist Surveillance"**

### Description:
Inspired by "Gone in 60 Seconds," where Nicolas Cage's character leads a high-stakes mission to steal 50 cars in one night, "SpeedWatch: Car Heist Surveillance" is a web application that uses the Intersection Observer API to monitor and manage a virtual garage of high-value cars. This tool is designed for car showroom managers or security personnel to keep a vigilant eye on precious vehicles, using web technology to alert when cars enter or leave the display area, similar to tracking stolen vehicles in the film.

### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta viewport="width=device-width, initial-scale=1.0">
    <title>SpeedWatch: Car Heist Surveillance</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Car Surveillance System</h1>
    <div id="garage">
        <div class="car" id="car1">🚗 Car 1</div>
        <div class="car" id="car2">🚗 Car 2</div>
        <div class="car" id="car3">🚗 Car 3</div>
        <!-- Add more cars as needed -->
    </div>
    <div id="log"></div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css):
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

#garage {
    position: relative; /* Ensure the garage container can handle absolute positioning */
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    padding: 10px;
    border: 2px solid #000;
    min-height: 100px; /* Provide enough height to demonstrate the effect */
}

.car {
    padding: 10px;
    border: 1px solid #444;
    background-color: #ddd;
    cursor: pointer;
    transition: bottom 2s; /* Smooth transition for moving the car out */
}

#log {
    margin-top: 20px;
    height: 100px;
    overflow-y: auto;
    background-color: #fff;
    border: 1px solid #ccc;
}
```

### JavaScript (script.js):
```javascript
const cars = document.querySelectorAll('.car');
const log = document.getElementById('log');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            log.textContent += `${entry.target.textContent.trim()} has left the garage!\n`;
        } else {
            log.textContent += `${entry.target.textContent.trim()} is secure in the garage.\n`;
        }
    });
}, {
    root: document.querySelector('#garage'),
    threshold: 0.5
});

cars.forEach(car => observer.observe(car));

// Simulate a car leaving
setTimeout(() => {
    const car1 = document.getElementById('car1');
    car1.style.position = 'absolute';  // Change position style to absolute
    car1.style.bottom = '-100px';      // Move it downwards, simulating it leaving the monitored area
}, 5000);
```
### References:
- **Film**: [Gone in 60 Seconds (2000)](https://en.wikipedia.org/wiki/Gone_in_60_Seconds_(2000_film))
- **API**: [Intersection Observer API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

"SpeedWatch: Car Heist Surveillance" effectively taps into the thrilling elements of car theft and surveillance depicted in "Gone in 60 Seconds," providing a unique tool that can be used in various security-focused applications to monitor vehicle movements without manual oversight, enhancing security operations through modern web technology.