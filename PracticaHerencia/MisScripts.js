class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    Infromacion() {
        return `${this.nombre}-${this.peso} kg.-${this.edad}años`;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }

    Infromacion() {
        return `${this.nombre} ----   ${this.peso} kg  ---- ${this.edad} años ---- ${this.raza}`;

    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    Infromacion() {
        return `${this.nombre} ----   ${this.peso} kg  ---- ${this.edad} años ---- ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    Infromacion() {
        return `${this.nombre} ----   ${this.peso} kg  ---- ${this.edad} años ---- ${this.color}`;
    }
}

let Perro1 = new Perro('Venus',20,4,'Doberman');
let Perro2 = new Perro('Pae',56,7,'Rottwiler');
let Gato1 = new Gato('Tara',5,1,'Femenino');
let Gato2 = new Gato('Evie',14,5,'Masculino');
let Conejo1 = new Conejo('Pulgoso',8,2,'Amarillo');
let Conejo2 = new Conejo('Aña',10,3,'Rojo');

let arreglo =[Perro1,Perro2,Gato1,Gato2,Conejo1,Conejo2]

function MostrarAnimales(){
    let lista = document.getElementById('ListaAnimales');
  
    for(let i of arreglo){
      let item = document.createElement('li');
      item.innerText = i.Infromacion();
      lista.appendChild(item);
    }
  
  }

