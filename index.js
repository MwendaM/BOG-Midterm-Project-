import fetch from "node-fetch";



fetch ('https://pokeapi.co/api/v2/pokemon/1')
 .then((resp) => resp.json()
 .then((data) => console.log(data)));

