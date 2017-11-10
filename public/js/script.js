//$()=> Cuando el documento este listo..!
$(()=>{
    //Variable que registra el estado del formulario en cuanto a visible u oculto
    var isHide = null;
    $("#post-comment").hide(()=>{
        isHide = true;
    });

    $("#btn-comment").on('click', ()=>{
        //Nulifica todo comportamiento pre asignado para el onclick de este boton
        event.preventDefault();

        if(isHide){
            $("#post-comment").show(()=>{
                isHide = false;
            });
        }else{
            $("#post-comment").hide(()=>{
            isHide = true;
            });
        }
    });

    //Peticion ajax para el incremento de 1 like sobre la imagen 
    $("#btn-like").on('click', ()=>{
        event.preventDefault();
        //Rescatando el metodo llamado "id" del boton like
        var imgId = $(this).data('id');
        $.post(`/images/like/${imgId}`).done((data)=>{
            $('.likes-count').text(data.like);
        });
    });
});