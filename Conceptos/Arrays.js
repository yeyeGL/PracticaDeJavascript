
let numeros = [];
numeros = [1,2,3,4,5,6,7,8];
document.write(numeros);
document.write('<br>');
document.write(numeros[0,3])
document.write('<br>');
numeros[1] = 23


let frutas = [];
frutas =['Manzana','Pera','Mago'];
document.write(frutas);
document.write('<br>');

//Metodos de los arrays

document.write(numeros.length);
document.write('<br>');
document.write(frutas.length);
document.write('<br>');

//Saber ultimo elemento

document.write(numeros[numeros.length-1]);
document.write('<br>');

//Arrays en tipo teto

document.write(numeros.toString());
document.write('<br>');

//Unir tipos de arrays

let letras = ['a','b','c','d'];
let numeros2 = [1,2,3];
document.write(letras.concat(numeros2))
document.write('<br>');

//Eliminar un elemento

numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar un elemento al final

numeros.push(45);
document.write(numeros)
document.write('<br>');

//Elimiar el primer elemento

numeros.shift();
document.write(numeros);
document.write('<br>');


//Insertar al inicio

numeros.unshift(56);
document.write(numeros)
document.write('<br>');


//Eliminar apartir de cualquier punto

numeros.splice(2,3);
document.write(numeros)
document.write('<br>');

//Como copiar un array

let cantidades = [100,200,300,400];
let copia = cantidades.slice(1,2);
document.write(copia);
document.write('<br>');


document.write(frutas.sort());
document.write('<br>');

let obejetos = ['carro','moto','tren','monopatin','barco']
document.write(obejetos.sort());
document.write('<br>');
document.write(obejetos.reverse());
document.write('<br>');

const autos = ['toyota','bmw','mclaren'];
document.write(autos);