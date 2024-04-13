/*
let vector = [];
// Se ejecuta 10 veces
for (let i = 0; i < 10; i++) {
    let random = Math.random();
    random = random * 10 + 1;
    random = Math.floor(random);
    vector[i] = random;
}

document.write(vector)


let vector1 = [1, 2, 3, 4, 5]

for (i = 0; i < vector1.length; i++) {
    document.write(vector1[i])
}




let vector2 = [1, 2, 3, 4, 5]
let suma = 0

for (i = 0; i < vector2.length; i++) {
    suma += vector2[i]
}

document.write(suma)




let vector3 = ['a', 'b', 'c', 'd', 'e']
let elemento = 'a'
let encontrado = false

function encontrar() {
    for (let i = 0; i < vector3.length; i++) {
        if (vector3[i] === elemento) {
            encontrado = true
            break
        }

    }
    if (encontrado) {
        document.write('El elemento se encuentra en el vector')
    } else {
        document.write('El elemento no escuentra en el vector')
    }
}

encontrar()



let vector4 = [1, 2, 3, 4, 5]

let vectorFiltrado = vector4.filter(numero => numero >= 2)
document.write(vectorFiltrado)



for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        document.write('par:,',i)
        document.write('<br>')
    }else{
        document.write('impar',i)
        
    }
}


let nronotas = parseInt(prompt('Ingrese el numero de notas a calcular'))
let suma = 0
for (let i = 0; i < nronotas; i++) {
    let notas = parseInt(prompt('Ingrese nota '))
    suma = suma + notas
}
promedio = suma / nronotas
document.write(promedio)

*/





