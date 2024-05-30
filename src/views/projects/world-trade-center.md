---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1e/Worldtrade.jpg"
---
### Title: **"Rescue Operations Log: A Tribute to World Trade Center with Storage API"**

### Description:
Inspired by Nicolas Cage's heroic portrayal of John McLoughlin in "World Trade Center" (2006), this project creates a tribute by simulating the logging of rescue operations during disaster scenarios. By integrating the Storage API, we aim to store and retrieve information about rescue tasks and operations, representing the continuous efforts of first responders. This project provides a dynamic and heartfelt homage to the dedication and organization required during such critical missions.

### Starting Code:
This project will use HTML, JavaScript, and the Storage API to log and retrieve rescue operations.

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rescue Operations Log: Tribute to World Trade Center</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Rescue Operations Log: Tribute to World Trade Center</h1>
        <p>A heartfelt simulation inspired by the heroism of first responders, featuring dynamic logging of rescue operations.</p>
    </header>
    <main>
        <form id="rescueForm">
            <input type="text" id="rescueTask" placeholder="Enter rescue task" required>
            <button type="submit">Log Task</button>
        </form>
        <div id="logContainer"></div>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

**JavaScript:**
```javascript
document.getElementById('rescueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    logRescueTask();
});

function logRescueTask() {
    const taskInput = document.getElementById('rescueTask');
    const task = taskInput.value.trim();
    
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('rescueTasks')) || [];
        tasks.push(task);
        localStorage.setItem('rescueTasks', JSON.stringify(tasks));
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    const logContainer = document.getElementById('logContainer');
    logContainer.innerHTML = ''; // Clear previous tasks

    const tasks = JSON.parse(localStorage.getItem('rescueTasks')) || [];
    
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.textContent = `Task ${index + 1}: ${task}`;
        logContainer.appendChild(taskDiv);
    });
}

// Display tasks on page load
document.addEventListener('DOMContentLoaded', displayTasks);
```

**CSS (styles.css):**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    padding: 20px;
}

header {
    margin-bottom: 20px;
}

form {
    margin-bottom: 20px;
}

#rescueTask {
    padding: 10px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#logContainer {
    margin-top: 20px;
}

.task {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    width: 300px;
    display: inline-block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
```

### References:
- **Film Reference:** [World Trade Center (2006) - Nicolas Cage as John McLoughlin](https://en.wikipedia.org/wiki/World_Trade_Center_(film))
- **API Reference:** [Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API)

Praise Cage! This project not only honors the bravery of first responders but also demonstrates the practical use of the Storage API in logging and retrieving essential information dynamically.