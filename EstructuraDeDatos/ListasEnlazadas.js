class Nodo {
    constructor(dato, siguiente) {
      this.dato = dato;
      this.siguiente = siguiente;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.inicio = null;
      this.tamaño = 0;
    }
  
    agregar(dato) {
      let nuevoNodo = new Nodo(dato, null);
      if (!this.inicio) {
        this.inicio = nuevoNodo;
      } else {
        let actual = this.inicio;
        while (actual.siguiente) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
      this.tamaño++;
    }
  
    toString() {
      let cadena = "[";
      let actual = this.inicio;
      while (actual) {
        cadena += actual.dato + (actual.siguiente ? ", " : "");
        actual = actual.siguiente;
      }
      cadena += "]";
      return cadena;
    }
  }
    
  let lista = new ListaEnlazada();
  document.write(lista.toString()); 
  
  lista.agregar(3);
  lista.agregar(5);
  lista.agregar(3);
  lista.agregar(5);
  document.write(lista.toString())
  