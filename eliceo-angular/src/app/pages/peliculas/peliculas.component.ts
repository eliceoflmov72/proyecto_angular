import { Component } from '@angular/core';
// Importamos el módulo inyectable de service.
import { PeliculasService } from '../../services/peliculas.service'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent {
  // Campo de entrada de búsqueda
  busquedaInput: string = '';
  // Películas encontradas
  peliculas: any[] = [];

  // Inyección del módulo PelículasService
  constructor(private peliculasService: PeliculasService) {}

  // Método de búsqueda de películas
  buscarPeliculas() {
    // Subscription al método de búsqueda de películas del servicio
    this.peliculasService.buscarPeliculas(this.busquedaInput).subscribe({
      // Proceso de búsqueda exitosa
      next: (response: { results: any; }) => {
        // Asignación de las películas encontradas
        this.peliculas = this.peliculasService.mostrarPeliculas(response.results);
      },
      // Proceso de búsqueda con error
      error: () => {
        // Asignación de un mensaje de error
        this.peliculas = [{ message: 'Error al cargar las películas' }];
      }
    });
  }
}
