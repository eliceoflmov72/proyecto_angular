import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-add-tutorial',
    templateUrl: './add-tutorial.component.html',
    styleUrls: ['./add-tutorial.component.css'],
    standalone: true,
    imports: [FormsModule],
})
export class AddTutorialComponent {
  // Información del tutorial que se va a guardar
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  // Variable que indica si el tutorial ha sido guardado o no
  submitted = false;

  // Inyección del servicio para el manejo de tutoriales
  constructor(private tutorialService: TutorialService) {}

  // Función para guardar el tutorial
  saveTutorial(): void {
    // Datos a guardar
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    // Llamada al servicio para guardar el tutorial
    this.tutorialService.create(data).subscribe({
      // Función que se ejecuta si todo sale bien
      next: (res) => {
        // Imprimir en consola los datos devueltos por el servidor
        console.log(res);
        // Cambiar el valor de la variable submitted a true
        this.submitted = true;
      },
      // Función que se ejecuta si hay un error
      error: (e) => console.error(e)
    });
  }

  // Función para limpiar los campos del tutorial
  newTutorial(): void {
    // Cambiar el valor de la variable submitted a false
    this.submitted = false;
    // Limpiar los campos del tutorial
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
