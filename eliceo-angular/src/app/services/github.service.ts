import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  obtenerInformacionUsuario(nombre_usuario: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nombre_usuario}`);
  }
}
