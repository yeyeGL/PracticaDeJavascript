//Concatenar variables puedes ser con , o un + 

let nombre = 'Nombre1';
let apellido = 'Apellido1';
let precio = 500;

document.write(nombre + ' ' + apellido)
document.write('<br>');
document.write('Nombre :' + nombre + ' ' + 'Apellido : ' + apellido)
let saludo = nombre.concat(apellido)
document.write('<br>');
document.write(saludo);
document.write('<br>');
document.write('=============================<br>');
document.write(nombre, ' ', apellido)
document.write('<br>');
document.write('=============================<br>');
document.write('El precio es :', precio)