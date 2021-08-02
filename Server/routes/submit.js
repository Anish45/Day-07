const express = require('express');

const router = express.Router();

const Form = require("../models/form");

router.post("/", async (req,res) => {
    const form = new  Form({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.phone,
        password: req.body.password
    })

    try{
        const savedData = await form.save();
        res.json(savedData);
    }catch (err) {
        res.json({message: err});
    }
})

router.get('/', async (req, res) => {
    try{
        const datas = await Form.find();
        res.json(datas)
    }catch (err) {
        res.json({message: err});
    }
})

module.exports = router;