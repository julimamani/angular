import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket-service';
import { Ticket } from '../../services/ticket-service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrl: './punto5.component.css'
})
export class Punto5Component implements OnInit{
  ticket: Ticket = { dni: '', precioReal: 0, tipoEspectador: '' };
  precioCobrado: number=0;
  constructor(private ticketService: TicketService) {}
 ngOnInit(): void {
    // Llamamos al método calcularPrecioCobrado() al iniciar el componente
    this.calcularPrecioCobrado();
  }
  calcularPrecioCobrado() {
    if (this.ticket.tipoEspectador === 'l') {
      this.precioCobrado = this.ticket.precioReal * 0.8;
    } else {
      this.precioCobrado = this.ticket.precioReal;
    }
  }

  registrarVenta() {
    this.ticket.precioCobrado = this.precioCobrado;
    this.ticketService.agregarTicket(this.ticket);
    this.ticket = { dni: '', precioReal: 0, tipoEspectador: '' };
    this.precioCobrado = 0;
  }
}


