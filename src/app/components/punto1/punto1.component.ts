import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})

export class Punto1Component {
  productoSeleccionado: producto | null=null; 
  productosDestacados: producto[] = [
    new producto(
      1,
      'Uña de vaca',
      './assets/img/vaca.jpg',
      3000,
      'Bauhinia forficata',
      'árbol que crece principalmente en el bioma tropical estacionalmente seco, alcanza hasta 7 mts de altura. Presenta flores de color balcno o rosaceo. Se utiliza como medicina y como alimento.'
    ),
    new producto(
      2,
      'Rosa Té',
      './assets/img/rosa.jpeg',
      5000,
      'Rosa Odorata',
      'Esta hermosa rosa se caracteriza por su fragancia dulce y suave, que la hace perfecta para la elaboración de tés y perfumes. Además, la Rosa de té cuenta con una gran variedad de colores y formas, lo que la convierte en una flor muy versátil para la decoración de jardines y hogares'
    ), new producto(
      3,
      'Uña de vaca',
      './assets/img/vaca.jpg',
      3000,
      'Bauhinia forficata',
      'árbol que crece principalmente en el bioma tropical estacionalmente seco, alcanza hasta 7 mts de altura. Presenta flores de color balcno o rosaceo. Se utiliza como medicina y como alimento.'
    ), new producto(
      4,
      'Uña de vaca',
      './assets/img/vaca.jpg',
      3000,
      'Bauhinia forficata',
      'árbol que crece principalmente en el bioma tropical estacionalmente seco, alcanza hasta 7 mts de altura. Presenta flores de color balcno o rosaceo. Se utiliza como medicina y como alimento.'
    ), new producto(
      5,
      'Uña de vaca',
      './assets/img/vaca.jpg',
      3000,
      'Bauhinia forficata',
      'árbol que crece principalmente en el bioma tropical estacionalmente seco, alcanza hasta 7 mts de altura. Presenta flores de color balcno o rosaceo. Se utiliza como medicina y como alimento.'
    ), new producto(
      6,
      'Uña de vaca',
      './assets/img/vaca.jpg',
      3000,
      'Bauhinia forficata',
      'árbol que crece principalmente en el bioma tropical estacionalmente seco, alcanza hasta 7 mts de altura. Presenta flores de color balcno o rosaceo. Se utiliza como medicina y como alimento.'
    ),
    
    // Agrega el resto de los productos aquí...
  ];
  
  carrito:producto []=[];
  num:number=0;
  total:number=0;
  modalRef: NgbModalRef | null = null; 
  constructor(
    private modalService: NgbModal,
    private carritoService: CarritoService // Inyecta el servicio CarritoService en el constructor
  ) {}

  // Función para abrir el modal del carrito
  agregarAlCarrito(producto: producto) {
    this.carritoService.agregarAlCarrito(producto);
    this.productoSeleccionado= producto;
    this.total = this.carritoService.obtenerTotal();
  }

  mostrarCarrito(modalCarrito: any) {
    this.modalRef = this.modalService.open(modalCarrito, { size: 'lg' });
  }

  
}


export class producto{
  id:number;
  nombre:string;
  img:string;
  precio: number;
  nombreCientifico:string;
  descripcion:string;

  constructor(id:number,nombre:string,img:string,precio:number,nombreCientifico:string,descripcion:string){
    this.descripcion=descripcion;
    this.id=id;
    this.nombre=nombre;
    this.img=img;
    this.precio=precio;
    this.nombreCientifico=nombreCientifico;
  }
}