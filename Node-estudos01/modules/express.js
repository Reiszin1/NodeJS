const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();
app.use(express.json());

const port = 8080;

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
        console.log(`Users found successfully`);
    }catch (error) {
        res.status(500).send(error.message);
        console.log(`Error getting users`, error);
    }
})

app.get('/users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findById(id);
        
        return res.status(200).json(user);
    }catch (error) {
        return res.status(500).send(error.message);
    }
})

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
        console.log(`User created successfully`);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(`Error creating user`, error);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
