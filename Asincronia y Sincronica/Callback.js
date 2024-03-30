function avanzaFila(callback){
    setTimeout(function(){
        console.log('Tu turno llego');
        callback()

    },5000)
}

function llamada(){
    console.log('Te presentas a tu turno');
}
console.log('llegas a la fila')

avanzaFila(llamada);
console.log('Te vas a comprar cafe')