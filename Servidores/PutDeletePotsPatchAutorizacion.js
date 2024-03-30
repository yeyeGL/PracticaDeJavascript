
/*
fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'Nuevo titulo',
        body:'Nueva Descripcion',
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error=> console.log(error))



fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'DELETE',
  
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error=> console.log(error))



fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'PATCH',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'Gas nea',
       
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error=> console.log(error))



let user = 'User1';
let password = '1234'
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Autorization': 'Basic' + btoa(user + ':' + password),
        'Content-Type': 'application/json'
    }

})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.log(error))




let token = 'Mitoken';

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials: 'include',
    cache: 'only-if-cached',
    redirect:'follow',
    headers: {
        'Autorization': 'Bearer'+ token,
        'Content-Type': 'application/json'
    }

})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.log(error))



async function CrearPost(titulo, contendio) {

    try {

        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titulo,
                body: contendio,
                userId: 1,
            }),
        })
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud' + respuesta.statusText);
        }

        let data = await (respuesta.json());
        console.log('Yeahhhhhhhhh' , data)



    } catch (error) {
        console.error('Algo salio mal ', error);
    }

}

CrearPost('Mi titulo de ejemplo','Contenido de ejemplo')

*/