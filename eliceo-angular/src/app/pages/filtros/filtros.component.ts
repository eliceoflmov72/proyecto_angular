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

  imagenBase: string = "";
  filtroSeleccionado: string = "none";
  filtrosDisponibles: any[] = [];

  constructor() { }

  ngOnInit(): void {
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
  cuandoCambiarArchivo(event: any) {
    const file = event.target.files[0]; // Captura el archivo seleccionado
    const reader = new FileReader(); // Crea un lector de archivos
    reader.onload = () => {
      this.imagenBase = reader.result as string; // Asigna la URL de datos (base64) al atributo imagenBase
    };
    reader.readAsDataURL(file); // Lee el archivo como una URL de datos (base64)
  }

  aplicarFiltro(): void {
    // Aplicar el filtro al estilo de la imagen
    const img = document.getElementById("imagen");
    if (img) {
      img.style.filter = this.filtroSeleccionado;
    }
  }
}
  