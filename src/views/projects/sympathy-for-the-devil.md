---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/Sympathy_for_the_Devil_poster.png"
---

### **Title: Sharing Secrets with Sympathy for the Devil and Web Share API**

### **Description:**
Inspired by the intense and psychological themes of *Sympathy for the Devil*, this project uses the Web Share API to create a web application that allows users to share important messages and secrets. The application captures the suspenseful and emotional atmosphere of the film, enabling users to share text and links directly from the web app to their social networks or messaging apps. This project showcases the practical use of the Web Share API to enhance user engagement and social interaction.

### **Features:**
- **Easy Sharing:** Use the Web Share API to allow users to share text and links directly from the web application.
- **Interactive Controls:** Provide a simple interface for users to enter messages and share them.
- **Thematic Design:** Reflect the intense and suspenseful atmosphere of *Sympathy for the Devil* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sharing Secrets with Sympathy for the Devil and Web Share API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #2d2d2d;
            color: #f0f0f0;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #3c3c3c;
            border: 1px solid #444;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
            margin-bottom: 20px;
            color: #e74c3c;
        }
        textarea {
            width: 100%;
            height: 100px;
            border: 1px solid #555;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
            background-color: #444;
            color: #f0f0f0;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            border-radius: 5px;
            border: none;
            font-size: 16px;
            background-color: #e74c3c;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #c0392b;
        }
        .feedback {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sharing Secrets</h1>
        <p>Share important messages inspired by Sympathy for the Devil.</p>

        <textarea id="messageInput" placeholder="Type your secret message here..."></textarea>
        <div>
            <button id="shareButton">Share Message</button>
        </div>
        <div id="feedback" class="feedback"></div>
    </div>

    <script>
        const shareButton = document.getElementById('shareButton');
        const messageInput = document.getElementById('messageInput');
        const feedback = document.getElementById('feedback');

        shareButton.addEventListener('click', () => {
            const message = messageInput.value;
            if (navigator.share) {
                navigator.share({
                    title: 'Secret Message',
                    text: message,
                    url: document.location.href
                }).then(() => {
                    feedback.textContent = 'Message shared successfully!';
                    feedback.style.color = 'lightgreen';
                }).catch(error => {
                    feedback.textContent = 'Error sharing message: ' + error;
                    feedback.style.color = 'red';
                });
            } else {
                feedback.textContent = 'Web Share API is not supported in this browser.';
                feedback.style.color = 'yellow';
            }
        });
    </script>
</body>
</html>
```

### **References:**
- **[Sympathy for the Devil (2023) - Wikipedia](https://en.wikipedia.org/wiki/Sympathy_for_the_Devil_(2023_film))**
- **[Web Share API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)**

### **Project Overview:**
This project captures the suspenseful and emotional atmosphere of *Sympathy for the Devil* using the Web Share API to enable users to share important messages directly from the web application. Users can enter and share their messages, providing an engaging and interactive experience. The application showcases the practical use of the Web Share API for enhancing user engagement and social interaction, reflecting the film's themes of intense psychological drama and secrets. Embrace the intensity and emotion of Nicolas Cage’s character to master the use of the Web Share API in web development. Praise Cage!