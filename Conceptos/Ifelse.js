//Condicion if o else si es true o false

let numero1 = 5;
let numero2 = 4;

if (numero1 > numero2) {
    document.write('El numero mayor es numero 1');
} else {
    document.write('El numero mayor es el numero 2');
}

document.write('<br>');


let nombre, edad;

nombre = prompt('Ingrese su nombre');
edad = prompt('ingrese su edad');
edad = parseInt(edad);

if (edad >= 18) {
    document.write('Bienvenido...', nombre)
} else {
    if (edad < 18) {
        document.write(nombre.concat('No tienes edad'));

    }
    document.write('No ingreso nada');
}


    
let continente, edadd;

continente = prompt('Ingrese su continen');
edadd = prompt('Ingrese su edad');
edadd = parseInt(edadd);

if (continente == 'America' && edadd >= 18) {
    document.write('Eres mero latino pae')
} else {
    document.write('O no latino o no eres mayor de edad ')
}

documet.write('<br>')

let dia, mes, anio;

dia = prompt('Ingrese el dia');
mes = prompt('Ingrese mes');
anio = prompt('Ingrese el año');


if (mes == 1 || mes == 2 || mes == 3) {
    document.write('Estas en el primer trimestre ',mes)
} else {
    if (mes == 4 || mes == 5 || mes == 6) {
        document.write('Estas en el segundo trimestre ',mes)
    } else {
        if (mes == 7 || mes == 8 || mes == 9) {
            document.write('Estas en el tercero trimestre ',mes)
        } else {
            if (mes == 10 || mes == 11 || mes == 12) {
                document.write('Estas en el cuarto trimestre ',mes)
            } else {
                document.write('No esta en el rango de meses')
            }
        }

    }

}


