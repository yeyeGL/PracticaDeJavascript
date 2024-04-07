class Banco {
    constructor(titular, saldo, tipo) {
        this.titular = titular
        this.saldo = saldo
        this.tipo = tipo
    }

    Depositar(monto) {
        if (monto > 0) {
            this.saldo += monto
         
            document.write(`Monto del deposito a la cuenta $${monto} realizado completamente`)
            
        } else {
            document.write(`El monto debe ser mayor a 0`);
        }

    }

    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
          this.saldo -= monto;
          document.write(`Retiro de $${monto} realizado exitosamente`);
        
        } else if (monto > this.saldo) {
            document.write(`Fondos insuficientes maximo a retirar es: $${this.saldo}`);
        } else {
            document.write(`El monto a retirar debe ser mayor a $0`);
        }
      }

    SaberSaldo() {
        document.write(`El saldo actual es $${this.saldo} de la cuenta ${this.tipo}`)

    }


}

const cuentaAhorros = new Banco("Juan Pérez", 1000, "Ahorros");
const cuentaCorriente = new Banco("Ana García", 5000, "Corriente");

cuentaAhorros.Depositar(500);
document.write('<br>')
cuentaCorriente.retirar(1000);
document.write('<br>')
cuentaAhorros.SaberSaldo();
document.write('<br>')
cuentaCorriente.SaberSaldo();
document.write('<br>')
cuentaCorriente.Depositar(2500)
document.write('<br>')
cuentaCorriente.SaberSaldo()

