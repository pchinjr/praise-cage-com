---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/48/USS_Indianapolis_Men_of_Courage_poster.jpg"
---
### **Title: Sea of Courage with USS Indianapolis: Men of Courage and WebGL**

### **Description:**
Inspired by Nicolas Cage's heroic role in *USS Indianapolis: Men of Courage*, this project utilizes WebGL to create a 3D visualization of a naval scene, simulating the bravery and harrowing experience of the sailors aboard the USS Indianapolis. The application aims to immerse users in a realistic 3D environment where they can explore the ship and its surroundings, showcasing the power of WebGL for rendering complex graphics and simulations.

### **Features:**
- **3D Naval Scene:** Create a detailed 3D scene of the USS Indianapolis and its surroundings using WebGL.
- **Interactive Exploration:** Allow users to navigate around the ship and explore different viewpoints.
- **Realistic Graphics:** Use WebGL to render realistic water, lighting, and textures, enhancing the immersive experience.

To fix the error, you need to include the `gl-matrix` library, which provides the `mat4` object used for matrix operations. Below is the corrected code with the inclusion of the `gl-matrix` library.

### **Starting Code with gl-matrix Library:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sea of Courage with USS Indianapolis: Men of Courage</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        #canvas {
            display: block;
            width: 100vw;
            height: 100vh;
        }
    </style>
</head>
<body>
    <h1 style="color: white; text-align: center; position: absolute; top: 10px; width: 100%;">Sea of Courage with USS Indianapolis: Men of Courage</h1>
    <canvas id="canvas"></canvas>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"></script>
    <script>
        // Set up WebGL context
        const canvas = document.getElementById('canvas');
        const gl = canvas.getContext('webgl');

        if (!gl) {
            alert('WebGL not supported, please use a different browser.');
            throw new Error('WebGL not supported');
        }

        // Vertex shader program
        const vsSource = `
            attribute vec4 aVertexPosition;
            attribute vec4 aVertexColor;
            uniform mat4 uModelViewMatrix;
            uniform mat4 uProjectionMatrix;
            varying lowp vec4 vColor;
            void main(void) {
                gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
                vColor = aVertexColor;
            }
        `;

        // Fragment shader program
        const fsSource = `
            varying lowp vec4 vColor;
            void main(void) {
                gl_FragColor = vColor;
            }
        `;

        // Initialize shader program
        const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

        // Collect shader info
        const programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
                vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            },
        };

        // Build the geometry and store it in buffers
        const buffers = initBuffers(gl);

        // Draw the scene
        function render() {
            drawScene(gl, programInfo, buffers);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        // Initialize the shader program
        function initShaderProgram(gl, vsSource, fsSource) {
            const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

            const shaderProgram = gl.createProgram();
            gl.attachShader(shaderProgram, vertexShader);
            gl.attachShader(shaderProgram, fragmentShader);
            gl.linkProgram(shaderProgram);

            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
                return null;
            }

            return shaderProgram;
        }

        // Create a shader
        function loadShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }

            return shader;
        }

        // Initialize the buffers
        function initBuffers(gl) {
            // Create a buffer for the square's positions.
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

            // Define the positions for a square.
            const positions = [
                 1.0,  1.0,
                -1.0,  1.0,
                -1.0, -1.0,
                 1.0, -1.0,
            ];

            // Pass the list of positions into WebGL to build the shape.
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            // Define colors for each face
            const colors = [
                1.0,  1.0,  1.0,  1.0,
                1.0,  0.0,  0.0,  1.0,
                0.0,  1.0,  0.0,  1.0,
                0.0,  0.0,  1.0,  1.0,
            ];

            // Build the buffer for colors
            const colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

            return {
                position: positionBuffer,
                color: colorBuffer,
            };
        }

        // Draw the scene
        function drawScene(gl, programInfo, buffers) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clearDepth(1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);

            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            const fieldOfView = 45 * Math.PI / 180;
            const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
            const zNear = 0.1;
            const zFar = 100.0;
            const projectionMatrix = mat4.create();

            mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

            const modelViewMatrix = mat4.create();
            mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

            {
                const numComponents = 2;
                const type = gl.FLOAT;
                const normalize = false;
                const stride = 0;
                const offset = 0;
                gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
                gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
                gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
            }

            {
                const numComponents = 4;
                const type = gl.FLOAT;
                const normalize = false;
                const stride = 0;
                const offset = 0;
                gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
                gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, numComponents, type, normalize, stride, offset);
                gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
            }

            gl.useProgram(programInfo.program);

            gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
            gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

            {
                const offset = 0;
                const vertexCount = 4;
                gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
            }
        }
    </script>
</body>
</html>
```

### **References:**
- **[USS Indianapolis: Men of Courage (2016) - Wikipedia](https://en.wikipedia.org/wiki/USS_Indianapolis:_Men_of_Courage)**
- **[WebGL - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)**
- **[gl-matrix Library](https://github.com/toji/gl-matrix)**

### **Project Overview:**
This project captures the heroic and intense atmosphere of *USS Indianapolis: Men of Courage* using WebGL to create an immersive 3D naval scene. Users can explore the ship and its surroundings, experiencing the power of WebGL for rendering complex graphics. The application's design and functionality reflect the bravery and critical moments depicted in the film, making the learning process both engaging and impactful. Embrace the courage and precision of Nicolas Cage’s character to master 3D visualization and rendering with WebGL. Praise Cage!