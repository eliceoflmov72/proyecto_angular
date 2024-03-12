
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
  // Genera un número aleatorio entre 1 y 100 y lo guarda en numeroAzar
  numeroAzar = Math.floor(Math.random() * 100 + 1);

  // Guarda el número introducido por el usuario en numeroEntrada
  numeroEntrada: number = 0;

  // Mensaje que se mostrará al usuario al realizar la comprobación
  mensaje: string = '';

  // Número de intentos que el usuario tiene para adivinar el número
  // que se ha elegido al azar
  intentos: number = 5;

  // Comprueba el número introducido por el usuario y actualiza
  // el mensaje y el número de intentos
  comprobar() {
    // Comprueba que el número introducido sea un número válido
    if (isNaN(this.numeroEntrada) || (this.numeroEntrada < 1) || (this.numeroEntrada > 100)) {
      // Si no es válido, muestra un mensaje de error y retorna
      this.mensaje = "Por favor, ingresa un número entre el 1 y el 100";
      return;
    }

    // Si el número es válido, comprueba si ha acertado
    if (this.numeroAzar === this.numeroEntrada) {
      // Si ha acertado, muestra un mensaje de felicitación
      this.mensaje = "¡¡HAS ACERTADO!!";
    } else if (this.numeroAzar > this.numeroEntrada) {
      // Si no ha acertado y el número generado es mayor que el introducido,
      // muestra un mensaje de error
      this.mensaje = "El número a adivinar es mayor";
    } else {
      // Si no ha acertado y el número generado es menor que el introducido,
      // muestra un mensaje de error
      this.mensaje = "El número a adivinar es menor";
    }

    // Disminuye en uno el número de intentos del usuario
    this.intentos--;

    // Si el usuario no tiene más intentos,
    // muestra un mensaje de error final
    if (this.intentos == 0) {
      this.mensaje = "¡Te has quedado sin intentos! El número era " + this.numeroAzar;
    }
  }
}