//La palabra break hace que el bucle deje de seguir y continue salta la condicion inicada


for (let i = 0; i < 10; i++) {
    document.write(i);
    document.write('<br>');
    if (i == 3) {
        document.write('Aca es la vuelta 3');
        document.write('<br>');
        break;
    }


}





let palabra = 'Holanea';
let resultado = '';

for (let i in palabra) {
    if (palabra[i] == 'a') {
        continue;
    } else {
        resultado += palabra[i];
    }

}
document.write(resultado)


