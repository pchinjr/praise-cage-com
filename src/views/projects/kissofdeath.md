### Project Title: **"Criminal Clues: Interactive Crime Scene"**

### Description:
Drawing inspiration from "Kiss of Death," where Nicolas Cage plays Little Junior Brown, a character deeply entangled in the criminal underworld, "Criminal Clues: Interactive Crime Scene" is an educational and interactive web application designed to teach users about forensic science through the exploration of crime scenes. Utilizing the UI Events API, this application enables users to interact with various elements within a digital crime scene to uncover clues and learn how forensic evidence is gathered and used in investigations.

The application serves as a tool for students, enthusiasts, and aspiring professionals to engage with realistic investigative scenarios, enhancing their understanding of forensic science in a gamified format.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criminal Clues: Interactive Crime Scene</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Interactive Crime Scene Investigation</h1>
    <div id="crimeScene">
        <img src="crime-scene.jpg" alt="Crime Scene" usemap="#crime-scene-map">
        <map name="crime-scene-map">
            <area shape="rect" coords="34,44,270,350" alt="Blood Sample" href="#" onclick="displayDetail('Blood Sample');">
            <area shape="circle" coords="130,300,40" alt="Footprint" href="#" onclick="displayDetail('Footprint');">
        </map>
    </div>
    <div id="details"></div>
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

#crimeScene {
    position: relative;
    width: 300px;
    margin: auto;
}

#details {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
}
```

#### JavaScript (script.js):
```javascript
function displayDetail(item) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.textContent = `Detail about ${item}: This is where information about the ${item.toLowerCase()} will be displayed. For example, analysis results, possible suspects, or related forensic data.`;
}

document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function(event) {
        event.preventDefault();
        displayDetail(this.alt);
    });
});
```

### References:
- **Film**: [Kiss of Death (1995)](https://en.wikipedia.org/wiki/Kiss_of_Death_(1995_film))
- **API**: [UI Events Documentation](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)

"Criminal Clues: Interactive Crime Scene" not only captures the suspenseful elements of "Kiss of Death" but also educates users about crime scene investigation, making forensic science accessible and engaging through interactive learning.