const mongoose = require("mongoose");
const Joi = require("joi");

const Rental = mongoose.model("rental",new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name:{
                type: String,
                required:true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                default: false
            },
            phone: {
                type: String,
                required: true,
                min: 0,
                max: 50
            },
         }),
                    required: true, 
    },
    movie: {
        type: new mongoose.Schema({
            title: {
               type: String,
               required: true,
               minlength: 5,
               maxlength:50 
            },
            dailyRental: {
                type: String,
                required: true,
                min: 0,
                max:255
            }
        }),
        required: true
    },
    dateout: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date
    },
    rentalfee: {
      type: Number,
      min: 0  
    }
}));
function validateRental(Rental){
    const schema = {
        customerId: Joi.string().required(),
        movieId: Joi.string().required(),
    };
    return Joi.validate(Rental, schema);
}
