class Vehiculo {
    constructor(marca, modelo, año, color, matricula) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.matricula = matricula;
        this.encendido = false;
        this.velocidad = 0;
    }

    arrancar() {
        if (!this.encendido) {
            document.write(`Vehículo ${this.marca} ${this.modelo} arrancado.`);
            this.encendido = true;
        } else {
            document.write(`Vehículo ${this.marca} ${this.modelo} ya está encendido.`);
        }
    }

    acelerar(aumentoVelocidad) {
        if (this.encendido) {
            this.velocidad += aumentoVelocidad;
            document.write(
                `Vehículo ${this.marca} ${this.modelo} acelerando a ${this.velocidad} km/h.`
            );
        } else {
            document.write(`Vehículo ${this.marca} ${this.modelo} no puede acelerar, no está encendido.`);
        }
    }

    frenar(disminucionVelocidad) {
        if (this.encendido) {
            if (this.velocidad > 0) {
                this.velocidad -= disminucionVelocidad;
                document.write(`Vehículo ${this.marca} ${this.modelo} frenando a ${this.velocidad} km/h.`);
            } else {
                document.write(`Vehículo ${this.marca} ${this.modelo} ya está detenido.`);
            }
        } else {
            document.write(`Vehículo ${this.marca} ${this.modelo} no puede frenar, no está encendido.`);
        }
    }

    girar(direccion) {
        if (this.encendido) {
            document.write(`Vehículo ${this.marca} ${this.modelo} girando hacia ${direccion}.`);
        } else {
            document.write(`Vehículo ${this.marca} ${this.modelo} no puede girar, no está encendido.`);
        }
    }
}

const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2023, "Rojo", "ABC123");
const vehiculo2 = new Vehiculo("Nissan", "Sentra", 2022, "Azul", "DEF456");

vehiculo1.arrancar();
vehiculo2.arrancar();

vehiculo1.acelerar(20);
vehiculo2.acelerar(30);


vehiculo1.frenar(10);
vehiculo2.frenar(15);

vehiculo1.girar("izquierda");
vehiculo2.girar("derecha");

