// juego.service.ts
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  palabras: string[] = ['casa', 'perro', 'gato', 'sol', 'mesa', 'libro', 'lapiz', 'flor', 'manzana', 'arbol'];
  lugar: number=0;
  iteracion: number=0;
  aciertos: number=0;
  errores: number=0;

  constructor() {
   }


  siguientePalabra(): string {
    this.iteracion++;
    this.lugar= Math.floor(Math.random() * 10) + 1;
    return this.palabras[this.lugar - 1];
  }

  obtenerResultado(): string {
    return `Aciertos: ${this.aciertos}, Errores: ${this.errores}`;
  }
}
