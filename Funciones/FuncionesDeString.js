var palabra = 'Messi';
document.write(palabra);
document.write('<br>');


//Tamaño de letras de un texto

document.write(palabra.length);
document.write('<br>');


//Cantidad especifica de caracteres

document.write(palabra.slice(2,3))
document.write('<br>');

document.write(palabra.substring(0,4));
document.write('<br>');


//Reemplazar palabras

let saludo = 'adios neas';
saludo = saludo.replace('adios','hola');
document.write(saludo);
document.write('<br>');


//Poner mayusculas y minisculas

document.write(palabra.toUpperCase());
document.write('<br>');
document.write(palabra.toLowerCase());
document.write('<br>');

// unir textos

var palabra2 = 'Jumm no se que copar';
document.write(saludo.concat(palabra2));
document.write('<br>');

//Cortar cantidad de caractares

document.write(palabra.split('si'));
