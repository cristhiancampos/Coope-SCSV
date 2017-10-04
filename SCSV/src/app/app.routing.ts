import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SolicitudSalas} from './solicitudSalas/solicitudSalas.component'; 
import {PruebaComponent} from './prueba/prueba.component';

const appRoutes: Routes = [
    { path: 'solicitud', component: SolicitudSalas}];


export const appRoutingProviders: any []=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);