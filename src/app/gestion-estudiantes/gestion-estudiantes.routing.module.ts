import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarEstudiantesComponent } from "./listar-estudiantes/listar-estudiantes.component";
import { CrearEstudiantesComponent } from "./crear-estudiantes/crear-estudiantes.component";
import { ActualizarEstudiantesComponent } from "./actualizar-estudiantes/actualizar-estudiantes.component";

export const routes: Routes = [
    {path:'', component: ListarEstudiantesComponent},
    {path:'crearEstudiante', component: CrearEstudiantesComponent},
    {path:'actualizarEstudiante', component: ActualizarEstudiantesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestionEstudiantesRoutingModule{}