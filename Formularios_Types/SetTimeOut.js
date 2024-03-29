let segundos;
let elementoalarma;
let audioalarma;



function obtenerSegundos() {
    segundos = document.getElementById('Tiempoelegido').value;
}

function ComenzarTiempo() {
    elementoalarma = document.getElementById('textoalarma');
    setTimeout(TiempoFinalizado, segundos * 1000);
}


function TiempoFinalizado() {

    audioalarma = document.getElementById('AudioAlarma');
  
    elementoalarma.style.color = 'green';
    audioalarma.play();
}

function ComenzarReloj() {
    setInterval(tictac, 1000)
}

function tictac() {
    let tiempoactual = new Date();
    let hora = String(tiempoactual.getHours()).padStart(2,'0');
    let minutos = String(tiempoactual.getMinutes()).padStart(2,'0');
    let segundoss = String(tiempoactual.getSeconds()).padStart(2,'0');
    let textoenpantalla = hora + ':' + minutos + ':' + segundoss;
    
    textoalarma.textContent = textoenpantalla
}

document.getElementById('Tiempoelegido').addEventListener('change', obtenerSegundos);

