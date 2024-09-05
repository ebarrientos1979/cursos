import { Component, Inject, OnInit, signal } from '@angular/core';
import { ValidacionService } from '../validacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private token: String = '';
  respuesta: any;
  nombreUsuario = signal<string>('');
  //validacionService = Inject(ValidacionService);

  constructor(private validacionService: ValidacionService) {}

  ngOnInit(): void {
    this.token = this.validacionService.recuperarToken();
    this.validacionService
      .getDatosFromToken(this.token)
      .subscribe((respuesta: any) => {
        this.respuesta = respuesta;
        this.nombreUsuario.set(respuesta['username']);
      });
  }
}
