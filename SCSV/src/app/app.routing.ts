import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SolicitudSalas} from './solicitudSalas/solicitudSalas.component'; 
import {SolicitudComponent} from './solicitud/solicitud.component';


const appRoutes: Routes = [
    { path: 'solicitud', component: SolicitudComponent}];


export const appRoutingProviders: any []=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);