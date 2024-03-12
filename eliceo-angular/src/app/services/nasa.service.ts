import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  // API Key para acceder a la API de la NASA
  private apiKey = 'DOdhKTRx2qwn3RhOwpsbOUbki6P4adElT1dDrRDq';

  // Inyección de servicios HTTP para hacer peticiones desde el servicio
  constructor(private http: HttpClient) {}

  // Función para obtener la imagen diaria de la NASA
  // Recibe un parámetro de tipo string con la fecha deseada
  // Devuelve un observable de tipo any, ya que la respuesta puede variar
  obtenerImagenDiaria(date: string): Observable<any> {
    // Construimos la URL de la API concatenando la fecha y la API Key
    const url = `${this.apiUrl}?api_key=${this.apiKey}&date=${date}`;
    // Hacemos la petición HTTP GET a la URL construida
    return this.http.get(url);
  }
}
