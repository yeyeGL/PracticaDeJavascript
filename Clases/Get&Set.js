//Get obtener set establecer nuevo valores

class Deportista {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportista {
    constructor(nombre, apellido, goles) {
        super(nombre, apellido);
        this.goles = goles;
    }

    get goles() {
        return this._goles;
    }
    set goles(nuevosgoles) {
        this._goles = nuevosgoles;
    }
}


class Tenista extends Deportista {
    constructor(nombre, apellido, puntos) {
        super(nombre, apellido);
        this._puntos = puntos;
    }

    get puntos() {
        return this._puntos;
    }
    set puntos(nuevopuntos) {
        this._puntos = nuevopuntos;
    }

}

let Futbolista1 = new Futbolista('Lionel','Messi',843);
let Futbolista2 = new Futbolista('Cristiano','Ronaldo',800);
let Futbolista3 = new Futbolista('Zlatan','Ibrahimović',530);
let Futbolista4 = new Futbolista('Frank','Lampard',222);

document.write(Futbolista3.nombre,' --- ',Futbolista3.goles)
Futbolista3.goles = 535;
document.write('<br>')
document.write(Futbolista3.apellido,' --- ',Futbolista3.goles)


let golesActuales = Futbolista1.goles;


Futbolista1.goles = 844;


let nuevosGoles = Futbolista1.goles;
document.write('<br>')
document.write("Goles actuales:", golesActuales);
document.write('<br>')
document.write("Nuevos goles:", nuevosGoles); 
