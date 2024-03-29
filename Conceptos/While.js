//El ciclo while repeti un bloque de codigo mientras la condicion se mantenga verdadera

let variable1 = 1;


while (variable1 <= 10) {
    document.write(variable1);
    document.write('<br>');
    variable1++;
}
document.write('Se acabo el bucle');



let variable2 = 1;
suma = 0;
let valor;


while (variable2 <=5) {
    valor = parseInt(prompt('Ingrese un valor'));
    suma = suma + valor;
    variable2++;
}
document.write('La suma es',suma);