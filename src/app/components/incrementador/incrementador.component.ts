import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // recibe como parametro una referencia
  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda'; // el valor por defecto
  @Input() progreso: number = 50;

  // evento para el cambio del progreso
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
   }

  ngOnInit() {

    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  onChanges(newValue: number){

    console.log(newValue);

    // Regresa un arreglo
    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);
  // console.log(elemHTML.value);

    if( newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0){
  
      this.progreso = 0;
    }else{

      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }


  cambiarValor( valor){

    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso);

    this.txtProgress.nativeElement.focus();
  }


}
