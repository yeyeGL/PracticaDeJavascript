//Ejercicio de agendas


class Agenda {
    constructor() {
        this.eventos = []
    }

    agregarEvento(evento) {
        this.eventos.push(evento)
        document.write(`Evento ${evento.titulo} agregado`)
    }
    eliminarEvento(id) {
        const indiceEvento = this.eventos.findIndex((evento) => evento.id === id)
        if (indiceEvento !== -1) {
            this.eventos.splice(indiceEvento, 1)
            document.write(`Evento ID ${id} eliminado`)
        } else {
            document.write(`No se encontro el evento con el id ${id}`)
        }
    }

    modificarEvento(id, nuevoEvento) {
        const indiceEvento = this.eventos.findIndex((evento) => evento.id === id)
        if (indiceEvento !== -1) {
            this.eventos[indiceEvento] = nuevoEvento
            document.write(`Evento ID ${id} modificado`)
        } else {
            document.write(`No se encontro el evento con el id ${id}`)
        }
    }

    mostrarEventos(fecha) {
        const eventosFecha = this.eventos.filter((evento) => evento.fecha == fecha)

        if (eventosFecha.length > 0) {
            document.write(`Eventos para la fecha ${fecha}`)
            for(const evento of eventosFecha){
                document.write(` =  ${evento.titulo}`)
            }

        }else{
            document.write(`No hay eventos para la fecha ${fecha}`)
        }
    }

}

class Evento{
    constructor(id,titulo,fecha,hora){
        this.id=id
        this.titulo=titulo
        this.fecha=fecha
        this.hora=hora
    }
}

const Agenda1 = new Agenda()


const evento1 = new Evento(1, "Reunión de trabajo", "2023-11-14", "10:00");
const evento2 = new Evento(2, "Cita médica", "2023-11-15", "14:00");
const evento3 = new Evento(3, "Clase de baile", "2023-11-16", "19:00");


Agenda1.agregarEvento(evento1)
document.write('<br>')
Agenda1.agregarEvento(evento2)
document.write('<br>')
Agenda1.agregarEvento(evento3)
document.write('<br>')
document.write('<br>')
Agenda1.mostrarEventos('2023-11-16')
document.write('<br>')
Agenda1.eliminarEvento(2)


document.write('<br>')