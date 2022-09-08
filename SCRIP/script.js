const alebrije = document.getElementById('alebrije');
const input_user = document.getElementById('input_user');
const input_password = document.getElementById('input_password');

const body = document.querySelector('body');

let anchoTotal = window.innerWidth;
let altoTotal = window.innerHeight;

let seguirPunteroMouse = true;

//Añadiendo eventos
body.addEventListener('mousemove',(m)=>{

    if( !seguirPunteroMouse ){
        return;
    }

    if( m.clientX < anchoTotal/2 ){ //Mirar a la izquierda
        alebrije.src = "img/2.png";
    }
    
    if( m.clientY < altoTotal/4 ){ //Mirar arriba
        alebrije.src = "img/5.png";
    }

    if( m.clientY > (3*altoTotal)/4 ){ //Mirar abajo
        alebrije.src = "img/4.png";
    }

    if( m.clientX > anchoTotal/2 ){
        alebrije.src = "img/3.png";
    }

});

input_user.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
    alebrije.src = "img/4.png";
});

input_user.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
});

input_password.addEventListener('focus',()=>{
    seguirPunteroMouse = false;
    alebrije.src = "img/1.png";
});

input_password.addEventListener('blur',()=>{
    seguirPunteroMouse = true;
});