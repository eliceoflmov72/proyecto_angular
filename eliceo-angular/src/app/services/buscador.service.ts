import { Injectable } from '@angular/core';

/**
 * Injector que busca los componentes por su nombre
 */
@Injectable({
  providedIn: 'root',
})
export class ComponentSearchService {
  /**
   * Array con los nombres de los componentes
   */
  private nombreComponentes: string[] = [
    'Clima',
    'Peliculas',
    'Nasa',
    'GitHub',
    'Adivinanza',
    'Filtros',
    'Window Methods',
    'Listado de notas',
    'Añadir nota',
  ];

  /**
   * Busca los componentes que coinciden con el término de búsqueda
   * @param searchTerm Término de búsqueda
   * @returns Array con los nombres de los componentes que coinciden
   */
  obtenerComponentesFiltrados(searchTerm: string): string[] {
    return this.nombreComponentes.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

