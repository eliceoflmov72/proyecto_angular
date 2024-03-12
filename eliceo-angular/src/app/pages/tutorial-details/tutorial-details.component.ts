import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-tutorial-details',
    templateUrl: './tutorial-details.component.html',
    styleUrls: ['./tutorial-details.component.css'],
    standalone: true,
    imports: [
    RouterLink,
    FormsModule
],
})
export class TutorialDetailsComponent {
  @Input() viewMode = false; // Modo de visualización de la nota (solo lectura)

  @Input() currentTutorial: Tutorial = { // Nota que se está mostrando
    title: '',
    description: '',
    published: false
  };

  message = ''; // Mensaje de confirmación o de error

  constructor(
    private tutorialService: TutorialService, // Servicio para gestión de notas
    private route: ActivatedRoute, // Para obtener el id de la nota en la url
    private router: Router // Para redirigir después de eliminar o actualizar
  ) {}

  ngOnInit(): void { // Al inicializar el componente
    if (!this.viewMode) { // Si no estamos en modo solo lectura
      this.message = ''; // Reinicia el mensaje de confirmación/error
      this.getTutorial(this.route.snapshot.params['id']); // Obtiene la nota con el id de la url
    }
  }

  getTutorial(id: string): void { // Obtiene una nota de acuerdo al id
    this.tutorialService.get(id).subscribe({ // Utiliza el servicio
      next: (data) => {
        this.currentTutorial = data; // Guarda la nota en currentTutorial
        console.log(data); // Imprime la nota en consola
      },
      error: (e) => console.error(e) // Imprime el error en consola
    });
  }

  updatePublished(status: boolean): void { // Actualiza el estado de publicación de una nota
    const data = { // Datos a enviar al servidor
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.message = ''; // Reinicia el mensaje de confirmación/error

    this.tutorialService.update(this.currentTutorial.id, data).subscribe({ // Utiliza el servicio
      next: (res) => {
        console.log(res); // Imprime el resultado en consola
        this.currentTutorial.published = status; // Actualiza el estado en currentTutorial
        this.message = res.message // Guarda el mensaje en message
          ? res.message
          : 'La nota ha sido actualizada.'; // Mensaje por defecto
      },
      error: (e) => console.error(e) // Imprime el error en consola
    });
  }

  updateTutorial(): void { // Actualiza una nota
    this.message = ''; // Reinicia el mensaje de confirmación/error

    this.tutorialService // Utiliza el servicio
      .update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res); // Imprime el resultado en consola
          this.message = res.message // Guarda el mensaje en message
            ? res.message
            : 'Esta nota ha sido actualizada.'; // Mensaje por defecto
        },
        error: (e) => console.error(e) // Imprime el error en consola
      });
  }

  deleteTutorial(): void { // Elimina una nota
    this.tutorialService.delete(this.currentTutorial.id).subscribe({ // Utiliza el servicio
      next: (res) => {
        console.log(res); // Imprime el resultado en consola
        this.router.navigate(['/tutorials']); // Redirige a la lista de notas
      },
      error: (e) => console.error(e) // Imprime el error en consola
    });
  }
}
