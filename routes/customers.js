const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); 
const Joi = require("joi");
const app = express();
const {Customer, validate } = require("../models/customers");


router.get("/", async(req, res)=> {
    const customers = await Customer.find()
    .sort("name");
    res.send(customers);
});

router.post("/", async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let customers = new Customer ({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
       customers = await Customer.save();
    res.send(customers);

});





module.exports = router;