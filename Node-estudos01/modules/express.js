const express = require('express');

const app = express();

const port = 8080;

app.get('/home', (req, res) => {  
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Hello World</h1>');
})

app.get('/users', (req, res) => {
    res.status(200).json([{
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30
    }, {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        age: 25
    }])
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
