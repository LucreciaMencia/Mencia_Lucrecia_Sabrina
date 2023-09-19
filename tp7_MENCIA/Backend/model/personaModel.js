let personaDb = {};
const mysql =  require('mysql');

const configuracion = require("config.json")

//conectarse a la base de datos
let conection = mysql.createConnection(configuracion.database);
conection.connect((err) => {
    if (err){
        console.log(err);
    } else {
        console.log("base de datos conectada")
    }
})

//CRUD
//GET
personaDb.getPersona = function (funCallback){
    const consulta = 'select * from persona';

    conection.query(consulta, function(err, rows) {
        if(err){
            funCallback(err);
            return;
        }
        funCallback(undefined, rows);
    })
};

personaDb.getByApellido = function (apellido, funCallback) {
    conection.query('SELECT * FROM persona WHERE apellido = ?', apellido, (err, result) => {
        if (err) {
            funCallback({
                menssage: "Ha ocurrido algun error inesperado al buscar la persona",
                detail: err
            });
        } else if (result.length == 0) { //consulta no impacta en nada dentro de la BD
            funCallback(undefined, {
                menssage: `no se encontro una persona con el apellido: ${apellido}`,
                detail: result
            });
        } else {

            funCallback(undefined, {
                menssage: `los datos de la persona con el apellido ${apellido} son:`,
                detail: result
            });
        }
    });

}

personaDb.getByUser = function (nickname, funCallback) {
    conection.query('SELECT * FROM usuario WHERE nickname = ?', nickname, (err, result) => {
        if (err) {
            funCallback({
                menssage: "Ha ocurrido algun error inesperado al buscar la persona",
                detail: err
            });
        } else if (result.length == 0) { //consulta no impacta en nada dentro de la BD
            funCallback(undefined, {
                menssage: `no se encontro una persona con el nickname: ${nickname}`,
                detail: result
            });
        } else {

            funCallback(undefined, {
                menssage: `los datos de la persona con el nickname ${nickname} son:`,
                detail: result
            });
        }
    });

}

//POST
personaDb.createPersona = function(personaQueRecibo, funCallback){
   
    let consulta = 'insert into persona (dni,nombre,apellido) values (?,?,?)';
    parametros = [personaQueRecibo.dni, personaQueRecibo.nombre, personaQueRecibo.apellido];
    conection.query(consulta, parametros, (err, rows)=>{
        if(err){
            funCallback({
                message: "Surgio un error durante la consulta a la base de datos",
                detail: err
            });
        }else{
            funCallback(undefined, {
                message: "Se ha creado la persona "+personaQueRecibo.nombre+" "+personaQueRecibo.apellido,
                detail: rows
            });
        }
    });
};

//PUT
personaDb.modificarPersona = function(datos, id, funCallback) {
    params = [ datos.nombre, datos.apellido, id];
    consulta = "UPDATE persona SET nombre = ?, apellido = ? WHERE dni = ?";

    conection.query(consulta, params, (err, result) => {

        if (err) {
            if (err.code == "ER_DUP_ENTRY") { //dni que ya se ha registrado
                funCallback({
                    message: "Los datos insertados ya perteneces a una persona en la base de datos",
                    detail: err
                });
            } else { //cuando hay otro error
                funCallback({
                    message: "Se requiere analizar el error",
                    detail: err
                });
            }
        } else if (result.affectedRows == 0) { //cuando no encontramos a la persona para modificar
            funCallback({
                message: "Esa persona no se encuentra registrada en la base de datos",
                detail: result
            });
        } else {
            funCallback(undefined, {
                message: `Has modificado a  ${datos.nombre} ${datos.apellido}`,
                detail: result
            });
        }
    });
}
  
//DELETE
personaDb.borrar = function (id, funCallback) {
    consulta = "DELETE FROM persona WHERE dni = ?";
    conection.query(consulta, id, (err, result) => {
        if (err) {
            funCallback({ menssage: err.code, detail: err });
        } else {
            if (result.affectedRows == 0) {
                funCallback(undefined,
                    {
                        message: "no se encontro una persona con el dni ingresado",
                        detail: result
                    });
            } else {
                funCallback(undefined, { message: "Persona eliminada", detail: result });
            }
        }
    });
}


module.exports = personaDb;