import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Estos son los famosos enrutamientos con los que se
export class ClimaService {
  // Inyecta la instancia de HttpClient para hacer peticiones a la API
  private _http = inject(HttpClient);

  // La url base para la llamada a la API
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather';

  // La clave para acceder a la API
  private apiKey = '605507acf87117e111e54a3ab5238541';

  // La diferencia en grados celsius entre la temperatura en Kelvin y la temperatura en grados celsius
  private difKelvin = 273.15;

  // Función para buscar el clima de un lugar
  // Recibe el nombre de la ciudad como parámetro
  // Hace una petición a la API con el nombre de la ciudad
  // Devuelve un observable con el resultado de la petición
  buscarClima(ciudad: string): Observable<any> {
    // Se hace la petición a la API con la url y la clave de la API
    return this._http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`);
  }

  // Función para procesar los datos del clima
  // Recibe los datos de la API como parámetro
  // Devuelve un objeto con los datos procesados
  procesarDatosClima(data: any): any {
    return {
      // La ciudad en la que se buscó el clima
      ciudadNombre: data.name,
      // El país en el que se buscó el clima
      paisNombre: data.sys.country,
      // La temperatura en grados celsius
      temperatura: Math.floor(data.main.temp - this.difKelvin),
      // La humedad
      humedad: data.main.humidity,
      // La descripción del clima
      descripcion: data.weather[0].description,
      // La url del icono del clima
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
  }

}

