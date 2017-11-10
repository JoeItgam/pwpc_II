//Exportando md5
var md5 = require('md5');

module.exports = {
    newest: function () {
        //Obteniendo un arreglo con los comentarios mas populares
        var comments = [
            {
                image_id: 1,
                email: "joe.itgam@gmail.com",
                name: "Joe",
                gravatar: md5("joe.itgam@gmail.com"),
                comment: "Muy buena imagen",
                timestamp: Date.now()
            },
            {
                image_id: 1,
                email: "ivan.rivalcoba@gmail.com",
                name: "Ivan",
                gravatar: md5("ivan.rivalcoba@gmail.com"),
                comment: "ILY HTML",
                timestamp: Date.now()
            }
        ];
        return comments;
    }
};