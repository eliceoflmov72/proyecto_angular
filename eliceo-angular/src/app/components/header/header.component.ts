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
  // Este es el valor inicial para el input de búsqueda
  searchTerm: string = '';
  
  // Este array va a guardar los resultados filtrados
  componentesFiltrados: string[] = [];

  // Inyectamos el servicio que se encarga de buscar
  constructor(private componentSearchService: ComponentSearchService) { }

  // Este método se encarga de buscar
  search(): void {
    const searchSubject = new Subject<string>();
    
    // Cuando se reciba un valor nuevo en el searchSubject
    searchSubject.subscribe((searchTerm) => {
      // Se buscan los componentes filtrados
      this.componentesFiltrados = this.componentSearchService.obtenerComponentesFiltrados(
        searchTerm
      );
    });

    // Se emite el evento con el valor del input de búsqueda
    searchSubject.next(this.searchTerm);
  }

  // Este método se encarga de limpiar el input de búsqueda
  borrarContenidoInput(): void {
    const miInput = document.getElementById('miInput') as HTMLInputElement;
    if (miInput) {
      miInput.value = '';
    }
    
  }

  // Este valor nos ayudará a mostrar/ocultar la lista de resultados
  listaVisible = true; // Valor inicial para mostrar la lista

  // Este método se encarga de cambiar el valor de listaVisible
  aparecerLista():void {
    this.listaVisible = !this.listaVisible; // Cambia el valor entre true y false
  }

}

export class AppModule { }
