---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/G-Force_poster.jpg"
---
**Level:** Intermediate (Secure context required: https:// or http://localhost)

In the provided example, the compressed data is held in a Blob object. Here's a step-by-step explanation of how the data is managed during compression and decompression:

1. **Compression**:
    - The input data is converted to a `Uint8Array` using the `TextEncoder`.
    - A `CompressionStream` is created with the 'gzip' algorithm.
    - The data is written to the writable stream of the `CompressionStream`.
    - The readable stream of the `CompressionStream` is read in chunks and collected into an array.
    - The chunks are then combined into a `Blob` object, which holds the compressed data.

2. **Holding the Compressed Data**:
    - The `Blob` object containing the compressed data is temporarily stored as a URL using `URL.createObjectURL()`.
    - This URL is assigned to the `data-blob-url` attribute of the decompression button for later retrieval.

3. **Decompression**:
    - When decompression is triggered, the URL is used to fetch the `Blob` containing the compressed data.
    - The `Blob` is then piped through a `DecompressionStream` with the 'gzip' algorithm.
    - The decompressed data is read in chunks and combined into a `Uint8Array`.
    - Finally, the decompressed data is converted back to a string using the `TextDecoder`.

Here is a more detailed look at the code with comments to clarify these steps:

### Starting Code:

### Beginner Hints:
- Create a single `index.html` file.
- Copy the full HTML code block into that file.
- Open `index.html` in your browser. If something doesn't work, try a local server like `python -m http.server`.
- Open DevTools Console to spot errors and typos quickly.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G-Force: Compression Lab</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        color: #333;
        text-align: center;
        padding: 20px;
    }

    textarea {
        width: 90%;
        max-width: 640px;
        height: 120px;
        margin: 10px auto;
        display: block;
        padding: 10px;
    }

    .controls {
        margin: 10px 0;
    }

    button {
        padding: 10px 16px;
        margin: 0 5px;
    }

    #output {
        margin-top: 10px;
        min-height: 24px;
    }
</style>
</head>
<body>
    <h1>G-Force: Compression Lab</h1>
    <textarea id="inputData" placeholder="Type some text to compress..."></textarea>
    <div class="controls">
        <button id="compressBtn">Compress</button>
        <button id="decompressBtn" disabled>Decompress</button>
    </div>
    <div id="output"></div>
<script>
    const output = document.getElementById('output');
    const compressBtn = document.getElementById('compressBtn');
    const decompressBtn = document.getElementById('decompressBtn');
    const compressionSupported = 'CompressionStream' in window && 'DecompressionStream' in window;

    if (!compressionSupported) {
        output.innerText = 'CompressionStream API is not supported in this browser.';
        compressBtn.disabled = true;
        decompressBtn.disabled = true;
    }

    async function compressData(data) {
        const encoder = new TextEncoder();
        const input = encoder.encode(data);
        const stream = new CompressionStream('gzip');
        const writer = stream.writable.getWriter();
        writer.write(input);
        writer.close();

        const compressedStream = stream.readable;
        const reader = compressedStream.getReader();
        const chunks = [];

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
        }

        return new Blob(chunks);
    }

    async function decompressData(blob) {
        const stream = blob.stream().pipeThrough(new DecompressionStream('gzip'));
        const reader = stream.getReader();
        const chunks = [];

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
        }

        const decompressed = new Uint8Array(chunks.reduce((acc, val) => acc.concat(Array.from(val)), []));
        const decoder = new TextDecoder();
        return decoder.decode(decompressed);
    }

    if (compressionSupported) {
    document.getElementById('compressBtn').addEventListener('click', async () => {
        const inputData = document.getElementById('inputData').value;
        if (inputData) {
            const compressedBlob = await compressData(inputData);
            document.getElementById('output').innerText = 'Data compressed successfully!';

            // Store the compressed data URL in the button's dataset
            document.getElementById('decompressBtn').dataset.blobUrl = URL.createObjectURL(compressedBlob);
            document.getElementById('compressBtn').disabled = true;
            document.getElementById('decompressBtn').disabled = false;
        } else {
            document.getElementById('output').innerText = 'Please enter some data to compress.';
        }
    });

    document.getElementById('decompressBtn').addEventListener('click', async () => {
        const blobUrl = document.getElementById('decompressBtn').dataset.blobUrl;
        if (blobUrl) {
            const response = await fetch(blobUrl);
            const blob = await response.blob();
            const decompressedData = await decompressData(blob);
            document.getElementById('output').innerText = `Decompressed Data: ${decompressedData}`;

            // Clean up by revoking the object URL
            URL.revokeObjectURL(blobUrl);
            document.getElementById('compressBtn').disabled = false;
            document.getElementById('decompressBtn').disabled = true;
        } else {
            document.getElementById('output').innerText = 'No compressed data found.';
        }
    });
    }
</script>
</body>
</html>
```



### Key Points:
- **Compression**: The data is converted to a `Uint8Array`, compressed using `CompressionStream`, and stored in a `Blob`.
- **Temporary Storage**: The compressed `Blob` is referenced via a URL stored in the button's dataset.
- **Decompression**: The `Blob` is fetched via its URL, decompressed using `DecompressionStream`, and converted back to a string.

This approach ensures that the data is managed efficiently and the original data integrity is maintained through the compression and decompression processes.
