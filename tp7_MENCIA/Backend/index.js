require('rootpath')();

const express = require('express'); 
const app = express();

const configuracion = require("config.json")
const personaDb = require("model/personaModel")
 
const controladorPersona = require("controller/personaController.js");
const controladorUsuario = require("controller/usuarioController.js");

app.use('/api', controladorPersona);
app.use('/api', controladorUsuario);

app.listen(configuracion.server.port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("servidor escuchando en el puerto "+ configuracion.server.port);
    }
});