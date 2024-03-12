import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  // Inyecta la instancia de HttpClient para hacer peticiones http al backend
  constructor(private http: HttpClient) {}

  // Devuelve un observable con una lista de todos los tutoriales en el backend
  // Se utiliza para mostrar todos los tutoriales en la lista
  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl); // Realiza la petición
  }

  // Devuelve un observable con un tutorial específico del backend
  // Se utiliza para mostrar el tutorial seleccionado en la vista individual
  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`); // Realiza la petición
  }

  // Crea un nuevo tutorial en el backend con los datos recibidos
  // Se utiliza para agregar un nuevo tutorial a la lista
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data); // Realiza la petición
  }

  // Actualiza un tutorial específico en el backend con los datos recibidos
  // Se utiliza para editar un tutorial ya existente
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data); // Realiza la petición
  }

  // Borra un tutorial específico del backend
  // Se utiliza para eliminar un tutorial de la lista
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`); // Realiza la petición
  }

  // Borra todos los tutoriales del backend
  // Se utiliza para eliminar todos los tutoriales de la lista
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl); // Realiza la petición
  }

  // Devuelve un observable con una lista de tutoriales filtrados por su título
  // Se utiliza para buscar tutoriales por su título en la lista
  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`); // Realiza la petición
  }
}
