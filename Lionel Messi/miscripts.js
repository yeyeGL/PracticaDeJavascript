let foto = document.createElement("img");
foto.src = "Topolliyo.png";

function consulta() {
    let datosjson;
    fetch('resumen.json')
        .then(respuesta => respuesta.json())
        .then((salida) => {
            datosjson = salida;

            document.getElementById("Nombre")
            Nombre.textContent = salida.Nombre;

            document.getElementById("Posicion")
            Posicion.textContent = 'La posicion en la que juega es: ' + salida.Posicion;

            document.getElementById("Pais")
            Pais.textContent = 'El pais origen es: ' + salida.Pais;

            document.getElementById("Goles")
            Goles.textContent = 'Los goles totales en su carrera son : ' + salida.Goles;


            document.getElementById("Clubes_Que_Participo")
            Clubes_Que_Participo1.textContent = 'El club en el que pertenecio fue : ' + salida.Clubes_Que_Participo[0].Club+' '+salida.Clubes_Que_Participo[0].Anio;

            document.getElementById("Clubes_Que_Participo")
            Clubes_Que_Participo2.textContent = 'El club en el que pertenecio fue ' + salida.Clubes_Que_Participo[1].Club+' '+salida.Clubes_Que_Participo[1].Anio;;

            document.getElementById("Año_Que_Inicio")
            Año_Que_Inicio.textContent = 'Inicio a jugar desde: ' + salida.Año_Que_Inicio;

            let imagen = document.getElementById("foto");
            imagen.appendChild(foto);



        })
        .catch(function(error){alert(error)});
        
}