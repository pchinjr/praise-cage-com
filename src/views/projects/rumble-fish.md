---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bd/Rumble_Fish.jpg"
---

### Project Title: **"Highlighting Rumble Fish: Interactive Style Narratives"**

### Description
In the 1983 film "Rumble Fish," directed by Francis Ford Coppola, Nicolas Cage plays 'Smokey,' a character entwined in a complex narrative of youth rebellion and existential struggles, depicted in stark monochrome visuals. This project, "Highlighting Rumble Fish," creatively combines the film's theme of stark contrast and personal development with the CSS Custom Highlight API. This API allows developers to apply custom styling to text highlights within web applications, offering a metaphorical ‘highlight’ on life’s contrasting moments, similar to those faced by the characters in "Rumble Fish."

The application will feature a dynamic web page where users can interactively highlight quotes or dialogues from "Rumble Fish," which then applies thematic styles reflecting the emotions or underlying themes of the selected text. For instance, selecting a quote about isolation might highlight the text in a cold, blue tone, while a passionate dialogue could be highlighted in fiery red. This project not only brings a new interactive layer to appreciating film dialogue but also leverages modern web standards to enhance textual interpretation.

### Starting Code

### Beginner Hints:
- Create a single `index.html` file.
- Copy the full HTML code block into that file.
- Open `index.html` in your browser. If something doesn't work, try a local server like `python -m http.server`.
- Open DevTools Console to spot errors and typos quickly.


Here’s the HTML and JavaScript code snippets to get started with the "Highlighting Rumble Fish" project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Highlighting Rumble Fish</title>
<style>
    ::selection {
        background-color: #ffb7b7; /* Light red for passion */
        color: white;
    }

    [data-theme="isolation"]::selection {
        background-color: #add8e6; /* Light blue for isolation */
        color: white;
    }

    [data-theme="youth"]::selection {
        background-color: #90ee90; /* Light green for youth */
        color: black;
    }
</style>
</head>
<body>
    <div id="quoteContainer">
        <p id="quote">"Time is a funny thing. Time is a very peculiar item. You see when you're young, you're a kid, you got time, you got nothing but time. Throw away a couple of years here, a couple of years there... it doesn't matter. You know. The older you get you say, 'Jesus, how much I got? I got thirty-five summers left.' Think about it. Thirty-five summers."</p>
    </div>
<script>
    document.getElementById('quote').addEventListener('mouseup', function() {
        const selectedText = window.getSelection().toString();
        if (selectedText.includes("time")) {
            this.setAttribute('data-theme', 'youth');
        } else if (selectedText.includes("Jesus")) {
            this.setAttribute('data-theme', 'isolation');
        } else {
            this.removeAttribute('data-theme');
        }
    });
</script>
</body>
</html>
```



### References
- For more about **Rumble Fish**, visit [Wikipedia: Rumble Fish](https://en.wikipedia.org/wiki/Rumble_Fish).
- Learn more about the **CSS Custom Highlight API** and how to implement it from the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API).

This project is a stylish and interactive way to merge cinematic storytelling with web technology, offering users a unique way to engage with the themes of "Rumble Fish" through an interactive and visually appealing interface.