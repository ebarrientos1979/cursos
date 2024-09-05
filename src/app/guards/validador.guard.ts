import { ValidacionService } from './../validacion.service';
import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class validadorGuard implements CanActivate {
  constructor(
    private router: Router,
    private validacionService: ValidacionService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.validacionService.getDatosFromToken(token).pipe(
        map((respuesta: any) => {
          if (respuesta && respuesta.username) {
            console.log('ingreso true');
            return true;
          } else {
            this.router.navigate(['']);
            console.log('ingreso false');
            return false;
          }
        }),
        catchError(() => {
          this.router.navigate(['']);
          return of(false);
        })
      );
    } else {
      this.router.navigate(['']);
      return of(false);
    }
  }
}
