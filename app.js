
const express = require('express');
const app = express();
app.use(express.json()); // Parse incoming JSON data

// GET method to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// POST method to add two numbers
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.send(`Sum is ${sum}`);
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
