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
  imagenAstronomica: any; 

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.obtenerImagenDiaria();
  }

  obtenerImagenDiaria(): void {
    const dia_actual = new Date().toISOString().split('T')[0];
    this.nasaService.obtenerImagenDiaria(dia_actual).subscribe({
      next: (data) => {
        this.imagenAstronomica = data;
      },
      error: (error) => {
        console.error('Error al obtener la imagen astronómica:', error);
      }
    });
  }

}
