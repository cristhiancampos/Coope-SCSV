import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutingProviders, routing} from './app.routing';
import {HttpModule} from '@angular/http'; 

import { AppComponent } from './app.component';
import { SolicitudSalas } from './solicitudSalas/solicitudSalas.component';




@NgModule({
  declarations: [
    AppComponent,
    SolicitudSalas,
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
