//Es un tipo de mecanismo de control de seleccion


let valor;
valor = parseInt(prompt('Ingrese un valor entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('El valor es 1');
        break;
    case 2:
        document.write('El valor es 2');
        break;
    case 3:
        document.write('El valor es 3');
        break;
    default:
        document.write('Fuera del rango');
        break;
}




let color = prompt('Ingrese un color rojo verde o azul');

switch (color) {
    case 'rojo':
        document.write('Ingreso rojo')
        break;
    case 'verde':
        document.write('Ingreso verde')
        break;
    case 'azul':
        document.write('Ingreso azul')
        break;

    default:
        document.write('No ingreso ningun color')
        break;
}