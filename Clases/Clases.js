//Las clases son una forma de definir objetos y estructura de 
//datos con propiedades y metodos


class Persona {

    Nombre = 'Homero';
    Apellido = 'Simpons';
    Direccion = 'CR. 34 Calle 23';
    Telefono = 3225737085;
    Email = 'correo@gmail.com';

    trabajar() {
        return 'Trabaja en la planta cuclear';
    }

    Estudiar() {
        return 'Estudia en el tdea'
    }

}

const objeto1 = new Persona();
const objeto2 = new Persona();

document.write(objeto1.Nombre,' ',objeto1.Apellido);
document.write('<br>');
document.write(objeto1.trabajar())
document.write('<br>');
document.write('<br>');
document.write('Mi objeto 2 es :',objeto2.Nombre);
document.write('<br>');
document.write('Objeto 2  :',objeto2.Estudiar())
document.write('<br>');
