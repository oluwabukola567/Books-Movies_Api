const Joi = require("joi");
const mongoose = require("mongoose");

const Movie = mongoose.model("movies",new mongoose.Schema({
    title: {
        type: String,
        required:true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
}));
function validateMovie(Movie){
    const schema = {
        title: Joi.string().min().max().required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().required(),
        dailyRentalRate: Joi.number().min(0).required()
    };
    return Joi.validate(Movie, schema);
}
