//Exportando funcionalidad

module.exports = {
    //Action methods
    index: (req, res) =>{
    res.render("index");
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