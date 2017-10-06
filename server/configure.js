//Cargando dependencias importantes de la app
var path = require('path'),
    exphdb = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');

//Cargando las rutas de la app
var routes = require('./routes');

module.exports = function(app){
    //Agregando los middlewares a la app
    app
        .use(morgan('dev'))
        
        //Solo acepta codificacion utf-8
        .use(bodyParser.urlencoded({'extended': true}))

        .use(bodyParser.json())

        .use(methodOverride())

        .use(cookieParser('algun-valor-secreto-aqui'))

        //Configurar las rutas de archivos estaticos
        .use('/public/',express.static(path.join(__dirname, '../public')));

    app = routes(app);

    //Si la aplicacion esta en modo de desarrollo se usara errorHandler
    if (app.get('env') == 'development') {
        app.use(errorHandler());
    }
    return app;
}