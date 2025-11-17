import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstudiantesComponent } from './gestion-estudiantes/listar-estudiantes/listar-estudiantes.component';
import { AutenticacionComponent } from './login/autenticacion/autenticacion.component';

export const routes: Routes = [
    { path: '', component: AutenticacionComponent },
    { path: 'listar-estudiantes', component: ListarEstudiantesComponent },  
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }