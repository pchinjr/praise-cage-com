---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/The_Humanity_Bureau_poster.jpg"
---
### **Title: Stream of Truth with The Humanity Bureau and Insertable Streams for MediaStreamTrack API**

### **Description:**
Inspired by Nicolas Cage's role in *The Humanity Bureau*, this project uses the Insertable Streams for MediaStreamTrack API to create a web application that captures the film's dystopian and truth-seeking themes. The application allows users to apply custom video effects in real-time, reflecting the manipulation and control present in the film's society. This project demonstrates the practical use of the Insertable Streams API to enhance video streams with custom processing.

### **Features:**
- **Real-Time Video Effects:** Use Insertable Streams for MediaStreamTrack API to apply custom video effects in real-time.
- **Interactive Controls:** Provide controls for users to toggle and adjust video effects.
- **Thematic Design:** Reflect the dystopian and truth-seeking atmosphere of *The Humanity Bureau* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stream of Truth with The Humanity Bureau and Insertable Streams API</title>
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
        video {
            width: 100%;
            max-width: 600px;
            border-radius: 10px;
            border: 2px solid #444;
            margin-bottom: 20px;
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
        .controls {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Stream of Truth</h1>
        <p>Apply real-time video effects inspired by The Humanity Bureau.</p>

        <video id="video" autoplay playsinline></video>
        <div class="controls">
            <button id="startButton">Start Video</button>
            <button id="effectButton" disabled>Toggle Effect</button>
        </div>
    </div>

    <script>
        let video = document.getElementById('video');
        let startButton = document.getElementById('startButton');
        let effectButton = document.getElementById('effectButton');
        let stream;
        let processor;
        let insertable = false;

        startButton.addEventListener('click', async () => {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;

            const [track] = stream.getVideoTracks();
            const sender = track.processor;
            if (track.createEncodedStreams) {
                insertable = true;
                effectButton.disabled = false;
            } else {
                alert('Insertable Streams API not supported in this browser.');
            }
        });

        effectButton.addEventListener('click', () => {
            if (!processor) {
                processor = new MediaStreamTrackProcessor({ track: stream.getVideoTracks()[0] });
                const { readable, writable } = processor;

                const transformStream = new TransformStream({
                    transform: async (chunk, controller) => {
                        // Simple grayscale effect
                        const imageBitmap = await createImageBitmap(chunk);
                        const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
                        const context = canvas.getContext('2d');
                        context.drawImage(imageBitmap, 0, 0);

                        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                        const data = imageData.data;

                        for (let i = 0; i < data.length; i += 4) {
                            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                            data[i] = data[i + 1] = data[i + 2] = avg;
                        }

                        context.putImageData(imageData, 0, 0);
                        const newFrame = await canvas.convertToBlob({ type: chunk.type });
                        controller.enqueue(newFrame);
                    }
                });

                const transformedStream = readable.pipeThrough(transformStream).pipeTo(writable);
                stream.getVideoTracks()[0].replaceTrack(processor.track);
                effectButton.textContent = 'Remove Effect';
            } else {
                processor = null;
                stream.getVideoTracks()[0].replaceTrack(video.srcObject.getVideoTracks()[0]);
                effectButton.textContent = 'Apply Effect';
            }
        });
    </script>
</body>
</html>
```

### **References:**
- **[The Humanity Bureau (2017) - Wikipedia](https://en.wikipedia.org/wiki/The_Humanity_Bureau)**
- **[Insertable Streams for MediaStreamTrack API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API)**

### **Project Overview:**
This project captures the dystopian and truth-seeking atmosphere of *The Humanity Bureau* using the Insertable Streams for MediaStreamTrack API to apply real-time video effects. Users can toggle and adjust video effects, reflecting the film's themes of manipulation and control. The application demonstrates the practical use of the Insertable Streams API for enhancing video streams with custom processing, providing an engaging and interactive experience. Embrace the intensity and resilience of Nicolas Cage’s character to master the use of the Insertable Streams API in web development. Praise Cage!