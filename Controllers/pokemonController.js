
const fetch = require('node-fetch');




exports.getPokemon = async (req, res) => {
  const requestOptions ={
    method:'GET'
  }
 const data= await fetch('https://pokeapi.co/api/v2/pokedex',requestOptions)
 const dataJson= await data.json();
 console.log('data',dataJson);
 res.status(200).json(dataJson)
 
};

exports.get1Pokemon= async (req, res) => {
 
  const requestOptions ={
    method:'GET'
  }
 const data= await fetch('https://pokeapi.co/api/v2/pokedex/'+req.params.id,requestOptions)
 const dataJson= await data.json();
 console.log('data',dataJson);
 res.status(200).json(dataJson)
 
 
 
};


