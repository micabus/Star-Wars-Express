const axios = require("axios"); 

const getStarships = (req, res) => {
    return res.send("Hola, aca estan las naves"); 
}; 

const getCantidad = (req, res) => {
    const { cantidad } = req.query; 
    if(cantidad){ // enviar la cantidad que me pidieron
        try {
            axios("https://swapi.dev/api/starships")
            .then((respuesta) => {
                const aux = respuesta.data.results.slice(0, cantidad);
                return res.json({msg: "Okey", info: aux}); 
            })
        } catch (error) {
             console.log(error)
        }
    } else {      // enviar todas las que lleguen de la api
        try {
            axios("https://swapi.dev/api/starships")
            .then(respuesta => res.json({msg: "Okey", info: respuesta.data.results})
            ); 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = { getStarships, getCantidad };