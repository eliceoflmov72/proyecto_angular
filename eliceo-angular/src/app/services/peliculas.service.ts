import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private api_key = 'acf5472e45e436d5026bfd4c5e792981';
  private urlBase = 'https://api.themoviedb.org/3/search/movie';
  private urlImg = 'https://image.tmdb.org/t/p/w200';

  constructor(private http: HttpClient) {}

  buscarPeliculas(busquedaInput: string): Observable<any> {
    return this.http.get(`${this.urlBase}?api_key=${this.api_key}&query=${busquedaInput}`);
  }

  mostrarPeliculas(peliculas: any[]): any {
    if (peliculas.length === 0) {
      return [{ message: 'No se encontraron resultados para tu búsqueda' }];
    }

    return peliculas.map(movie => ({
      title: movie.title,
      releaseDate: 'La fecha de lanzamiento fue: ' + movie.release_date,
      overview: movie.overview,
      posterPath: this.urlImg + movie.poster_path
    }));
  }
}