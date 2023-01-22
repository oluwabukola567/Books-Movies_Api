const mongoose = require("mongoose"); 
const Joi = require("joi");

const Customer = mongoose.model("Customer", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:100,
        uppercase: true

    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 12,
        maxlength:50

    }
}));

function validateCustomers(customer){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        IsGold: Joi.boolean(),
        phone: Joi.string().min(12).max(50).required()
       
    });
    return schema.validate(customer, schema);
}


module.exports.Customer = Customer;
module.exports.validate = validateCustomers;
