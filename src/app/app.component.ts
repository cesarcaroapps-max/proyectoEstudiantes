import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarEstudiantesComponent } from './gestion-estudiantes/listar-estudiantes/listar-estudiantes.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ListarEstudiantesComponent
    ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoEstudiantes';
}
