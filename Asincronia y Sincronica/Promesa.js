
let promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let r = false;
        if (r) {
            reject('La promesa no se ha cumplido')
        } else {
            resolve('La promesa se ha cumplido')
        }

    })
});

promesa.then(function (resultado) {
    console.log(resultado)
}).catch(function (error) {
    console.log(error);
})


let promesa1 = new Promise(function(resolve,reject){
    setTimeout(resolve,5000,'Saludos a todos')
})
let promesa2 = new Promise(function(resolve,reject){
    setTimeout(resolve,8000,'De nuevo todos')
})

Promise.all([promesa1,promesa2]).then(function(valores){
    console.log(valores[0]+','+valores[1])
})
console.log('El codigo sigue su curso')


//Ejemplo de chatGPT
function ObtenerUsuarios() {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = function () {
            if (xhr.status === 200) { 
                try {
                    resolve(JSON.parse(xhr.responseText));
                } catch (error) { 
                    reject(`Error parsing JSON response: ${error.message}`);
                }
            } else {
                reject(`Request failed with status: ${xhr.status}`);
            }
        };
        xhr.onerror = function (error) { 
            reject(`Network error: ${error.message}`);
        };
        xhr.send();
    });
}

ObtenerUsuarios()
    .then(function (usuarios) {
        console.log(usuarios)
    })
    .catch(function (error) {
        console.log(error);
    })
