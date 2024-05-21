import { Component } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service'; // Importa el servicio de carrito

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 // Inyecta el servicio de carrito en el constructor
 constructor(private carritoService: CarritoService) {}

 // Define métodos para obtener el carrito y el total
 get carrito() {
    return this.carritoService.obtenerProductoAgregado();
}

get total() {
  return this.carritoService.obtenerTotal();
}
mostrarCarrito(modalCarrito: any) {
  this.carritoService.mostrarCarrito(modalCarrito);
}
vaciarCarrito(){
  return this.carritoService.vaciarCarrito();
}
}
