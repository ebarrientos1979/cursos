import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidacionService {
  constructor(private http: HttpClient) {}

  guardarToken(token: string) {
    localStorage.removeItem('token');
    return localStorage.setItem('token', token);
  }

  getToken = (usuario: string, password: string): Observable<any> => {
    // Opcional: Configurar headers (si es necesario)
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
    });
    return this.http
      .post(
        'http://localhost:8080/users/signin?password=' +
          password +
          '&username=' +
          usuario,
        null,
        {
          headers,
          responseType: 'text',
        }
      )
      .pipe(
        catchError((error) => {
          return of('error');
        })
      );
  };
}
