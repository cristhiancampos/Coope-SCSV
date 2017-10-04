import { Component } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSolicitudSala: boolean;

  constructor ( private _router: Router){
    this.isSolicitudSala= false;

    $('#prueba').click(function(){alert('jquery')});
    
  }

  validarSolicitudSada(solicitud: boolean){
    this.isSolicitudSala = solicitud;
    console.log('Cambio el valor solicitud Sala');
    this._router.navigate(['/solicitud']);
  }
}
