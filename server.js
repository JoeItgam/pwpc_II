//Cargando express
const express = require("express"),
//Cargando path
      path = require("path"),
//cargar configurador
      config = require("./server/configure");

//Creando instancia de express
var app = express();

//Estableciendo variables de entorno
//Informacion que va estra en toda nuestra aplicacion se ocupa set

//Puerto
app.set('port', process.env.PORT || 3000);
//Direccion ip
app.set('ip', process.env.IP || "0.0.0.0");
//Estableciendo un modo de dependencias locales o de un CDN(Content Delivery Network)
app.set('depmode', process.env.DEPMODE || 'cdn');

//Configuracion especial
app.set('views', path.join(__dirname + '/views'));

//Aplicando configuraciones generales
app = config(app);

//Consultar variables de entorno de la app
const IP = app.get('ip');
const PORT = app.get('port')

//Verificando si hay conexion a internet
require('dns').resolve('www.google.com', function (err) {
    if (err) {
        console.log("> NO INTERNET CONNECTION ... ");
        app.set('depmode', 'local');
    }
    else{
        console.log(">INTERNET CONNECTION DETECTED ...")
        app.set('depmode', 'cdn');
    }
});

//Iniciando el servidor
app.listen(PORT, IP, (err) => {
    if(err){
        console.log(`Hubo un error en server.js ln 32: ${err}`)
    }
    console.log(`>Server listening @ http://${IP}:${PORT}`);
});