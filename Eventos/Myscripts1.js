let texto = document.getElementById('Texto1');

function verificar_numero(event) {

    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    }

}

texto.addEventListener('keydown', verificar_numero);

texto.addEventListener('keyup', function (event) {
    console.log('Entrada de usuario', event.target.value)
})

texto.addEventListener('keypress',function(event){
    console.log('Caracter ingresado: ',event.key )
})