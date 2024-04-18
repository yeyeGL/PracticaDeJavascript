class Armas {
    constructor(calibre, peso, material, cargador, canon) {
        this.calibre = calibre
        this.peso = peso
        this.material = material
        this.cargador = cargador
        this.canon = canon
    }

    informacion() {
        return `${this.calibre}--${this.peso}kg--${this.material}--${this.cargador}--${this.canon}`
    }

}

class Pistolas extends Armas {
    constructor(calibre, peso, material, cargador, canon, accesorio, silenciador) {
        super(calibre, peso, material, cargador, canon)
        this.accesorio = accesorio
        this.silenciador = silenciador

    }
    informacion() {
        return `${this.calibre}--${this.peso}kg--${this.material}--${this.cargador}--${this.canon}--${this.accesorio}--${this.silenciador}`

    }

}

class Fusiles extends Armas {
    constructor(calibre, peso, material, cargador, canon, camuflaje, mira, empunadura, culata) {
        super(calibre, peso, material, cargador, canon)
        this.camuflaje = camuflaje
        this.mira = mira
        this.empunadura = empunadura
        this.culata = culata
    }

    informacion() {
        return `${this.calibre}--${this.peso}kg--${this.material}--${this.cargador}--${this.canon}--${this.camuflaje}--${this.mira}--${this.empunadura}--${this.culata}`

    }
}


let pistola1 = new Pistolas('9mm',5,'Hierro','31 balas','Reforzado','Calcomanias',false)
let fusil1 = new Fusiles('47mm',12,'Hierro','60 balas','Canon largo','Militar','Telescopica','Goma','Cuero')




