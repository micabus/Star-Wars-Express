var express = require("express"); 
var cors = require("cors"); 
var morgan = require("morgan");
var peopleRouter = require("./routes/people")
var starRouter = require("./routes/starships")


//Configuracion del servidor 
var server = express()

//Configuracion de los Middlewares

server.use(express.json()) //para interpretar y dar formato Json(Body)
server.use(cors()); 
server.use(morgan("dev")); 
server.use("/", (req, res, next) => {
    console.log("Mi propio Middleware"); 
    next(); 
   }
);

server.use("/people", peopleRouter);
server.use("/starships", starRouter); 

server.get("/", (req, res) => {
    const obj = {
        msg: "Bienvenid@ al servidor Star Wars",
        rutas: {
            starships: "http://localhost:3001/starships",
            people: "http://localhost:3001/people"
        }
    };
    res.json(obj);
});
  


module.exports = server; 