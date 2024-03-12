import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  // Clave API para consumir la API de TheMovieDB
  private api_key = 'acf5472e45e436d5026bfd4c5e792981';
  // URL base para consumir la API de TheMovieDB
  private urlBase = 'https://api.themoviedb.org/3/search/movie';
  // URL base para obtener imagenes de las películas
  private urlImg = 'https://image.tmdb.org/t/p/w200';

  // Inyección de HttpClient para consumir la API
  constructor(private http: HttpClient) {}

  // Función que busca películas por un texto de búsqueda
  buscarPeliculas(busquedaInput: string): Observable<any> {
    // Retorna el resultado de la API con la búsqueda y la clave de API
    return this.http.get(`${this.urlBase}?api_key=${this.api_key}&query=${busquedaInput}`);
  }

  // Función que formatea los datos de las películas
  mostrarPeliculas(peliculas: any[]): any {
    // Si no se encontraron películas, retorna un mensaje
    if (peliculas.length === 0) {
      return [{ message: 'No se encontraron resultados para tu búsqueda' }];
    }
    // Si se encontraron películas, las formatea y las retorna
    return peliculas.map(movie => ({
      // Título de la película
      title: movie.title,
      // Fecha de lanzamiento de la película
      releaseDate: 'La fecha de lanzamiento fue: ' + movie.release_date,
      // Sinopsis de la película
      overview: movie.overview,
      // URL de la imagen de la película
      posterPath: this.urlImg + movie.poster_path
    }));
  }
}