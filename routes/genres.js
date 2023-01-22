const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); 
const Joi = require("joi");
const app = express();
const { Genre, validate} = require("../models/genres");


router.get("/", async(req, res)=> {
    const genres = await Genre.find()
    .sort("title");
    res.send(genres);
});

router.get("/:id", async (req, res) => {
    const genre = await Genre.findById(req.params.id);
    if(!genre) return res.status(404).send("The user with the id is not found");
    res.send(genre);


})
router.post("/", async (req, res) => {
    const {error} = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let genre = new Genre ({
        title: req.body.title
    });
       genre = await genre.save();
    res.send(genre);

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