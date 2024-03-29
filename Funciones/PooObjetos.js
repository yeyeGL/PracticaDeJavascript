//Programacion orientada a objetos es un paradigma de programacion
//Se organizan en entorno a objetos contiene propiedades(variables) y metodos (funciones)
//los objetos son miembros de las clase y contiene las mismas propiedades de la clase la cual pertenece
/*

Carro                          Persona

Atributos        Metodos      Atributos        Metodos         


Color           Arrancar()    Nombre           Caminar()
Marca           Acelerar()    Edad             Corre()
Modelo          Frenar()      Trabajo          Trabajar()


*/



var auto = { 
    Marca:'Toyota',
    Modelo:'Corolla',
    Anio: 2023,
    Color: 'Rojo',
    Tipo: 'Sedan',
    Radio: ['FM','MP4']

}

document.write('Marca :',auto.Marca);
document.write('<br>')
document.write('Modelo :',auto.Modelo);
document.write('<br>')
document.write('Año :',auto.Anio);
document.write('<br>')
document.write('Color :',auto.Color);
document.write('<br>')
document.write('Tipo :',auto.Tipo);
document.write('<br>')
document.write('Radio :',auto.Radio);
document.write('<br>')
