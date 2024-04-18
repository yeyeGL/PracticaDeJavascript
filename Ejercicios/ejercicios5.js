class Adivinanza {
    constructor() {
        this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        this.intentosRestantes = 10;
    }


    jugar() {
        while (this.intentosRestantes > 0) {
            let numero = parseInt(prompt('Ingrese un numero el cual creees que es'))

            if (numero > this.numeroAleatorio) {
                alert('El numero aleatorio es menor al que ingresaste')
                this.intentosRestantes--
            } else if (numero < this.numeroAleatorio) {
                alert('El numero aleatorio es mayor al que ingresaste')
                this.intentosRestantes--
            } else if(numero === this.numeroAleatorio){
                alert(`Acertaste el numero era ${this.numeroAleatorio}`)
                break
            }else{
                alert('Intenta de nuevo')
            }

            if (this.intentosRestantes === 0) {
                alert(`Lo siento, has agotado tus intentos. El número era ${this.numeroAleatorio}`);
           
            }

        }

    }
}

const juego = new Adivinanza()

juego.jugar()