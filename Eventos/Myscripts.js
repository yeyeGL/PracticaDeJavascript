let boton = document.getElementById('Boton1');
let div1 = document.getElementById('Div1')
let enlace1 = document.getElementById('Enlace1')
/*
function mostrarmensaje(){
    alert('Boton presionado')
}


function mensaje2(){
    alert('Soy un mouserover')
}




//Solo se puede uno por que queda desabilitado el click

boton.addEventListener('mouseover',mensaje2)
boton.addEventListener('click',mostrarmensaje)
*/ 


function mostrarMensaje(event){
    alert(event.target);
    
}

function mostrarMensaje1(event){
    alert(event.currentTarget)
}

function bloqueo(event){
    event.preventDefault();
    alert('Enlace desabilitado')
}

enlace1.addEventListener('click',bloqueo)
div1.addEventListener('click',mostrarMensaje1)
boton.addEventListener('click',mostrarMensaje)