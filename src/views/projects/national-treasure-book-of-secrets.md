---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Book_of_secrets_post.jpg"
---
### Project Title: "Treasure Hunt: Unlock Secrets with WebOTP API"

#### Description:
In this project, we combine the adventurous spirit of *National Treasure: Book of Secrets* with the functionality of the WebOTP API. *National Treasure: Book of Secrets* follows Benjamin Franklin Gates as he embarks on a quest to clear his ancestor's name and uncover hidden secrets. Similarly, this project will guide users on a digital treasure hunt, using the WebOTP API to unlock clues and secrets via one-time passwords (OTPs) sent to their phones.

#### Features:
1. **OTP Authentication**: Use the WebOTP API to securely receive and verify one-time passwords, allowing users to unlock clues and secrets.
2. **Digital Treasure Hunt**: Create an engaging interactive treasure hunt where each stage requires users to enter an OTP to proceed.
3. **Historical Insights**: Provide educational content and historical facts related to each clue, inspired by the treasure hunt in the film.

#### Starting Code:
Here's a basic setup to get you started. This includes the initial HTML, CSS, and JavaScript to integrate the WebOTP API and create a simple interactive treasure hunt.

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treasure Hunt</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Treasure Hunt: Unlock Secrets</h1>
    <p>Enter the OTP sent to your phone to unlock the next clue!</p>
    <input type="text" id="otpInput" placeholder="Enter OTP">
    <button id="submitBtn">Submit</button>
    <div id="status"></div>
    <div id="clue"></div>

    <script src="main.js"></script>
</body>
</html>
```

**styles.css**:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    padding: 20px;
}

h1 {
    color: #d9534f;
}

input {
    padding: 10px;
    font-size: 16px;
    margin: 10px 0;
}

button {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#clue {
    margin-top: 20px;
    font-size: 18px;
}
```

**main.js**:
```javascript
document.getElementById('submitBtn').addEventListener('click', async () => {
    const otpInput = document.getElementById('otpInput').value;
    if (otpInput) {
        const isValid = await verifyOTP(otpInput); // Replace with actual OTP verification logic
        if (isValid) {
            document.getElementById('status').innerText = 'OTP verified! Here is your clue:';
            displayNextClue();
        } else {
            document.getElementById('status').innerText = 'Invalid OTP. Please try again.';
        }
    } else {
        document.getElementById('status').innerText = 'Please enter the OTP.';
    }
});

async function verifyOTP(otp) {
    // Simulate OTP verification
    return otp === '123456'; // Replace with actual verification logic
}

function displayNextClue() {
    const clueElement = document.getElementById('clue');
    clueElement.innerText = 'Clue: The next location is where history and mystery meet. Seek the hidden library!';
}

if ('OTPCredential' in window) {
    window.addEventListener('DOMContentLoaded', async () => {
        try {
            const content = await navigator.credentials.get({ otp: { transport: ['sms'] } });
            document.getElementById('otpInput').value = content.code;
        } catch (err) {
            console.error('Error: ' + err);
        }
    });
}
```

#### References:
- **National Treasure: Book of Secrets (2007)**:
  - [Wikipedia](https://en.wikipedia.org/wiki/National_Treasure:_Book_of_Secrets)
- **WebOTP API**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebOTP_API)

**Praise Cage!** Embark on this coding adventure and create an interactive treasure hunt experience that unlocks secrets with the power of the WebOTP API, inspired by the thrilling journey in *National Treasure: Book of Secrets*.