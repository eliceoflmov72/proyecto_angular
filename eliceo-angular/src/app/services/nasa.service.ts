import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'DOdhKTRx2qwn3RhOwpsbOUbki6P4adElT1dDrRDq';

  constructor(private http: HttpClient) {}

  obtenerImagenDiaria(date: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&date=${date}`;
    return this.http.get(url);
  }
}
