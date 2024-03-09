// Se puede importar NgModule para hacer estilos específicos de Ng con Bootstrap
import { Component } from '@angular/core';

// Sirve para redirigir a otras paginas
import { RouterLink } from '@angular/router';

// Importamos el injector del buscador para poder buscar entre los componentes
import { ComponentSearchService } from '../../services/buscador.service';

import { FormsModule } from '@angular/forms';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  // Declaramos FormsModule para poder buscar entre los componentes
  // Después de declarar en los imports el "RouterLink"
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  searchTerm: string = '';
  componentesFiltrados: string[] = [];

  constructor(private componentSearchService: ComponentSearchService) {}

  search(): void { 
    const searchSubject = new Subject<string>();
    
    // Se subscribe para que cuando cambie el searchTerm se actualice el observable
    searchSubject.subscribe((searchTerm) => {
      this.componentesFiltrados = this.componentSearchService.obtenerComponentesFiltrados(
        searchTerm
      );
    });
  
    searchSubject.next(this.searchTerm);
  }
}

export class AppModule {}
