
function obtenerDatos(){
    return fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        console.log(datos)
    })
    .catch(function(error){
        console.error(error)
    })
}
obtenerDatos();
console.log('El codigo sigue')


async function obtenerDatos() {
    let respuesta = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    let datos = await respuesta.json()

    console.log(datos)
        
}
obtenerDatos();
console.log('El codigo sigue')


async function ObtenerD(){
    console.log('Este codigo va primero')
    let respuestaGasolina = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    let datosGasolina = await respuestaGasolina.json();
    console.log('Este codigo va en el medio')
    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD')
    let datosDolar = await respuestaDolar.json();


    console.log(datosGasolina,datosDolar)
    console.log('Este codigo va de ultimo')
}
ObtenerD()