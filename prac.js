const debug = require("debug")("app:startup");
//const dbDebugger = require("debug")("app:db");

const config = require('config');
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();

app.set("views", "pug");
app.set("views", "./views");


if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('morgan enabled');
}



//dbDebugger('connected to the database');




const PORT = process.env.port || 3000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))