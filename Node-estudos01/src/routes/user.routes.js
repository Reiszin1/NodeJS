const { Router } = require('express');
const UserModel = require('../models/user.model');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
        console.log('Users found successfully');
    } catch (error) {
        res.status(500).send(error.message);
        console.log('Error getting users', error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
        console.log('User created successfully');
    } catch (error) {
        res.status(500).send(error.message);
        console.log('Error creating user', error);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(user);
        console.log('User updated successfully');
    } catch (error) {
        res.status(500).send(error.message);
        console.log('Error updated user', error);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);

        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message);
        console.log('Error for deleted user', error);
    }
}) 

module.exports = router;
