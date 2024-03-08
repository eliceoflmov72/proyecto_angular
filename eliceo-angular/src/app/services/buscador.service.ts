import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentSearchService {
  private nombreComponentes: string[] = [
    'home',
    'clima',
    'peliculas',
    'nasa',
  ];

  obtenerComponentesFiltrados(searchTerm: string): string[] {
    return this.nombreComponentes.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
