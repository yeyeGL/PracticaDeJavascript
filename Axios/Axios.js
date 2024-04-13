function obtenerInfo() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (respuesta) {
            let lista = document.getElementById('listaInfo')
            for (let index = 0; index < respuesta.data.length; index++) {
                let elemento = document.createElement('ol')
                elemento.innerText = respuesta.data[index].userId;
                let elemento1 = document.createElement('ol')
                elemento1.innerText = respuesta.data[index].title;
                
                lista.appendChild(elemento);
                lista.appendChild(elemento1);
            }
        })
        .catch( (error) => {
            console.error(error) 
        })
        
}
