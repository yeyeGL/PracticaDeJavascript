let x = 23

function BusquedaBinaria(arreglo, i, d) {
    if (i > d) return 'No se encuentra detro del arreglo'

    const pivote = Math.floor((i + d) / 2)

    if (arreglo[pivote] == x) return pivote

    if (arreglo[pivote] < x) {
        return BusquedaBinaria(arreglo, pivote + 1, d, x)
    } else {
        return BusquedaBinaria(arreglo, i, pivote - 1, x)
    }

}
const arreglo = [12,23,,30,41,54,64,76,98,123,324,542]


document.write('El numero a buscar esta en el indice --> '+BusquedaBinaria(arreglo, 0, arreglo.length - 1))
document.write('<br>')
document.write(`El numero era ${x}`)