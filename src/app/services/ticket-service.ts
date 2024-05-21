import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
    @Injectable({
      providedIn: 'root'
    })
    tickets: Array<Ticket> = [];

      agregarTicket(ticket: Ticket) {
        this.tickets.push(ticket);
      }

      obtenerTickets(): Array<Ticket> {
        return this.tickets;
      }


}
export interface Ticket {
  dni: string;
  precioReal: number;
  tipoEspectador: 'l' | 'e' |''; // 'l' para Local, 'e' para Extranjero
  fechaCobro?: Date; // Opcional, se establecerá al momento de cobrar el ticket
  precioCobrado?: number; // Opcional, se establecerá al momento de cobrar el ticket
}

