let audio = document.getElementById('audio');
let listacanciones = document.getElementById('listaCanciones')


listacanciones.addEventListener('change', cambiarcancion);

function cambiarcancion() {
    let cancionelegida = listacanciones.value;
    audio.src = cancionelegida;
    audio.play()

    let evento = new CustomEvent('CambioDeCancion');
    audio.dispatchEvent(evento);

}

audio.addEventListener('CambioDeCancion', mostrar);

function mostrar() {
    console.log('Cancion actual : ' + listacanciones.value)
}

