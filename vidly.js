const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const genres= require("./routes/genres");
const customer = require("./routes/customers");

mongoose.connect("mongodb://localhost/genres")
    .then(() => console.log("Database connected successfuly"))
    .catch(err => console.log("Database does not connect"));


app.use(express.json());
app.use('/api/genres', genres );
app.use("/api/customers", customer);


const PORT = process.env.port || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));





