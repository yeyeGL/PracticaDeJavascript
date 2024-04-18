/*
function ContarRango(n1, n2) {

    if (n2 < n1) {
        return 'Debe ser mayor el num2'
    }

    let contador = 0
    for (let i = n1 + 1; i < n2; i++) {
        contador++
    }
    return contador++

}

document.write(ContarRango(1, 9))
*/

function SumarRango(nro1, nro2) {
    if (nro2 < nro1) {
        return 'No se puede hacer '
    } else if (nro1 === nro2) {
        return 0

    }

    let suma = 0
    for (let i = nro1; i <= nro2; i++) {

        suma += i
    }
    return suma

}

document.write(SumarRango(0, 10))
document.write('<br>')
document.write(SumarRango(2, 5))
document.write('<br>')
document.write(SumarRango(5, 5))
document.write('<br>')
document.write(SumarRango(12, 14))
document.write('<br>')

document.write('<br>')

document.write('<br>')

