//Cargando modulos:
var statsHelper = require('./statsHelper'),
    imagesHelper = require('./imagesHelper'),
    commentsHelper = require('./commentsHelper');

module.exports = function (vm, cb) {
    vm.sidebar = {
        stats : statsHelper(),
        popular : imagesHelper.popular(),
        comments : commentsHelper.newest()
    };
    //Mandamos a ejecutar el callback pasandole como parametro el viewModel
    cb(vm);
};