import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ClimaComponent  {

  // Variables para almacenar la ciudad y los datos del clima
  ciudad: string = '';
  private _climaService = inject(ClimaService);
  datosClima:any;

  /**
   * Función que se llama al hacer click en el botón de buscar
   * Invoca al servicio de clima y se suscribe a la respuesta
   */
  buscarCiudad() {
    this._climaService.buscarClima(this.ciudad).subscribe(
      // Cuando se reciben los datos se llamada a la función para procesarlos
      (data) => {
        this.datosClima = this._climaService.procesarDatosClima(data);
      });
  }
 
  
}

