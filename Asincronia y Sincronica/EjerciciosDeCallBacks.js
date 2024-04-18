
function map(array, callback) {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        const resultado = callback(array[i], i, array);
        nuevoArray.push(resultado);
    }
    return nuevoArray;
}




const array = [1, 2, 3]
const duplicar = x => x * 2
document.write(map(array, duplicar))



function filter(arreglo, callback) {
    const nuevoArray = []
    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];
        if (callback(elemento, i, arreglo)) {
            nuevoArray.push(elemento);
        }

    }
    return nuevoArray
}

const arreglo = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
document.write(filter(arreglo, multiploDe10)) 


function every(arreglo, callback) {
    for (let i = 0; i < arreglo.length; i++) {
        const resultado = callback(arreglo[i], i, arreglo);
        if (!resultado) {
            return false;
        }
    }
    return true;

}


const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10_ = x => x % 10 === 0
const esPositivo = x => x > 

document.write(every(numeros, multiploDe10_))
document.write(every(numeros, esPositivo))

//Este ejercicio es sacado de la web ayuda de la IA

function ordenarStrings(array, callbackComparacion) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        const resultadoComparacion = callbackComparacion(array[j], array[j + 1]);
        if (resultadoComparacion > 0) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  
  // Función callback para comparar dos strings
  function compararStrings(string1, string2) {
    if (string1 < string2) {
      return -1;
    } else if (string1 > string2) {
      return 1;
    } else {
      return 0;
    }
  }
  
  // Ejemplo de uso
  const arrayStrings = ["hola", "mundo", "adios", "bienvenido"];
  const arrayOrdenado = ordenarStrings(arrayStrings, compararStrings);
  console.log(arrayOrdenado); // Imprime: ["adios", "bienvenido", "hola", "mundo"]
  