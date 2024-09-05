import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidacionService {
  constructor(private http: HttpClient) {}

  guardarToken(token: string) {
    localStorage.removeItem('token');
    return localStorage.setItem('token', token);
  }

  recuperarToken(): string {
    return localStorage.getItem('token')!;
  }

  /*getValidarToken(token:String ): Observable<boolean>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get('http://localhost:8080/users/me', { headers })
    .pipe(
      tap(
        
      ),
      catchError((error) => {
        return of(false);
      })
    );
  }*/

  getDatosFromToken(token: String): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get('http://localhost:8080/users/me', { headers }).pipe(
      catchError((error) => {
        return of(error);
      })
    );
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
