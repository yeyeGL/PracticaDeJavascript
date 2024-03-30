let socket = new WebSocket('ws://localhost:8080');

let mensajecapturado = document.getElementById('mensajeingresado');
let botonEnviar = document.getElementById('botonenviar');

function mostrarmensajes(contenido) {
    let contenedorMensajes = document.getElementById('mensajesdechat');
    let elementomensaje = document.createElement('p')
    elementomensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementomensaje)
}


botonEnviar.onclick = function () {
    let mensaje = mensajecapturado.value;
    mostrarmensajes(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function (event) {
    let mensaje = event.data;
    mostrarmensajes(mensaje);
}