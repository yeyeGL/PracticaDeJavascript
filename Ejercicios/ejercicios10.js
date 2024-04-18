class Contacto {
    constructor(nombre, telefono, email) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    toString() {
        return `Nombre: ${this.nombre} | Teléfono: ${this.telefono} | Email: ${this.email}`;
    }
}

class Agenda {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto);
        document.write(`Contacto "${contacto.nombre}" agregado con éxito!`);
    }

    eliminarContacto(nombre) {
        const indice = this.contactos.findIndex(contacto => contacto.nombre === nombre);

        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            document.write(`Contacto "${nombre}" eliminado con éxito!`);
        } else {
            document.write(`No se encontró el contacto "${nombre}".`);
        }
    }

    buscarContacto(nombre) {
        const contacto = this.contactos.find(contacto => contacto.nombre === nombre);

        if (contacto) {
            document.write(`Contacto encontrado:\n${contacto.toString()}`);
        } else {
            document.write(`No se encontró el contacto "${nombre}".`);
        }
    }

    editarContacto(nombre, nuevoNombre, nuevoTelefono, nuevoEmail) {
        const indice = this.contactos.findIndex(contacto => contacto.nombre === nombre);

        if (indice !== -1) {
            this.contactos[indice] = new Contacto(nuevoNombre, nuevoTelefono, nuevoEmail);
            document.write(`Contacto "${nombre}" actualizado con éxito!`);
        } else {
            document.write(`No se encontró el contacto "${nombre}".`);
        }
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            document.write("La agenda está vacía.");
        } else {
            document.write("\n**Lista de contactos:**");
            document.write('<br>')
            for (const contacto of this.contactos) {
                document.write('<br>')
                document.write(contacto.toString());
                document.write('<br>')
            }
        }
    }
}

// Ejemplo de uso
const agenda = new Agenda();

agenda.agregarContacto(new Contacto("Juan Pérez", "123456789", "juan.perez@email.com"));
document.write('<br>')
agenda.agregarContacto(new Contacto("María Gómez", "987654321", "maria.gomez@email.com"));
document.write('<br>')
agenda.listarContactos();
document.write('<br>')
agenda.buscarContacto("Juan Pérez");
document.write('<br>')
agenda.buscarContacto("Ana López");
document.write('<br>')
agenda.editarContacto("Juan Pérez", "Juan Carlos Pérez", "987654321", "juan.carlos.perez@email.com");
document.write('<br>')
agenda.buscarContacto("Juan Carlos Pérez");
document.write('<br>')
agenda.eliminarContacto("María Gómez");
document.write('<br>')
agenda.listarContactos();


//Ejercicio con ayuda de internet de eliminar editar agregar y listar CRUD