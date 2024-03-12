import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentSearchService {
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

  obtenerComponentesFiltrados(searchTerm: string): string[] {
    return this.nombreComponentes.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
