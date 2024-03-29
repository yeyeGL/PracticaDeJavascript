//Do while crea un bucle hasta que la condicion de comprobacion se evalua falsa

let valor;


do {

    valor = parseInt(prompt('Ingrese el valor 1 para salir'))
    document.write('Ingreseo el valor : ', valor)
    document.write('<br>')

} while (valor != 1);




let usuario, contraseña, control;


intentos = 1;
usuario = prompt('Ingrese el usuario');
contraseña = prompt('Ingrese la contraseña');


do {

    if (contraseña == '123') {
        document.write('Si')
        break;

    } else {
        contraseña = prompt('again')

    }



    intentos++;



} while (intentos != 3);
