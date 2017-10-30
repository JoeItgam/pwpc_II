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
    //Conficurar el motor de plantillas
    //Handlebars Template Engine
    //1.- Cargar y configurar el motor de plantillas en la app 
    var mainLayout = app.get('depmode') === 'local' ? 'main-local' : 'main';
    app.engine('.hbs', exphdb.create({
        defaultLayout : 'main', //Plantilla por defecto
        extname : '.hbs', //Extencion de las vista
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: [path.join(app.get('views'),'partials')],
        helpers:{
            timeago : function(timestamp){
                return moment(timestamp).startOf('minutes').fromNow();
            }
        }
    }).engine);

    //Establecer a handlebars como el motor de plantillas de trabajo
    app.set('view engine', '.hbs')

    //Agregando los middlewares a la app
    app
        .use(morgan('dev'))
        
        //Solo acepta codificacion utf-8
        .use(bodyParser.urlencoded({'extended': true}))

        .use(bodyParser.json())

        .use(methodOverride())

        .use(cookieParser('algun-valor-secreto-aqui'))

        //Habilitando a la aplicacion para recibir archivos desde formularios
        //mediante la encriptacion multipar/form-data

        app.use(multer({
            dest: path.join(__dirname, '../public/upload/temp')
        }).any());

        //Configurar las rutas de archivos estaticos
        app.use('/public/',express.static(path.join(__dirname, '../public')));

    app = routes(app);

    //Si la aplicacion esta en modo de desarrollo se usara errorHandler
    if (app.get('env') == 'development') {
        app.use(errorHandler());
    }
    return app;
}