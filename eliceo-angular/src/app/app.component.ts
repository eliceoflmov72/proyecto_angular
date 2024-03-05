// Importa de docorador 'Component' del módulo '@angular/core'
/** Sirve para crear componentes de Angular */
import { Component } from '@angular/core';

// Importa de docorador 'RouterOutlet' del módulo '@angular/router'
/** Sirve para crear rutas de Angular */
import {RouterOutlet } from '@angular/router';

// Importamos los componentes que vamos a utilizar en el proyecto.
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// El decorador 'Component' toma como objeto un argumento
@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    FooterComponent,
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Se declara la clase del componente que proporciona la lógica y los datos, en este caso el nombre asociado al componente.
export class AppComponent {
  title = 'grid-proyect';
}

