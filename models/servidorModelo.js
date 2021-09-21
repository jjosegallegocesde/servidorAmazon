const express = require('express');
const { conectarBD } = require('../database/conexion.js')

class SevidorModelo {


    constructor() {

        this.app = express();
        this.levantarBD();
        this.llamarRutas();


    }

    levantarSevidor() {

        this.app.listen(process.env.PUERTO, function () {
            console.log("servidor encendido " + process.env.PUERTO);
        });

    }

    levantarBD() {
        conectarBD();
    }

    llamarRutas() {

        this.app.get('/facturas', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });

        this.app.post('/facturas/nuevo', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });

        this.app.put('/facturas/cambiar', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });

        this.app.delete('/facturas/borrar', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });

    }





}

module.exports = SevidorModelo;