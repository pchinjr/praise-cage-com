---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/36/Jiu_Jitsu_film_poster.png"
---
### **Title: Rhythmic Combat with Jiu Jitsu and Web MIDI API**

### **Description:**
Inspired by Nicolas Cage's action-packed role in *Jiu Jitsu*, this project uses the Web MIDI API to create a web application that allows users to create and control rhythmic combat sequences through MIDI devices. The application captures the themes of martial arts, rhythm, and dynamic action, enabling users to interact with MIDI instruments to trigger and control combat animations. This project demonstrates the practical use of the Web MIDI API to enhance interactivity and user engagement.

### **Features:**
- **MIDI Interaction:** Use the Web MIDI API to connect and interact with MIDI devices.
- **Combat Animation Control:** Trigger and control combat animations using MIDI inputs.
- **Thematic Design:** Reflect the intense and rhythmic atmosphere of *Jiu Jitsu* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rhythmic Combat with Jiu Jitsu and Web MIDI API</title>
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
        .status {
            margin: 20px 0;
            font-size: 18px;
        }
        .animation {
            width: 200px;
            height: 200px;
            background-color: #444;
            margin: 20px auto;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Rhythmic Combat</h1>
        <p>Control combat animations with your MIDI device inspired by Jiu Jitsu.</p>

        <div class="status" id="status">Connect a MIDI device to begin...</div>
        <div class="animation" id="animationBox">Ready</div>
    </div>

    <script>
        const status = document.getElementById('status');
        const animationBox = document.getElementById('animationBox');

        function handleMIDIMessage(message) {
            const [command, note, velocity] = message.data;

            if (command === 144 && velocity > 0) {
                switch (note) {
                    case 60:
                        triggerAnimation('Punch');
                        break;
                    case 62:
                        triggerAnimation('Kick');
                        break;
                    case 64:
                        triggerAnimation('Block');
                        break;
                    default:
                        console.log('Unknown note:', note);
                }
            }
        }

        function triggerAnimation(action) {
            animationBox.textContent = action;
            animationBox.style.backgroundColor = getRandomColor();

            setTimeout(() => {
                animationBox.textContent = 'Ready';
                animationBox.style.backgroundColor = '#444';
            }, 500);
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then(midiAccess => {
                status.textContent = 'MIDI device connected. Ready to receive inputs.';
                midiAccess.inputs.forEach(input => {
                    input.addEventListener('midimessage', handleMIDIMessage);
                });
            }).catch(err => {
                status.textContent = 'Failed to access MIDI devices: ' + err;
            });
        } else {
            status.textContent = 'Web MIDI API is not supported in this browser.';
        }
    </script>
</body>
</html>
```

### **References:**
- **[Jiu Jitsu (2020) - Wikipedia](https://en.wikipedia.org/wiki/Jiu_Jitsu_(film))**
- **[Web MIDI API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess)**

### **Project Overview:**
This project captures the intense and rhythmic atmosphere of *Jiu Jitsu* using the Web MIDI API to control combat animations. Users can connect MIDI devices and trigger combat actions such as punches, kicks, and blocks, providing an engaging and interactive experience. The application demonstrates the practical use of the Web MIDI API for enhancing interactivity and user engagement, reflecting the film's themes of martial arts and dynamic action. Embrace the intensity and rhythm of Nicolas Cage’s character to master the use of the Web MIDI API in web development. Praise Cage!