//Cargando dependencias
var md5 = require('md5'),
    fs = require('fs'),
    path = require('path');

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
        //Creando la funcion que salva la imagen en disco
        var saveImage = ()=>{
            //Crear un diccionario de caracteres validos
            var dictionary = "qwertyuioasdfghjklñxc123456";
            //Ruta final de l aimgagen cargada en diccionario
            var imgUrl = "";
            //Seleccionando las 6 letras para el nombre de la imagen
            for (var index = 0; index < 6;  index++) {
                imgUrl += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
            }
            //Obteniendo la ruta del archivo cargado por el usuario
            var tempPath = req.files[0].path;
            //Aversiguar la extencion del archivo cargado
            var ext = path.extname(req.files[0].originalname).toLowerCase();
            //Crear la ruta del destino final de la imagen cargada
            var targetPath = path.resolve("./public/upload/" + imgUrl + ext);
            //Agregando filtro de extenciones
            if(ext == ".png" | ext == ".jpg" | ext == ".git" | ext == ".jpeg"){
                //La imagen tiene extencion ValidityState
                //Guardarla en la ruta final
                fs.rename(tempPath, targetPath, (err)=>{
                    //Hubo error al mover la imagen
                    if(err){
                        console.log(">Error al guardar la imagen");
                        throw err;
                    }else{
                        //No hubo error
                        res.redirect(`/images/index/${imgUrl}`);
                    }
                });
            }else{
                fs.unlink(tempPath, (err)=>{
                    if(err){
                        console.log(">Error al borrar archivo invalido..")
                        throw err;
                    }
                    //Se borro el archivo invalido
                    res.status(500).json({
                        error: "Solo se permite cargar archivos validos."
                    });
                });
            }  
        };
        //ejecutando la funcion de salvar
        saveImage();
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