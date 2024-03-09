import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-github',
  standalone: true,
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  imports: [CommonModule, FormsModule]
})
  
export class githubComponent {

  nombre_usuario: string = '';
  userData: any;
  
  constructor(private githubService: GithubService) {}

  obtenerInformacionUsuario(): void {
    this.githubService.obtenerInformacionUsuario(this.nombre_usuario).subscribe({
      next: (data) => {
        this.userData = data;
      },
      error: (error) => {
        console.error('Error al obtener la información del usuario:', error);
      }
    });
  }

  copiarPortapapeles(): void {
    const jsonSnippet = JSON.stringify(this.userData, null, 2);
    navigator.clipboard.writeText(jsonSnippet);
  }

}
