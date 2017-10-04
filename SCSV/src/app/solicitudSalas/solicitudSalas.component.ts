import { Component, OnInit} from '@angular/core'

@Component({
    selector: 'solicitud-sala',
    templateUrl: './solicitudSalas.html'
})
export class SolicitudSalas implements OnInit {

    constructor (

    ){

    }

  ngOnInit(){
      console.log('Componente de Solicitud Sala iniciado con exito');
  }  
}

