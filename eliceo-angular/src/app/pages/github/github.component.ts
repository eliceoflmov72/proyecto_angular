import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-github',
  standalone: true,
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  imports: [FormsModule]
})
  
export class githubComponent {
  // Este campo almacena el nombre de usuario que se buscará en GitHub
  nombre_usuario: string = '';

  // Almacena la información del usuario que se buscó en GitHub
  userData: any;

  // Inyección del servicio que se encarga de hacer las peticiones a GitHub
  constructor(private githubService: GithubService) {}

  // Función encargada de buscar la información del usuario en GitHub
  obtenerInformacionUsuario(): void {
    // Se realiza la petición y se suscribe para recibir la respuesta
    this.githubService.obtenerInformacionUsuario(this.nombre_usuario).subscribe({
      // Función que se ejecuta cuando se recibe una respuesta exitosa
      next: (data) => {
        // Se almacena la información del usuario en el campo correspondiente
        this.userData = data;
      },
      // Función que se ejecuta cuando se produce un error en la petición
      error: (error) => {
        // Se imprime el error en consola
        console.error('Error al obtener la información del usuario:', error);
      }
    });
  }

  // Función encargada de copiar la información del usuario en el portapapeles
  copiarPortapapeles(): void {
    // Se convierte la información del usuario en una cadena JSON
    const jsonSnippet = JSON.stringify(this.userData, null, 2);
    // Se copia la cadena JSON al portapapeles
    navigator.clipboard.writeText(jsonSnippet);
  }

}
