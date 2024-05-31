---
imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/18/Mom_and_Dad_%282017_film%29.png"
---

### **Title: Family Frenzy with Mom and Dad and IndexedDB**

### **Description:**
Inspired by Nicolas Cage's thrilling role in *Mom and Dad*, this project uses IndexedDB to create a web application that manages and stores family-related data. The application captures the chaotic and unpredictable nature of the film, allowing users to add, edit, and delete family member records in a secure and efficient manner. The use of IndexedDB ensures that data persists even when the page is refreshed, reflecting the durability and resilience of the family dynamics depicted in the film.

### **Features:**
- **Persistent Data Storage:** Use IndexedDB to store family member data that persists across page reloads.
- **CRUD Operations:** Implement Create, Read, Update, and Delete operations for managing family member records.
- **Interactive Interface:** Provide an intuitive and interactive interface for managing the family data.
- **Thematic Design:** Reflect the chaotic and intense atmosphere of *Mom and Dad* through the application's design and interactions.

### **Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Family Frenzy with Mom and Dad and IndexedDB</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            text-align: center;
            padding: 50px;
        }
        .container {
            max-width: 800px;
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
        .form-control {
            margin: 10px 0;
            padding: 10px;
            width: calc(100% - 22px);
            font-size: 16px;
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
        .record {
            margin: 10px 0;
            padding: 10px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Family Frenzy</h1>
        <p>Manage your family data inspired by Mom and Dad.</p>

        <input type="text" id="name" class="form-control" placeholder="Name">
        <input type="text" id="age" class="form-control" placeholder="Age">
        <button onclick="addRecord()">Add Family Member</button>

        <div id="records"></div>
    </div>

    <script>
        let db;

        window.onload = () => {
            let request = indexedDB.open('FamilyDB', 1);

            request.onerror = (event) => {
                console.log('Error opening IndexedDB:', event);
            };

            request.onsuccess = (event) => {
                db = event.target.result;
                displayRecords();
            };

            request.onupgradeneeded = (event) => {
                db = event.target.result;
                db.createObjectStore('family', { keyPath: 'id', autoIncrement: true });
            };
        };

        function addRecord() {
            let name = document.getElementById('name').value;
            let age = document.getElementById('age').value;

            let transaction = db.transaction(['family'], 'readwrite');
            let store = transaction.objectStore('family');
            let record = { name, age };

            store.add(record);

            transaction.oncomplete = () => {
                displayRecords();
                document.getElementById('name').value = '';
                document.getElementById('age').value = '';
            };
        }

        function displayRecords() {
            let transaction = db.transaction(['family'], 'readonly');
            let store = transaction.objectStore('family');
            let request = store.getAll();

            request.onsuccess = (event) => {
                let records = event.target.result;
                let recordsDiv = document.getElementById('records');
                recordsDiv.innerHTML = '';

                records.forEach(record => {
                    let recordDiv = document.createElement('div');
                    recordDiv.className = 'record';
                    recordDiv.innerHTML = `
                        <strong>Name:</strong> ${record.name} <br>
                        <strong>Age:</strong> ${record.age} <br>
                        <button onclick="deleteRecord(${record.id})">Delete</button>
                    `;
                    recordsDiv.appendChild(recordDiv);
                });
            };
        }

        function deleteRecord(id) {
            let transaction = db.transaction(['family'], 'readwrite');
            let store = transaction.objectStore('family');
            store.delete(id);

            transaction.oncomplete = () => {
                displayRecords();
            };
        }
    </script>
</body>
</html>
```

### **References:**
- **[Mom and Dad (2017) - Wikipedia](https://en.wikipedia.org/wiki/Mom_and_Dad_(2017_film))**
- **[IndexedDB - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)**

### **Project Overview:**
This project captures the chaotic and intense atmosphere of *Mom and Dad* using IndexedDB to manage and store family-related data. Users can add, edit, and delete records, with changes persisting across page reloads. The application demonstrates the practical use of IndexedDB for creating robust and interactive web applications. Embrace the resilience and adaptability of Nicolas Cage’s character to master the use of IndexedDB in web development. Praise Cage!