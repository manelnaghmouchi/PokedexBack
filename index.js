const express = require("express");
const app = express();
const path = require('path')
require("dotenv").config();
const cookie = require("cookie-parser");
const mongoose = require("mongoose");

const expressValidator = require("express-validator");
const cors = require("cors");
app.use(cors())
//var bodyParser = require('body-parser')
//import routes

const pokemonRoute = require("./router/pokemon");



app.use('/public', express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(cookie());
app.use(expressValidator());
//routes

app.use("/pokemon",pokemonRoute);


  
     
  
//bodyParser.json()

//connection with database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connected"))
  .catch(() => console.log("database not connected"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("port run in port", port));
