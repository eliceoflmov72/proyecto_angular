import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // URL de la API de GitHub para obtener información de un usuario
  private apiUrl = 'https://api.github.com/users';

  // Inyección de HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  // Función que obtiene la información de un usuario de GitHub
  // @param nombre_usuario Nombre de usuario de GitHub del que se quiere obtener la información
  // @return Observable<any> con la información del usuario
  obtenerInformacionUsuario(nombre_usuario: string): Observable<any> {
    // Se realiza la petición a la URL construida con el nombre de usuario especificado
    return this.http.get(`${this.apiUrl}/${nombre_usuario}`);
  }
}
