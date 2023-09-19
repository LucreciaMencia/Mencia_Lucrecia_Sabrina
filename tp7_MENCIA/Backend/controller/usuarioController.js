require('rootpath')();

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usuarioDb = require("model/usuarioModel")



app.get("/usuario", (req, res) => {
    if (req.query.mail) {
        console.log('Vamos a buscar por mail.');
        const mailBuscado = req.query.mail;
        usuarioDb.getByMail(mailBuscado, (err, resultado) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(resultado);
            }
        });
    } else {
        usuarioDb.getUsuario((err, resultado) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(resultado);
            }
        });
    }
})

app.post('/usuario', (req, res) => {
    let crearUsuario = req.body;

    usuarioDb.createUsuario(crearUsuario, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(resultado);
        }
    })

})

app.put('/usuario/:mail', (req, res) => {
    let usuario = req.body; //aquellos datos que quiero reemplazar, modificar, etc 
    let id = req.params.mail; //para identificarlo dentro de la base de datos
    usuarioDb.modificarUsuario(usuario, id, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });
})

app.delete('/usuario/:mail', (req, res) => {
    let idUsuarioAEliminar = req.params.mail;
    usuarioDb.borrar(idUsuarioAEliminar, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (resultado.detail.affectedRows == 0) {
                res.status(404).send(resultado.message);
            } else {
                res.send(resultado.message);
            }
        }
    });
})


module.exports = app;
