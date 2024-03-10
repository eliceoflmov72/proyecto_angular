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
  busquedaInput: string = '';
  peliculas: any[] = [];

  constructor(private peliculasService: PeliculasService) {}

  buscarPeliculas() {
    this.peliculasService.buscarPeliculas(this.busquedaInput).subscribe({
      next: (response: { results: any; }) => {
        this.peliculas = this.peliculasService.mostrarPeliculas(response.results);
      },
      error: () => {
        this.peliculas = [{ message: 'Error al cargar las películas' }];
      }
    });
  }
}
