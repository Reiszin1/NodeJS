const { Router } = require('express');
const ItemModel = require('../models/item.model');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const item = await ItemModel.find({});
        res.status(200).json(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await ItemModel.findById(req.params.id);
        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const item = await ItemModel.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const item = await ItemModel.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const item = await ItemModel.findByIdAndDelete(id);

        res.status(200).json(item)
    } catch (error) {
        res.status(500).send(error.message);
    }
}) 

module.exports = router;
