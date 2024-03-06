// Se puede importar NgModule para hacer estilos específicos de Ng con Bootstrap
import { Component } from '@angular/core';

// Sirve para redirigir a otras paginas
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],// Después de declarar en los imports el "RouterLink"
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
