---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Deadfall-movie.jpg/220px-Deadfall-movie.jpg
---
### Project Title: **"Synth Heist: Musical Codes"**

### Description:
In "Deadfall," Nicolas Cage portrays Eddie, a character entangled in high-stakes con jobs and intense emotional drama. Drawing inspiration from Eddie's complex and over-the-top persona, "Synth Heist: Musical Codes" is an interactive web application that combines elements of music, cryptography, and role-playing. The application uses the Web MIDI API to allow users to input musical codes (melodies) on a virtual synthesizer, which then decrypt or encrypt secret messages based on the musical notes played.

This app would be ideal for team-building activities, educational purposes in music and cryptography, and for users interested in interactive storytelling where each note plays a part in unraveling a larger narrative mystery.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Synth Heist: Musical Codes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Synth Heist</h1>
    <div id="synthInterface"></div>
    <div id="messageOutput">Your decoded message will appear here.</div>
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

#synthInterface {
    margin-top: 20px;
    padding: 10px;
    width: 300px;
    height: 200px;
    border: 2px solid #000;
    background-color: #fff;
}

#messageOutput {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    min-height: 50px;
}
```

#### JavaScript (script.js):
```javascript
navigator.requestMIDIAccess().then(function(midiAccess) {
    const outputs = midiAccess.outputs;
    const input = midiAccess.inputs.values().next().value;

    input.onmidimessage = function(message) {
        decodeMessage(message.data);
    };
});

function decodeMessage(midiData) {
    const note = midiData[1]; // MIDI note number
    const velocity = midiData[2]; // Velocity of note press
    if (velocity > 0) {
        const decodedChar = String.fromCharCode((note - 60) + 65); // A simple decryption example
        document.getElementById('messageOutput').textContent += decodedChar;
    }
}
```

### References:
- **Film**: [Deadfall (1993)](https://en.wikipedia.org/wiki/Deadfall_(1993_film))
- **API**: [Web MIDI API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)

"Synth Heist: Musical Codes" captures the inventive spirit of "Deadfall" by combining the dramatic and secretive elements of the film with a unique musical interaction. It invites users to explore the blend of music and cryptography, creating an engaging experience that both entertains and educates.
