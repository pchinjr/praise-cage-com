---
imageUrl: >-
  https://upload.wikimedia.org/wikipedia/en/thumb/9/99/It_could_happen_to_you_ver2.jpg/220px-It_could_happen_to_you_ver2.jpg
---
### Project Title: **"Lucky Break: A Charitable Web Component"**

### Description:
"It Could Happen to You," starring Nicolas Cage as Charlie Lang, tells the story of a New York cop who promises to share his lottery winnings with a waitress if his ticket wins. Inspired by the themes of luck and generosity in the film, "Lucky Break: A Charitable Web Component" is a web application that allows users to create and embed custom charity donation buttons on their sites or blogs.

Using Web Components, this project leverages the concept of reusability and encapsulation to create a custom `<lucky-donation-button>` element. This element can be configured to link to various charitable organizations and track the amount of donations made through it. It's designed to encourage users to share their own "lucky breaks" by supporting causes they care about.

### Starting Code:

#### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lucky Break Donation Button</title>
    <script src="luckyDonationButton.js"></script>
</head>
<body>
    <h1>Support a Cause!</h1>
    <lucky-donation-button label="Donate $5 to Charity" charity-url="https://examplecharity.com/donate"></lucky-donation-button>
</body>
</html>
```

#### JavaScript (luckyDonationButton.js):
```javascript
class LuckyDonationButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const label = this.getAttribute('label') || 'Donate';
        const charityUrl = this.getAttribute('charity-url');
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                    border: none;
                    border-radius: 8px;
                }
            </style>
            <button>${label}</button>
        `;

        this.shadowRoot.querySelector('button').onclick = () => {
            window.open(charityUrl, '_blank');
        };
    }
}

window.customElements.define('lucky-donation-button', LuckyDonationButton);
```

### References:
- **Film**: [It Could Happen to You (1994)](https://en.wikipedia.org/wiki/It_Could_Happen_to_You_(1994_film))
- **API**: [Web Components Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

"Lucky Break: A Charitable Web Component" not only embodies the spirit of generosity from "It Could Happen to You" but also applies modern web technology to facilitate charitable actions, making it easier for anyone to contribute to causes they care about directly from their personal or business websites.
