
let datoss = {
    title:'Nuevo pots',
    body:'Mi contenido'
}


axios.get('https://jsonplaceholder.typicode.com/posts',datos)
.then(respuesta=> console.log('El post fue creado correctamente',respuesta.data))
.catch(error => console.log('Error al puclicar',error))



let datos = {
    title: 'Nuevo pots',
    body: 'Mi contenido'
}

let mitoken1 = 'Este es mi token';

axios.interceptors.request.use(
    (config)=>{
        config.headers.autorization = 'Bearer $(mitoken1)'
        return config;
    },(error)=>{
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (respuesta)=>{
        respuesta.data.customfiel = 'Nuevo Campo'
        return respuesta;
    },(error=>{
        return Promise.reject(error)
    })
)




let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');



axios.all([pedido1,pedido2,pedido3])
    .then(axios.spred((respuesta1,respuesta2,respuesta3)=>{
        console.log(respuesta1,data)
        console.log(respuesta2,data)
        console.log(respuesta3,data)

    }))
    .catch(error=>{
        console.error(error)

    })

