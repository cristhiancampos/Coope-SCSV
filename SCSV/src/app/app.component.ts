import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSolicitudSala: boolean;

  constructor (){
    this.isSolicitudSala= false;
  }

  validarSolicitudSada(solicitud: boolean){
    this.isSolicitudSala = solicitud;
    console.log('Cambio el valor solicitud Sala');
  }
}
