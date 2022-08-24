var { Router } = require ("express");

var peopleRouter = Router(); 

const { get, obtenerTodos, postPersonaje, editPersonaje, deletePersonaje } = require("../services/peopleService");

peopleRouter.get("/", get);

peopleRouter.get("/all", obtenerTodos); // GET PARA OBTENER TODOS LOS PERSONAJES ( API + BASE DE DATOS)


peopleRouter.post("/create", postPersonaje);//POST  PARA CREAR NUESTRO PROPIO PERSONAJE 

peopleRouter.put("/edit", editPersonaje); //PUT PARA EDITAR NUESTRO PERSONAJE 

peopleRouter.delete("/deleteOne", deletePersonaje);//DELETE PARA BORRAR UN PERSONAJE DE NUESTRA BASE DE DATOS




module.exports = peopleRouter; 