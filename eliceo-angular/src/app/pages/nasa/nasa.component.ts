import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})

export class NasaComponent implements OnInit {
  // Esta es la imagen astronomica obtenida de la API de NASA
  imagenAstronomica: any;

  /**
   * Constructor que inyecta el servicio de NASA
   * @param nasaService Servicio de NASA
   */
  constructor(private nasaService: NasaService) {}

  /**
   * Ejecutado al inicio del componente
   * Obtiene la imagen astronómica del día actual
   */
  ngOnInit(): void {
    this.obtenerImagenDiaria();
  }

  /**
   * Obtiene la imagen astronómica del día actual
   */
  obtenerImagenDiaria(): void {
    // Obtiene la fecha actual en formato ISO
    const dia_actual = new Date().toISOString().split('T')[0];
    // Utiliza el servicio para obtener la imagen del día actual
    this.nasaService.obtenerImagenDiaria(dia_actual).subscribe({
      // En caso de éxito, asigna la imagen a la variable
      next: (data) => {
        this.imagenAstronomica = data;
      },
      // En caso de error, imprime en consola el error
      error: (error) => {
        console.error('Error al obtener la imagen astronómica:', error);
      }
    });
  }

}
