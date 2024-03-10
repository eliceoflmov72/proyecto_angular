import { Component } from '@angular/core';

@Component({
  selector: 'app-window-methods',
  standalone: true,
  imports: [],
  templateUrl: './window-methods.component.html',
  styleUrl: './window-methods.component.css'
})

export class WindowMethodsComponent {
  // Window Methods --------------------------------------------------------
  newWindow: Window | null = null; // Declare the newWindow variable with type Window or null

  openNewWindow() {
    this.newWindow = window.open(" ", "", "width=500, height=400, left=50, top=300");
    // Primer parámetro es vacío para crear una pestaña vacía
    // Segundo parámetro también es vacío
    // Tercero: ancho, alto y posición relativa
  }

  closeWindow() {
    if (this.newWindow) {
      this.newWindow.close();
    }
  }

  moveWindowTo() {
    if (this.newWindow) {
      this.newWindow.focus(); // Para que aparezca delante la ventana
      this.newWindow.moveTo(500, 600); // Para moverla
      // Si está en la misma medida que la posición inicial del top, no se moverá la ventana (300 - 300, por ejemplo)
    }
  }

  resizeWindow() {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeTo(1000, 500); // Cambiar el tamaño de la ventana
    }
  }

  scrollWindowBy() {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.scrollBy(0, 100); // Primer parámetro <- ->, Segundo parámetro arriba abajo
    }
  }

  printPage() {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.print();
    }
  }

  // TAREA -> Terminar los métodos que quedan

  blurWindow() {
    if (this.newWindow) {
      this.newWindow.blur();
    }
  }

  confirmWindow() {
    if (this.newWindow) {
      this.newWindow.confirm();
    }
  }

  moveByWindow() {
    if (this.newWindow) {
      this.newWindow.moveBy(100, 100);
    }
  }

  resizeByWindow() {
    if (this.newWindow) {
      this.newWindow.resizeBy(100, 100);
    }
  }

  scrollToWindow() {
    if (this.newWindow) {
      this.newWindow.scrollTo(0, this.newWindow.document.body.scrollHeight);
      // Lo bajará abajo del todo por ser muy grande el número
    }
  }

  stopWindow() {
    if (this.newWindow) {
      this.newWindow.stop();
    }
  }

  alertWindow() {
    if (this.newWindow) {
      this.newWindow.alert();
    }
  }

  promptWindow() {
    if (this.newWindow) {
      this.newWindow.prompt();
    }
  }
}
