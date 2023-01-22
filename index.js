const Joi = require("joi");
const express = require("express");
const logger = require("./middleware/logger");
const app = express();
const courses = require("./routes/courses");
const home = require("./routes/home");

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// app.get(`app: ${app.get('env')}`);



 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use("/api/courses", courses );
app.use("/", home);



//app.use(logger());

// console.log("Application Name", + config.get('name'));
// console.log("Mail Server", + config.get('mail.host'));
// console.log("Mail Password", + config.get('mail.password'));

app.set("views", "pug");
app.set("views", "./views");




const PORT = process.env.port || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))
