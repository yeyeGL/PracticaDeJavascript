//Funciones con parametros necesitan parametros especificos para ejecutar el codigo
//Dentro de una funcion pueden invocar varias funciones


let resultado;





function Suma(numeroo1, numeroo2) {

    numeroo1 = parseInt(prompt('Ingrese el numero 1'));
    numeroo2 = parseInt(prompt('Ingrese el numero 2'));
    resultado = numeroo1 + numeroo2;
    alert('Resultado : ' + resultado);

}

function Resta(numeroo1, numeroo2) {
    
    numeroo1 = parseInt(prompt('Ingrese el numero 1'));
    numeroo2 = parseInt(prompt('Ingrese el numero 2'));
    resultado = numeroo1 - numeroo2;
    alert('Resultado : ' + resultado);

}

function Multiplicaion(numeroo1, numeroo2) {
    
    numeroo1 = parseInt(prompt('Ingrese el numero 1'));
    numeroo2 = parseInt(prompt('Ingrese el numero 2'));
    resultado = numeroo1 * numeroo2;
    alert('Resultado : ' + resultado);

}

function Division(numeroo1, numeroo2) {
    
    numeroo1 = parseInt(prompt('Ingrese el numero 1'));
    numeroo2 = parseInt(prompt('Ingrese el numero 2'));
    resultado = numeroo1 / numeroo2;
    alert('Resultado : ' + resultado);

}



let resultadoo;

function PedirValore(){
    nume1 = parseInt(prompt('Ingrese el numero 1'));
    nume2 = parseInt(prompt('Ingrese el numero 2'));

    Sumaa()
    Restaa()
    Multiplicacionn()
    Divisionn()
    
}

function Sumaa() {

 
    resultadoo = nume1 + nume2;
    alert('Resultado : ' + resultadoo);

}

function Restaa() {
    
 
    resultadoo = nume1 - nume2;
    alert('Resultado : ' + resultadoo);

}

function Multiplicacionn() {
    
    
    resultadoo = nume1 * nume2;
    alert('Resultado : ' + resultadoo);

}

function Divisionn() {
    
    resultadoo = nume1 / nume2;
    alert('Resultado : ' + resultadoo);

}

PedirValore()