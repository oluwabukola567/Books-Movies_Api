const mongoose = require("mongoose"); 
const Joi = require("joi");

const Genre = mongoose.model("Genre", new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:100,
        uppercase: true

    }
}));


function validateMovie(genre){
    const schema = Joi.object({
        title: Joi.string().min(3).required()
    });
    return schema.validate(genre);
}


module.exports.Genre = Genre;
module.exports.validate = validateMovie;

