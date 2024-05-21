import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { producto } from '../components/punto1/punto1.component'; 
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private _productoAgregado: producto[] = [];
  private _total: number = 0;

  productoAgregado$ = new BehaviorSubject<producto[]>([]);
  total$ = new BehaviorSubject<number>(0);
  modalRef: NgbModalRef | null = null; 

  constructor(
    private modalService: NgbModal,// Inyecta el servicio CarritoService en el constructor
  ) {}

  agregarAlCarrito(producto: producto) {
    this._productoAgregado.push(producto)
    this._total += producto.precio;
    this.actualizarProductoYTotal();
  }

  obtenerProductoAgregado(): producto[] { // Cambia el tipo de retorno a un array
    return this._productoAgregado;
  }

  obtenerTotal(): number {
    return this._total;
  }

  vaciarCarrito() {
    this._productoAgregado = [];
    this._total = 0;
    this.actualizarProductoYTotal();
  }
  mostrarCarrito(modalCarrito: any) {
    this.modalRef = this.modalService.open(modalCarrito, { centered: true });
  }

  private actualizarProductoYTotal() {
    this.productoAgregado$.next(this._productoAgregado);
    this.total$.next(this._total);
  }
}
