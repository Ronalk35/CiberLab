titulo()


function titulo(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);

    document.getElementById('h1baner',).style.color = 'rgb('+r+','+g+','+b+')';
    document.getElementById('pfooter',).style.color = 'rgb('+r+','+g+','+b+')';
    setTimeout('titulo()',1000);
}