// import fetch from "node-fetch";

// let baseUrl = "https://pokeapi.co/api/v2/pokemon/"



// fetch (baseUrl + 132)
//  .then((resp) => resp.json()
//  .then((data) => parseData(data)));

// //  function data_storage(data) {
// //     let storage = {
// //         "name": data.name, 
// //         "moves": data.moves

// //     }
// //     console.log(storage)
// // }



// function parseData(data){
//     const info = {
//         height: 0, 
//         weight: 0, 
//         hp: 0, 
//         attack: 0, 
//         defense: 0, 
//         specialAttack: 0, 
//         specialDefense: 0, 
//         speed: 0
//     }
//        console.log(data)
//        console.log(data.name)
//        console.log(info['height'] = data.height)
//        console.log(info['weight'] = data.weight)
//        console.log(info['attack'] = data.base_stat)
       

    
// }


//  Learn how a map works
// Learn how dictionares work
// Get better with API, async coding in general


  const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();
 