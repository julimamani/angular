import { Component } from '@angular/core';
import { Ticket } from '../../../services/ticket-service';
import { TicketService } from '../../../services/ticket-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  lista: Array<Ticket> = [];
  resumen: any = { local: 0, extranjero: 0, total: 0 };
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    // Obtener la lista de tickets vendidos
    this.lista = this.ticketService.obtenerTickets();
    // Calcular el resumen de ventas por tipo de espectador
    this.calcularResumen();
  }
  calcularResumen(): void {
    this.resumen.local = this.lista.filter(ticket => ticket.tipoEspectador === 'l').length;
    this.resumen.extranjero = this.lista.filter(ticket => ticket.tipoEspectador === 'e').length;
    this.resumen.total = this.lista.length;
  }
  /*
 
  imprimir() {
    if (typeof window === 'undefined') {
      return; // Early return if not in a browser environment
    }
  
    import('print-js').then(printJS => {
      // Access the second method using the 'default' property
      printJS.default({printable: JSON.stringify(this.lista), properties: ['dni', 'precioReal', 'tipoEspectador'], type: 'json'});
    });
  }
    procesarListado(usuarios: Array<Usuario>):Array<any>{ 
      let usuariosProcess:Array<any> = new Array<any>(); 
      usuarios.forEach(usu => { 
      let usuarioTemp = { 
          id: usu.id, 
          username: usu.username, 
          email: usu.email 
      } 
      usuariosProcess.push(usuarioTemp); 
      }); 
        return usuariosProcess; 
      } 
      */
  /*
  generatePdf() {
    const data = array de objetos;
    try {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
      const excelBuffer = XLSX.write(workbook, { type: 'buffer' });
  
      const doc = new jsPDF();
      doc.autoTable({
        html: excelBuffer.toString('utf8'),
        startY: 10,
        theme: 'striped',
        columnStyles: {
          // Add styling to your columns as needed
        },
      });
  
      const pdfBuffer = doc.output('arraybuffer');
  
      const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Handle error appropriately (e.g., display message to user)
    }
    
  }
  */
}
