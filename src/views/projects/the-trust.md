---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/The_Trust_poster.jpg"
---
### **Title: Trustworthy Access with The Trust and WebOTP API**

### **Description:**
Inspired by Nicolas Cage's role in *The Trust*, this project utilizes the WebOTP API to create a secure and trustworthy web application for managing one-time passwords (OTPs). The application echoes the themes of security and trust depicted in the film, enabling users to securely receive and verify OTPs sent via SMS. This project demonstrates the practical use of the WebOTP API for enhancing security in web applications.

### **Features:**
- **Secure OTP Reception:** Use the WebOTP API to automatically receive and verify one-time passwords.
- **User-Friendly Interface:** Provide a simple and intuitive interface for entering and verifying OTPs.
- **Enhanced Security:** Ensure secure handling of OTPs to protect user data and prevent unauthorized access.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trustworthy Access with The Trust</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            margin-bottom: 20px;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Trustworthy Access</h1>
        <p>Enter the OTP sent to your phone:</p>
        <input type="text" id="otp-input" placeholder="Enter OTP">
        <button onclick="verifyOTP()">Verify OTP</button>
        <p id="message"></p>
    </div>

    <script>
        async function verifyOTP() {
            const otpInput = document.getElementById('otp-input').value;
            const message = document.getElementById('message');

            // Simulate OTP verification
            if (otpInput === '123456') {
                message.textContent = 'OTP verified successfully!';
                message.style.color = 'green';
            } else {
                message.textContent = 'Invalid OTP. Please try again.';
                message.style.color = 'red';
            }
        }

        // Automatically receive OTP using WebOTP API
        if ('OTPCredential' in window) {
            navigator.credentials.get({ otp: { transport: ['sms'] } })
                .then(otp => {
                    document.getElementById('otp-input').value = otp.code;
                    verifyOTP();
                })
                .catch(err => {
                    console.error('Error receiving OTP:', err);
                });
        }
    </script>
</body>
</html>
```

### **References:**
- **[The Trust (2016) - Wikipedia](https://en.wikipedia.org/wiki/The_Trust_(2016_film))**
- **[WebOTP API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebOTP_API)**

### **Project Overview:**
This project integrates the themes of security and trust from *The Trust* with the functionality of the WebOTP API to create a secure and user-friendly OTP verification system. Users can automatically receive and verify one-time passwords, ensuring a secure and seamless authentication process. Embrace the meticulous and trustworthy nature of Nicolas Cage’s character to master the use of the WebOTP API in enhancing web application security. Praise Cage!