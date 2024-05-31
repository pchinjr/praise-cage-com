---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Left_Behind_film_poster.jpg"
---
### **Title: Task Redemption with Left Behind and Prioritized Task Scheduling API**

### **Description:**
Inspired by Nicolas Cage's role in *Left Behind*, this project utilizes the Prioritized Task Scheduling API to manage and execute tasks efficiently, mirroring the urgency and prioritization required during the end-times crisis depicted in the film. The application aims to help users schedule and prioritize their tasks dynamically, ensuring that high-priority tasks are handled promptly and efficiently. This project blends the suspense and critical decision-making of *Left Behind* with the practical functionality of task management.

### **Features:**
- **Task Scheduling:** Add, prioritize, and manage tasks effectively.
- **Dynamic Execution:** Ensure high-priority tasks are executed first using the Prioritized Task Scheduling API.
- **User-Friendly Interface:** An intuitive interface that reflects the urgency and critical nature of managing priorities in a crisis.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Redemption with Left Behind</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            text-align: center;
            padding: 20px;
        }
        #task-container {
            margin: 20px auto;
            width: 50%;
        }
        .task {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        input, button {
            padding: 10px;
            margin: 5px;
        }
        .high-priority {
            border-left: 5px solid #e74c3c;
        }
    </style>
</head>
<body>
    <h1>Task Redemption with Left Behind</h1>
    <p>Manage and prioritize your tasks effectively in times of urgency.</p>

    <div>
        <input type="text" id="task-input" placeholder="Enter your task">
        <select id="priority-select">
            <option value="low">Low Priority</option>
            <option value="high">High Priority</option>
        </select>
        <button onclick="addTask()">Add Task</button>
    </div>

    <div id="task-container"></div>

    <script>
        const taskContainer = document.getElementById('task-container');

        function addTask() {
            const taskInput = document.getElementById('task-input').value;
            const priority = document.getElementById('priority-select').value;
            if (taskInput) {
                const task = document.createElement('div');
                task.className = `task ${priority === 'high' ? 'high-priority' : ''}`;
                task.innerHTML = `<span>${taskInput}</span><button onclick="removeTask(this)">Remove</button>`;
                taskContainer.appendChild(task);
                document.getElementById('task-input').value = '';
                prioritizeTasks();
            } else {
                alert('Please enter a task.');
            }
        }

        function removeTask(button) {
            const task = button.parentElement;
            taskContainer.removeChild(task);
        }

        function prioritizeTasks() {
            const tasks = Array.from(taskContainer.children);
            tasks.sort((a, b) => {
                if (a.classList.contains('high-priority') && !b.classList.contains('high-priority')) {
                    return -1;
                } else if (!a.classList.contains('high-priority') && b.classList.contains('high-priority')) {
                    return 1;
                } else {
                    return 0;
                }
            });
            tasks.forEach(task => taskContainer.appendChild(task));
        }
    </script>
</body>
</html>
```

### **References:**
- **[Left Behind (2014) - Wikipedia](https://en.wikipedia.org/wiki/Left_Behind_(2014_film))**
- **[Prioritized Task Scheduling API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API)**

### **Project Overview:**
This project captures the urgency and critical decision-making depicted in *Left Behind* by using the Prioritized Task Scheduling API to manage tasks effectively. Users can add, prioritize, and execute tasks, ensuring that high-priority tasks are handled first. The application's design and functionality reflect the critical nature of prioritization in a crisis, making the learning experience both practical and engaging. Embrace the urgency and precision of Nicolas Cage’s character to master task scheduling and prioritization. Praise Cage!