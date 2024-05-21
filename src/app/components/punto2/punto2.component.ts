
import { AfterViewInit, Component, ViewChild, TemplateRef} from '@angular/core';
import { NgbAlert, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 
import { JuegoService } from '../../services/juego.service';


@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements AfterViewInit{
  palabra: string ='';
  opcion: number=0;
  modalRef: NgbModalRef | null = null;
  aciertos: number=0;
  errores: number=0;
  rta: any=null;
  @ViewChild('modalJuego') modalJuego!: TemplateRef<any>;
  constructor(private juego: JuegoService, private modalService: NgbModal) {
   }
   ngAfterViewInit(): void {
    setTimeout(() => {
      this.iniciarJuego();
    });
  }
  iniciarJuego(){
    this.generarOpcion();
    setTimeout(() => { // Retrasar la llamada a nuevaPalabra para asegurarse de que generarOpcion haya terminado
      this.nuevaPalabra();
    });
  }
  abrirModal(){
    this.modalRef = this.modalService.open(this.modalJuego, {centered:true });
    this.juego.iteracion=0;this.aciertos=0;this.errores=0;
  }
  generarOpcion(){
     this.opcion=Math.floor(Math.random() * 4) + 1;;
  }
  nuevaPalabra() {
    this.palabra = this.juego.siguientePalabra();
  }
  contarSilabas(palabra: string): number {
    // Elimina las letras finales 'es' y 'e' que a menudo no cuentan como sílabas
    palabra = palabra.replace(/(?:es|e)$/, '');

    // Divide la palabra en sílabas basadas en las vocales
    const silabas = palabra.match(/[aeiouyáéíóúü]{1,2}|[bcdfghjklmnñpqrstvwxyz]{1,2}(?![aeiouyáéíóúü])/gi);

    return silabas ? silabas.length : 0; // Devuelve la cantidad de sílabas encontradas
  }

  comprobarRespuesta(rta:any) {
    let respuesta:boolean=false;
    const rtaNum = parseInt(this.rta);
      if (this.opcion == 1) {
        if(this.palabra.match(/[aeiou]/gi)?.length==rtaNum){
          this.aciertos++; respuesta= true;
        }else{
          this.errores++;respuesta= false;
        }
      } 
      if(this.opcion ==2){
        if(this.palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length==rtaNum){
          this.aciertos++; respuesta= true;
        }else{
          this.errores++;
          respuesta= false;
        }
      }
  
      if(this.opcion==3){
        if((this.palabra.length+1)==rtaNum){
          this.aciertos++; respuesta= true;
        }else{
          this.errores++;
        respuesta= false;
        }
      }
      if(this.opcion==4){
        if(this.contarSilabas(this.palabra)==rtaNum){
          this.aciertos++; respuesta= true;
        }else{
          this.errores++;
          respuesta= false;
        }
      }
      if (respuesta) {
        alert('¡Respuesta correcta!');
      } else {
        alert('Respuesta incorrecta');
      }
      this.palabra='';
      this.opcion=0;
      if (this.juego.iteracion ==8) {
        //alert(`Juego terminado. ${this.juego.obtenerResultado()}`);
        // Puedes mostrar el resultado en un modal aquí
        this.abrirModal();
      }
    }
   
}