//Efecto Carrusel Banner Cabecera con Jquery
var lista = ['banner impresora.png','banner.jpg','banner m.jpg','banner_100.png'];
var i = 0;
var estado;

function carrusel(){
    document.getElementById('imgcab').src = '../imagenes/' + lista[i];
    i++;
    if(i >= lista.length) i=0;
    estado = setTimeout("carrusel()",1000);
}
function pausa(){
    if(estado !=null){
        clearTimeout(estado);
        estado = null;
    }
}
function avanza(){
    if(estado == null)
    carrusel();
}
$(document).ready(function(){
    carrusel();
})


//Efecto redes sociales con Jquery
$(document).ready(function(){
    $("img").hover(cambiar, restaurar);
  });
  function cambiar(e){
    $(this).attr("src", $(this).attr("src").replace("f1.png", "f2.png") );
    $(this).attr("src", $(this).attr("src").replace("t1.png", "t2.png") );
    $(this).attr("src", $(this).attr("src").replace("y1.png", "y2.png") );
  } 
  function restaurar(e){
    $(this).attr("src", $(this).attr("src").replace("f2.png", "f1.png") );
    $(this).attr("src", $(this).attr("src").replace("t2.png", "t1.png") );
    $(this).attr("src", $(this).attr("src").replace("y2.png", "y1.png") );
  }


  //Efecto mostrar producto acercando
$('.imgblok').mouseover(function(){
    $(this).css("transform","scale(1.1)");
    $(this).css("transition","all 0.5s");
})
$('.imgblok').mouseout(function(){
    $(this).css("transform","scale(1)");
    $(this).css("transition","all 0.5s");
})
$('.blok').mouseover(function(){
    $(this).children('img').css("height","0px");
    $(this).children('img').css("transition","all 0.5s");

    $(this).children('p').css("color","#FFFFFF");
    $(this).children('h3').css("color","#FFFFFF");
})
$('.blok').mouseout(function(){
    $(this).children('img').css("height","240px");
    $(this).children('img').css("transition","all 0.5s");

    $(this).children('p').css("color","#000000");
    $(this).children('h3').css("color","#000000");  
})
$('.blok').mouseover(function(){
    $(this).css('background', 'black');
})
$('.blok').mouseout(function(){
    $(this).css('background', 'white');
})