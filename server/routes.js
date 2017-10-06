var express = require('express'),
    router = express.Router();

//Cargar los controladores

//Cargando controladores del modulo controladores
var homeController = require('../controllers/home'),
    imageController = require('../controllers/image');

module.exports = function (app) {
    //Agregando rutas a nuestro contenedor de rutas

    //Peticiones get
    //Redirecciona al index
    router.get('/', homeController.index);
    //redirecciona al index
    router.get('/index', homeController.index);
    //:imge_id Sirve para tomar decisiones en el action method
    router.get('/images/index/:image_id', imageController.index);

    //Peticiones post
    //Crear imagen
    router.post('/images/create', imageController.create);
    //Dar like a una imagen ya creada tomamos en cuenta el id
    router.post('/images/like/:image_id', imageController.like);
    //Comentar una imagen tomando en cuenta el id
    router.post('/images/comment/:image_id', imageController.comment);
    
    //Agregar el contenedor de rutras a nuestra app
    app.use(router);

    return app;
}