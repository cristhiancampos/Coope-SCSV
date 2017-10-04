import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutingProviders, routing} from './app.routing';
import {HttpModule} from '@angular/http'; 
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SolicitudSalas } from './solicitudSalas/solicitudSalas.component';
import { SolicitudComponent } from './solicitud/solicitud.component';




@NgModule({
  declarations: [
    AppComponent,
    SolicitudSalas,
    SolicitudComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
