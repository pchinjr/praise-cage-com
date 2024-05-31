---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f7/Racing_with_the_moon.jpg"
---

### Project Title: **"Whispers of the Past: Narrated Scenes from Racing with the Moon"**

### Description
"Racing with the Moon" captures the essence of life on the home front during World War II, focusing on the personal stories of young love and the imminent separation caused by war. Leveraging the Web Speech API, the project "Whispers of the Past" reimagines this historical narrative by providing an interactive audio storytelling experience. Users can select scenes or dialogues from the film, which are then narrated using the text-to-speech capabilities of the Web Speech API. This application allows users to explore the emotional depth of the film through a different sensory medium, enhancing engagement through auditory storytelling.

The application will include options to adjust the voice type and speed of narration, allowing users to customize the storytelling experience to their preference. This project not only serves as an educational tool about historical narratives and film study but also provides accessibility for those who prefer auditory learning or are visually impaired.

### Starting Code
Here’s the HTML, JavaScript, and some CSS to kickstart the "Whispers of the Past" project:

#### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whispers of the Past</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="controls">
        <button onclick="speakText('I remember when we raced against the moon, not knowing what the future held.')">Play Scene</button>
        <button onclick="stopSpeaking()">Stop</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### CSS (styles.css)
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

#### JavaScript (script.js)
```javascript
function speakText(text) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.voice = speechSynthesis.getVoices().filter(voice => voice.lang === 'en-US')[0]; // Choose an English voice
        speech.pitch = 1; // Normal pitch
        speech.rate = 1; // Normal speed
        window.speechSynthesis.speak(speech);
    } else {
        alert('Web Speech API is not supported by your browser.');
    }
}

function stopSpeaking() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}
```

### References
- For more about **Racing with the Moon**, visit [Wikipedia: Racing with the Moon](https://en.wikipedia.org/wiki/Racing_with_the_Moon).
- Learn more about the **Web Speech API** and how to implement it from the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

This project enhances the storytelling experience of "Racing with the Moon" by transforming key film dialogues and scenes into an interactive, audible format, accessible to a wider audience.