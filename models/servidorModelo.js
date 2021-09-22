const express = require('express');
const { conectarBD } = require('../database/conexion.js')
const FacturaModelo = require("../models/facturaModelo.js")

class SevidorModelo {


    constructor() {

        this.app = express();
        this.levantarBD();
        this.auxiliares();
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

    auxiliares(){
        this.app.use(express.json())
    }


    llamarRutas() {

        this.app.get('/facturas', function (req, res) {
            res.send('Buenas tardes Juan Jose');
        });

        this.app.post('/facturas/nuevo', async function (req, res) {

            let datosFactura=req.body;
            
            try{

                let factura=new FacturaModelo(datosFactura);
                await factura.save();
                res.status(200).json({
                    respuesta:"exito",
                    datos:factura
                })



            }catch(error){

                res.status(400).json({
                    respuesta:"error",
                    datos:error
                })


            }
            
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