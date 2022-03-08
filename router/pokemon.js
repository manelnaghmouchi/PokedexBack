const express = require("express");
const {get1Pokemon,getPokemon} = require("../Controllers/pokemonController");

const pokemonRoute = express.Router();


pokemonRoute.get("/get", getPokemon);
pokemonRoute.get("/gett/:id", get1Pokemon);


module.exports = pokemonRoute;