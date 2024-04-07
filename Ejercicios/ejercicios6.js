class Biblioteca {
    constructor() {
      this.libros = [];
    }
  
    agregarLibro(libro) {
      this.libros.push(libro);
      document.write(`Libro ${libro.titulo} agregado exitosamente.`);
    }
  
    eliminarLibro(id) {
      const indiceLibro = this.libros.findIndex((libro) => libro.id === id);
      if (indiceLibro !== -1) {
        this.libros.splice(indiceLibro, 1);
        document.write(`Libro con ID ${id} eliminado exitosamente.`);
      } else {
        document.write(`No se encontró un libro con ID ${id}.`);
      }
    }
  
    buscarLibro(titulo) {
      const librosEncontrados = this.libros.filter((libro) => libro.titulo.includes(titulo));
      if (librosEncontrados.length > 0) {
        document.write(`Libros encontrados para "${titulo}":`);
        for (const libro of librosEncontrados) {
            document.write(`- ${libro.titulo}`);
        }
      } else {
        document.write(`No se encontraron libros para "${titulo}".`);
      }
    }
  
    mostrarLibrosDisponibles() {
      const librosDisponibles = this.libros.filter((libro) => libro.prestado === false);
      if (librosDisponibles.length > 0) {
        document.write(`Libros disponibles:`);
        for (const libro of librosDisponibles) {
            document.write(`- ${libro.titulo} `);
        }
      } else {
        document.write(`No hay libros disponibles.`);
      }
    }
  }
  
  class Libro {
    constructor(id, titulo, autor, prestado) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.prestado = prestado;
    }
  }
  

  
  const biblioteca = new Biblioteca();
  
  const libro1 = new Libro(1, "Cien años de soledad", "Gabriel García Márquez", false);
  const libro2 = new Libro(2, "El principito", "Antoine de Saint-Exupéry", false);
  const libro3 = new Libro(3, "El señor de los anillos", "J.R.R. Tolkien", false);
  
biblioteca.agregarLibro(libro1)
document.write('<br>')
biblioteca.agregarLibro(libro2)
document.write('<br>')
biblioteca.agregarLibro(libro3)
document.write('<br>')

biblioteca.buscarLibro('principito')
document.write('<br>')
document.write('<br>')

biblioteca.eliminarLibro(1)
document.write('<br>')


  
biblioteca.mostrarLibrosDisponibles();
document.write('<br>')
  
