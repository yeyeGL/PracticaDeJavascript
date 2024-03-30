//Callbacks

function sumar(numero1, numero2, callback) {
    console.log('Esto es lo 1')
    setTimeout( ()=> {
        console.log('Esto es lo 2')
        if (typeof numero1 != 'number' || typeof numero2 != 'number') {
            return callback(new Error('Algun argumento esta incorrecto'))
        }
        
        callback(null, numero1 + numero2)
        console.log('Esto es lo 4')
    }, 2000)
}
console.log('Esto es lo 5')
sumar(4, 3,  (error, respuesta)=> {
    if (error) {
        console.log(error);
        console.log('Esto es lo 6')
    } else {
        console.log(respuesta)
        console.log('Esto es lo 7')
    }

})

//Promesas



function sumar(numero1, numero2) {

    return new Promise((resolve, reject)=> {
        
        setTimeout(()=>{
            if (typeof numero1 != 'number' || typeof numero2 != 'number') {
                reject(new Error('Ambos debes ser numeros'))
            } else {
                resolve(numero1 + numero2)
            }
        },3000)
       
    })

}



sumar(5, 3)
    .then( (respuesta)=> {
        console.log(respuesta)
    })
    .catch((error) =>{
        console.error(error)
    })





//Async Await


async function sumar(numero1, numero2) {
    if (typeof numero1 != 'number' || typeof numero2 != 'number') {

        throw new Error('Algunos de los argumentos no es un numero')
    }
    return numero1 + numero2
}

async function manejoE(){
    try {
        let resultado = await sumar(26,24)
        console.log(resultado)
        
    } catch (error) {
        console.log(error.message)
        
    }
}

manejoE()