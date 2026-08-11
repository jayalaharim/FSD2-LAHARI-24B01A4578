// importing the express module
const express = require('express');

//initializing the application
const app = express();

//setting the port number
const PORT = 3000;

//home route
app.get('/', (req, res) => {
    res.send('<h1>Student Management System</h1><p>Welcome to the Student Portal</p>');
});

app.get('/students', (req, res) => {
    res.send('<h2>Students</h2><ul><li>Rahul</li><li>Priya</li><li>Arjun</li></ul>');
});

//about route
app.get('/about', (req, res) => {
    res.send('This Student Management System is built using Express.js');
});

//the data route
app.get('/api/student', (req, res) => {
    res.json({
        id: 101,
        name: 'Siri',
        course: 'B.Tech AI & DS'
    });
});

//starting the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});