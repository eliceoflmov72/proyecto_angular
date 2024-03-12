import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})

export class FiltrosComponent implements OnInit {

  // Información de la imagen
  imagenBase: string = ""; // URL de la imagen
  filtroSeleccionado: string = "none"; // Filtro seleccionado
  filtrosDisponibles: any[] = []; // Filtros disponibles

  constructor() { }

  ngOnInit(): void {
    // Inicializar la información de la imagen y los filtros
    this.imagenBase = "";
    this.filtroSeleccionado = "none";
    this.filtrosDisponibles = [
      { nombre: "Sin filtro", valor: "none" },
      { nombre: "Escala de grises", valor: "grayscale()" },
      { nombre: "Sepia", valor: "sepia()" },
      { nombre: "Desenfocar", valor: "blur(5px)" },
      { nombre: "Brillo", valor: "brightness(150%)" },
      { nombre: "Contraste", valor: "contrast(200%)" },
      { nombre: "Invertir", valor: "invert(100%)" }
    ];
  }

  // Función que se ejecuta cuando se selecciona un archivo
  cuandoCambiarArchivo(event: any): void {
    // Lee el archivo seleccionado
    const file = event.target.files[0];
    const reader = new FileReader();

    // Cuando se haya leído la imagen
    reader.onload = () => {
      // Asigna la URL de la imagen al atributo imagenBase
      this.imagenBase = reader.result as string;
    };

    // Lee el archivo
    reader.readAsDataURL(file);
  }

  // Aplicar el filtro al estilo de la imagen
  aplicarFiltro(): void {
    // Obtiene el elemento <img>
    const img = document.getElementById("imagen");

    // Si el elemento existe, aplica el filtro
    if (img) {
      img.style.filter = this.filtroSeleccionado;
    }
  }
}
  