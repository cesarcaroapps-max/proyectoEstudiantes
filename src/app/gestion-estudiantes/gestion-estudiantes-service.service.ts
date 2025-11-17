import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from './Interfaces/estudiante.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionEstudiantesServiceService {
  private apiUrl: string = "http://127.0.0.1:5000/listaEstudiantes";
  private api2Url: string = "http://127.0.0.1:5000/crearEstudiante";
  private api3Url: string = "http://127.0.0.1:5000/actualizarEstudiante";
  private api4Url: string = "http://127.0.0.1:5000/eliminarEstudiante";

  constructor(private http: HttpClient) { }

  private getToken(): string {
    return localStorage.getItem('token') || ''; 
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
  }



  getEstudiantes():Observable<Estudiante[]> {
    
    return this.http.get<Estudiante[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addEstudiante( estudiante: Estudiante ): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${ this.api2Url }`, estudiante );
  }


  updateEstudiante( estudiante: Estudiante ): Observable<Estudiante> {
    if ( !estudiante.codigo ) throw Error('Estudiante sin identificar');

    return this.http.put<Estudiante>(`${ this.api3Url }/${ estudiante.codigo }`, estudiante );
  }

  deleteEstudianteByCode( codigo: string ): Observable<boolean> {

    return this.http.delete(`${ this.api4Url }/${ codigo }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }
 
}
