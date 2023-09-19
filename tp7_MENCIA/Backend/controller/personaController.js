require('rootpath')();

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const personaDb = require("model/personaModel")



app.get("/persona", (req, res) => {
    if (req.query.apellido) {
        console.log('Vamos a buscar por apellido.');
        const apellidoBuscado = req.query.apellido;
        personaDb.getByApellido(apellidoBuscado, (err, resultado) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(resultado);
            }
        });
    }else if(req.query.nickname){
        console.log('Vamos a buscar por nickname.');
        const nicknameBuscado = req.query.nickname;
        personaDb.getByUser(nicknameBuscado, (err,resultado)=>{
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(resultado);
            }
        }) 
    } else {
        personaDb.getPersona((err, resultado) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(resultado);
            }
        });
    }
})

app.post('/persona', (req, res) => {
    let crearUnaPersona = req.body;

    personaDb.createPersona(crearUnaPersona, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(resultado);
        }
    })

})

app.put("/persona/:dni", (req, res) => {
    let persona = req.body; //aquellos datos que quiero reemplazar, modificar, etc 
    let id = req.params.dni; //para identificarlo dentro de la base de datos
    personaDb.modificarPersona(persona, id, (err, resultado) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(resultado);
        }
    });
})

app.delete('/persona/:dni', (req, res) => {
    let idPersonAEliminar = req.params.dni;
    personaDb.borrar(idPersonAEliminar, (err, resultado) => {
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

