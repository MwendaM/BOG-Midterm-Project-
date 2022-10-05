import fetch from "node-fetch";

let baseUrl = "https://pokeapi.co/api/v2/pokemon/"



fetch (baseUrl + 132)
 .then((resp) => resp.json()
 .then((data) => parseData(data)));

//  function data_storage(data) {
//     let storage = {
//         "name": data.name, 
//         "moves": data.moves

//     }
//     console.log(storage)
// }



function parseData(data){
    const info = {
        height: 0, 
        weight: 0, 
        hp: 0, 
        attack: 0, 
        defense: 0, 
        specialAttack: 0, 
        specialDefense: 0, 
        speed: 0
    }
       console.log(data)
       console.log(data.name)
       console.log(info['height'] = data.height)
       console.log(info['weight'] = data.weight)
       console.log(info['attack'] = data.base_stat)
       

    
}


//  Learn how a map works
// Learn how dictionares work
// Get better with API, async coding in general