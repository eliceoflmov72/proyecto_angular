import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tutorials-list',
    templateUrl: './tutorials-list.component.html',
    styleUrls: ['./tutorials-list.component.css'],
    standalone: true,
    imports: [
    FormsModule,
    TutorialDetailsComponent
],
})
export class TutorialsListComponent {
  // Notas: atributo para guardar las notas, current para la nota actual, currentIndex para el índice de la nota actual, title para el titulo a buscar
  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';

  // Inyección de dependencia del servicio
  constructor(private tutorialService: TutorialService) {}

  // Se ejecuta al cargar el componente, obtiene todas las notas
  ngOnInit(): void {
    this.retrieveTutorials();
  }

  // Obtiene todas las notas
  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  // Actualiza la lista de notas
  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  // Configura la nota actual y su índice
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  // Elimina todas las notas
  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  // Busca una nota por su título
  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
