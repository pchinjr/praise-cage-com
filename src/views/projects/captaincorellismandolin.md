### Project Title: **"Melodies of War: Interactive Mandolin Composer"**

### Description:
Inspired by "Captain Corelli's Mandolin," where Nicolas Cage plays an Italian officer with a passion for music during WWII, "Melodies of War: Interactive Mandolin Composer" is a web application that uses the Web MIDI API to allow users to compose and play mandolin music interactively. This application combines the historical backdrop and emotional depth of the film with the functionality of MIDI devices, providing users with a platform to explore musical creativity and expression.

The app serves as both an educational tool about music during wartime and a functional composition tool, using MIDI inputs to generate mandolin sounds that echo the poignant musical themes from the film.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Melodies of War: Interactive Mandolin Composer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Compose Your Mandolin Melody</h1>
    <div id="midiControls">
        <button onclick="startMidi()">Connect MIDI Device</button>
    </div>
    <div id="musicNotes">Play notes here...</div>
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

#midiControls {
    margin-top: 20px;
}

#musicNotes {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    min-height: 100px;
}
```

#### JavaScript (script.js):
```javascript
function startMidi() {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    } else {
        alert("Web MIDI API not supported in your browser.");
    }
}

function onMIDISuccess(midiAccess) {
    console.log('MIDI Access Object', midiAccess);
    midiAccess.inputs.forEach(function(input) {
        input.onmidimessage = getMIDIMessage;
    });
}

function onMIDIFailure() {
    alert("Failed to get MIDI access - please ensure your device is connected properly.");
}

function getMIDIMessage(midiMessage) {
    let command = midiMessage.data[0];
    let note = midiMessage.data[1];
    let velocity = (midiMessage.data.length > 2) ? midiMessage.data[2] : 0;

    if (command === 144) { // Note on
        if (velocity > 0) {
            noteOn(note, velocity);
        } else {
            noteOff(note);
        }
    } else if (command === 128) { // Note off
        noteOff(note);
    }
}

function noteOn(note, velocity) {
    document.getElementById('musicNotes').textContent += `Note ${note} played at velocity ${velocity}\n`;
}

function noteOff(note) {
    document.getElementById('musicNotes').textContent += `Note ${note} released\n`;
}
```

### References:
- **Film**: [Captain Corelli's Mandolin (2001)](https://en.wikipedia.org/wiki/Captain_Corelli%27s_Mandolin_(film))
- **API**: [Web MIDI API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)

"Melodies of War: Interactive Mandolin Composer" not only brings historical and musical elements from "Captain Corelli's Mandolin" to life but also leverages modern web technologies to create an engaging musical interface. This project enables users to connect their MIDI devices and experience the depth of musical expression within a historical context.