//El ciclo for in toma como un vector la variable en el paramatro despues de in y recorre letra por letra

let palabraa = 'Sin palabras me esta gustando mucho javascript';


for (let i in palabraa) {
    document.write(palabraa[i]);
    document.write('<br>')

}






 let palabra = prompt('Ingrese la palabra para saber las vocales');
vocal = 0;

for (let i in palabra) {
    if (palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u') {
        vocal++;
        document.write('La vocal nro ', i, ':')
        document.write(palabra[i]);
        document.write('<br>')
    }

}
document.write('El numero de vocales son : ', vocal)