/*
let precio = parseInt(prompt('Ingrese el precio del producto'))
const iva = 21

let preciototal = precio + precio*21/100

alert(preciototal)


let lado = parseInt(prompt('Ingrese el valor de el lado'))

let area = lado*lado
let perimetro = 4*lado

document.write(lado)
document.write('<br>')
document.write(area)
document.write('<br>')
document.write(perimetro)


let resulatdo = 0

let n1 = parseInt(prompt('Ingrese numero 1'))
let n2 = parseInt(prompt('Ingrese numero 2'))
let n3 = parseInt(prompt('Ingrese numero 3'))

resulatdo= (n1+n2+n3)/3
document.write(resulatdo)



let numero = 12

if (numero % 2 == 0) {
    document.write('Numero es par')
} else {
    document.write('Numero impar')
}



let numero = 2

if (numero >= 0) {
    document.write('El numero es positivo')
}else{
    document.write('El numero es negativo')
}


let numero1 = 8
let numero2 = 2
let resul = 0

if (numero1 == 0 || numero2 == 0) {
    document.write('No se puede hacer')
} else {
    resul = (numero1 / numero2) 
    document.write(resul)
}



let opcion = prompt('Ingrese una opcion A,B,C,D')

if(opcion == 'A' || opcion == 'a'){
    document.write('La opcion fue acertada')
}else if(opcion == 'C' || opcion =='c'){
    document.write('Error')
}else{
    document.write('Se equivoco')
}


let numero1 = parseInt(prompt('Ingrese numero 1 '))
let numero2 = parseInt(prompt('Ingrese numero 2 '))

if(numero1>numero2){
    resta=numero1-numero2
    document.write(resta)

}else{
    resta=numero2-numero1
    document.write(resta)
}


let bucle = 5

for (i = 0; i <= bucle; i++) {
document.write(i,',')

}



for (i = 5; i >= 0; i--) {
document.write(i,',')
}



for (i = 0; i < 9; i += 2) {
    document.write(i)
}


let numeroa = parseInt(prompt('Ingrese '))

for (i = 1; i <= 10; i++) {
    document.write(numeroa, ' X ', (i), ' = ', (numeroa * i))
    document.write('<br>')
}




for (i = 2; i < 14; i += 3){
    document.write(i)
}



let numero = parseInt(prompt('Ingrese un numero'))
let letra = prompt('Ingrese una letra')

for (i = 0; i < numero; i++){
    document.write(letra)
}


for (i = 0; i < 2; i++) {
    for (j = 0; j < 5; j++) {
        document.write(i,' : ',j)
        document.write('<br>')
    }
}




let numero = parseInt(prompt("Teclea un número de 1 a 10"));
for (i = 0; i < numero; i++) {
    cadena = ''
    for (j = 0; j <= i; j++) {
        cadena += "*";
    }
    document.write(cadena + "<br>");
}





let numero = 5
let suma = 0
for (i = 1; i <= numero; i++) {

    suma += i

}
document.write(suma)


let suma = 0
for (i = 1; i <= 4; i++) {
    let numeros = parseFloat(prompt('Ingrese los numeros : '))
    suma +=numeros
    promedio=suma/4

}
document.write(promedio)
*/
