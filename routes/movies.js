const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); 
const Joi = require("joi");
const app = express();
const { Genre} = require("../models/genres");
const {Movie, validate} = require("../models/movie");


router.get("/", async(req, res)=> {
    const movies = await Movie.find()
    .sort("name");
    res.send(movies);
});

router.get("/:id", async (req, res) => {
    const movies = await Movie.findById(req.params.id);
    if(!movies) return res.status(404).send("The user with the id is not found");
    res.send(movies);


})
router.post("/", async (req, res) => {
    const {error} = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.id);
    if(!genre) return res.status(400).send("Invalid genre");

    let movie = new Movie ({
        title: req.body.title,
        genre:{
            _id: genre_id,
            
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate:  req.body.dailyRentalRate

    });

       movie = await movie.save();
       res.send(movie);

});


router.put("/:id", async (req, res) =>{
    const {error} = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

   const genre = await Genre.findByIdAndUpdate(req.params.id, {title: req.body.title, 
    new: true
});

    //const genre = genres.find(c=> c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The movie with the id is not found");
    
    //genre.name = req.body.name;
    res.send(genre)
    

});

router.delete("/:id", async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
   // genres.find(c=> c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The user with the id is not found");
    //const index = genres.indexOf(genre);
    //genres.splice(index, 1);
    res.send(genre);


});




module.exports = router;