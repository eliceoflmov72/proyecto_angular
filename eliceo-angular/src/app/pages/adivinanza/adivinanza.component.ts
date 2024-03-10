
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adivinanza.component.html',
  styleUrl: './adivinanza.component.css'
})
export class AdivinanzaComponent {
  numeroAzar = Math.floor(Math.random() * 100 + 1);
  numeroEntrada: number = 0;
  mensaje: string = '';
  intentos: number = 5;

  comprobar() {
    if (isNaN(this.numeroEntrada) || (this.numeroEntrada < 1) || (this.numeroEntrada > 100)) {
      this.mensaje = "Por favor, ingresa un número entre el 1 y el 100";
      return;
    }
    console.log(this.numeroAzar);
    if (this.numeroAzar === this.numeroEntrada) {
      this.mensaje = "¡¡HAS ACERTADO!!";
    } else if (this.numeroAzar > this.numeroEntrada) {
      this.mensaje = "El número a adivinar es mayor";
    } else {
      this.mensaje = "El número a adivinar es menor";
    }
    this.intentos--;
    if (this.intentos == 0) {
      this.mensaje = "¡Te has quedado sin intentos! El número era " + this.numeroAzar;
    }
  }
}