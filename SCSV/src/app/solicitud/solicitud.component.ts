import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor() {
    $('#prueba').click(function(){alert('jquery')});
   }

  ngOnInit() {
  }
}
