var axios = require("axios"); 

let base_datos = [{ name: "Mica", specie: "Human" }]; 
let id = 0; 

const get =  (req, res) => {
    return res.send("Hola, aca estan los persojanes"); 
}; 

const obtenerTodos = async (req, res, next) => {
    //return res.send("Funciona");
    // pedido a la api

try {
    const respuesta = await axios.get("https://swapi.dev/api/people");
    
    const respuestaFinal = [...respuesta.data.results, ...base_datos];
    res.json(respuestaFinal); 
 } catch(error) {
        next(error); 
 }
};

const postPersonaje = async (req, res) => {
        const { personaje } = req.body; 

        if(!personaje) 
           return res.state(400).json({err: "No enviaste el 'personaje' por body"}); 
        if (!personaje.name) 
           return res.state(400).json({err: "El personaje no tiene nombre"}); 
        // validacion para saber si ya existe en la base de datos
        const busqueda = base_datos.find((pj) => pj.name === personaje.name); 
        if(busqueda) return res.send("Ya existe este personaje"); 
        personaje.id = id++; 
        base_datos.push(personaje);
       
        return res.status(200).json({msg: "Recibido", pj: personaje}) 
};

const editPersonaje = async (req, res) => {
    const { id, name, specie } = req.body
    
    if(!id || !name) return res.status(400).json({err: "Falta el ID o el Name"}); 
    if(specie)
      return res.status(400).json({err: "No se puede editar la especie"}); 
    
    const busqueda = base_datos.find((personajes) => personajes.id === id);
    if(!busqueda) return res.status(400).json({err: "No se encontro el personaje que intentas modificar"});
    
    busqueda.name = name; // comunicacion con la base de datos
    return res.send({msg: "Se modifico el personaje exitosamente", data: busqueda}); 
}; 

const deletePersonaje = async (req, res) => {

};

module.exports = { get, obtenerTodos, postPersonaje, editPersonaje, deletePersonaje }; 
