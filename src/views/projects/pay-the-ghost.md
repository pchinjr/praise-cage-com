---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/Pay_The_Ghost_Poster.jpg"
---
### **Title: Speak to the Spirits with Pay the Ghost and Web Speech API**

### **Description:**
Inspired by Nicolas Cage's supernatural thriller *Pay the Ghost*, this project utilizes the Web Speech API to create a web application that allows users to interact with the spectral world through voice commands and speech synthesis. The application captures the eerie and mysterious atmosphere of the film, enabling users to communicate with "spirits" by speaking and listening to messages. This project showcases the capabilities of the Web Speech API in creating an immersive and interactive experience.

### **Features:**
- **Voice Commands:** Use the Web Speech API to recognize and respond to user voice commands.
- **Speech Synthesis:** Enable the application to speak back to the user, providing a conversational experience.
- **Interactive Mysticism:** Create an engaging interface with a spooky, supernatural theme inspired by *Pay the Ghost*.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Speak to the Spirits with Pay the Ghost</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #2c3e50;
            color: #ecf0f1;
            text-align: center;
            padding: 50px;
        }
        #output {
            margin: 20px;
            padding: 20px;
            border: 2px solid #34495e;
            border-radius: 10px;
            background-color: #34495e;
        }
        button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
            margin-top: 20px;
        }
        button:hover {
            background-color: #c0392b;
        }
    </style>
</head>
<body>
    <h1>Speak to the Spirits with Pay the Ghost</h1>
    <p>Interact with the supernatural world using voice commands and speech synthesis.</p>

    <div id="output">Press "Start Listening" to communicate with the spirits...</div>
    <button onclick="startListening()">Start Listening</button>

    <script>
        const output = document.getElementById('output');

        function startListening() {
            if (!('webkitSpeechRecognition' in window)) {
                alert('Web Speech API is not supported in this browser.');
                return;
            }

            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.onstart = function() {
                output.textContent = 'Listening...';
            };

            recognition.onresult = function(event) {
                const transcript = event.results[0][0].transcript;
                output.textContent = `You said: ${transcript}`;
                respondToCommand(transcript);
            };

            recognition.onerror = function(event) {
                output.textContent = `Error occurred: ${event.error}`;
            };

            recognition.onend = function() {
                output.textContent += '\nListening stopped.';
            };

            recognition.start();
        }

        function respondToCommand(command) {
            const synth = window.speechSynthesis;
            let responseText = 'I did not understand that.';

            if (command.toLowerCase().includes('hello')) {
                responseText = 'Hello there! How can I help you?';
            } else if (command.toLowerCase().includes('ghost')) {
                responseText = 'Do you feel the presence of a spirit?';
            } else if (command.toLowerCase().includes('help')) {
                responseText = 'I am here to assist you. What do you need?';
            }

            const utterThis = new SpeechSynthesisUtterance(responseText);
            utterThis.onend = function() {
                output.textContent += `\nSpirit says: ${responseText}`;
            };

            synth.speak(utterThis);
        }
    </script>
</body>
</html>
```

### **References:**
- **[Pay the Ghost (2015) - Wikipedia](https://en.wikipedia.org/wiki/Pay_the_Ghost)**
- **[Web Speech API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)**

### **Project Overview:**
This project merges the eerie and supernatural elements of *Pay the Ghost* with the functional capabilities of the Web Speech API. Users can interact with the application using voice commands and receive spoken responses, creating an immersive experience. The design and functionality reflect the spooky and mysterious atmosphere of the film, making the learning process engaging and memorable. Embrace the spectral world and master the Web Speech API. Praise Cage!