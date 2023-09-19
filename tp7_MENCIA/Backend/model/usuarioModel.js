let usuarioDb = {};
const mysql = require('mysql');

const configuracion = require("config.json")

//conectarse a la base de datos
let conection = mysql.createConnection(configuracion.database);
conection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("base de datos conectada")
    }
})

//CRUD
//GET
usuarioDb.getUsuario = function (funCallback) {
    const consulta = 'select * from usuario';

    conection.query(consulta, function (err, rows) {
        if (err) {
            funCallback(err);
            return;
        }
        funCallback(rows);
    })
};

usuarioDb.getByMail = function (mail, funCallback) {
    conection.query('SELECT * FROM usuario WHERE mail = ?', mail, (err, result) => {
        if (err) {
            funCallback({
                menssage: "Ha ocurrido algun error inesperado al buscar al usuario",
                detail: err
            });
        } else if (result.length == 0) { //consulta no impacta en nada dentro de la BD
            funCallback(undefined, {
                menssage: `no se encontro una persona con el mail: ${mail}`,
                detail: result
            });
        } else {

            funCallback(undefined, {
                menssage: `los datos del usuario con el mail ${mail} son:`,
                detail: result
            });
        }
    });

}

//POST
usuarioDb.createUsuario = function (usuarioQueRecibo, funCallback) {

    let consulta = 'insert into usuario (mail,nickname,password,persona) values (?,?,?,?)';
    parametros = [usuarioQueRecibo.mail, usuarioQueRecibo.nickname, usuarioQueRecibo.password, usuarioQueRecibo.persona];
    conection.query(consulta, parametros, (err, rows) => {
        if (err) {
            funCallback({
                message: "Surgio un error durante la consulta a la base de datos",
                detail: err
            });
        } else {
            funCallback(undefined, {
                message: "Se ha creado el usuario " + usuarioQueRecibo.nickname,
                detail: rows
            });
        }
    });
};

//PUT
usuarioDb.modificarUsuario = function (datos, id, funCallback) {
    params = [datos.nickname, datos.password, id];
    consulta = "UPDATE usuario SET nickname = ?, password = ? WHERE mail = ?";

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
                message: `Has modificado a  ${datos.nickname} ${datos.mail}`,
                detail: result
            });
        }
    });
}

//DELETE
usuarioDb.borrar = function (id, funCallback) {
    consulta = "DELETE FROM usuario WHERE mail = ?";
    conection.query(consulta, id, (err, result) => {
        if (err) {
            funCallback({ menssage: err.code, detail: err });
        } else {
            if (result.affectedRows == 0) {
                funCallback(undefined,
                    {
                        message: "no se encontro una usuario con el dni ingresado",
                        detail: result
                    });
            } else {
                funCallback(undefined, { message: "Usuario eliminado", detail: result });
            }
        }
    });
}

module.exports = usuarioDb;