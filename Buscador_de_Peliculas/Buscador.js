let Selector = document.getElementById('Miselector');
let Busqueda = document.getElementById('miinput');
let boton = document.getElementById('miboton');
let lista = document.getElementById('listado');
let archivo = 'peliculas.json';


Selector.addEventListener('change', cambiararchivo);
Selector.addEventListener('Cambiomodo', mensajemodo);
Busqueda.addEventListener('keydown', verificarinput);
boton.addEventListener('click', buscar);


function cambiararchivo() {
    archivo = Selector.value
    let evento = new CustomEvent('Cambiomodo');
    Selector.dispatchEvent(evento);
}

function mensajemodo() {
    alert('El archivo de busqueda ahora es "No es necesaio este mensaje pero bueno para cambiar el ambiente de esta vuelta":' + Selector.value)
}

function verificarinput(evento) {

    if ((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode != 32 && evento.keyCode != 8) {
        evento.preventDefault();
    }

}

function buscar() {
    lista.innerHTML = '';
    fetch(archivo)
        .then(respuesta => respuesta.json())
        .then(function (salida) {
            for (let i of salida.data) {
                if (i.nombre.startsWith(Busqueda.value.toUpperCase())) {
                    let p = document.createElement('p');
                    p.id = i.nombre;
                    p.innerHTML = i.sinopsis;
                    p.style.display = 'none';

                    let li = document.createElement('li');
                    li.innerHTML = i.nombre;
                    li.addEventListener('mouseover', function () {
                        let p = document.getElementById(i.nombre)
                        p.style.display = 'block';

                    })
                    li.addEventListener('mouseout',function(){
                        let p = document.getElementById(i.nombre)
                        p.style.display = 'none';
                    })
                    li.appendChild(p)
                    lista.appendChild(li)
                }
            }
        })
        .catch(function(error){
            console.log(error)
        })
} 
