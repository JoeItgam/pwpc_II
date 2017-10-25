var md5 = require('md5');

//Exportando funcionalidad

module.exports = {
    //Action methods
    index: (req, res) =>{

        var viewModel = {
            image: {
                uniqueId : 1,
                title : "sample image simple",
                description : "Awesome description",
                filename : "U5.jpg",
                views : Math.floor(Math.random()*100),
                likes : Math.floor(Math.random()*50),
                timestamp : Date.now()
            },
            comments: [
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
            ]
        }
    res.render("image", viewModel);
    },

    create: (req, res) =>{
        res.send('Se accede al controlador image y se ejecuta el action methos \"create\"');
    },

    like: (req, res) =>{
        res.send(`Se accede al controlador image y se ejecuta la accion con like el siguiente parametro;
        ${req.params.image_id}`)
    },
    
    comment: (req, res) =>{
        res.send(`Se accede al controlador image y se ejecuta el action method comment con el siguiente parametro:
        ${req.params.image_id}`)
    }
}