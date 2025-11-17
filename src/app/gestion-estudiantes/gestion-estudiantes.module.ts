import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './gestion-estudiantes.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GestionEstudiantesServiceService } from './gestion-estudiantes-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule
  ],providers:[GestionEstudiantesServiceService]
})
export class GestionEstudiantesModule { }
