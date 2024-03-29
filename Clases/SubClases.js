class Deportista {
    constructor(nombre, apellido) {
        this.apellido = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportista {
    constructor(nombre, apellido, goles) {
        super(nombre, apellido);
        this.goles = goles;
    }
}

class Tenista extends Deportista {
    constructor(nombre, apellido, puntos) {
        super(nombre, apellido);
        this.puntos = puntos;
    }
}