var { Router } = require ("express");

var starRouter = Router(); 

const { getStarships, getCantidad } = require("../services/starshipsService"); 


starRouter.get("/", getStarships );

starRouter.get("/getAll", getCantidad);//OBTENER LAS NAVES ----> PARAMS/CANTIDAD DE NAVES

starRouter.get("/name");//BUSCAR POR NOMBRE UNA NAVE ----> QUERY

starRouter.get("/filter");//RUTA FILTRO POR CANTIDAD DE PASAJEROS ----QUERY


module.exports = starRouter; 