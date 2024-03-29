//Funciones con return

let resultado

function Suma(a, b) {
    resultado = a + b;
    return resultado;
}

document.write(Suma(40, 400))


function Color(valor) {
    valor = parseInt(prompt('Ingrese valor de 1 a 3...'));
    switch (valor) {
        case 1:
            return 'Rojo';
        case 2:
            return 'Verde';
        case 1:
            return 'Azul';
        default:
            return 'Valor incorrecto'
            
    }

}

alert(Color())
