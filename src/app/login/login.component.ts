import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionService } from '../validacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private validacionService: ValidacionService
  ) {
    this.loginForm = this.fb.group({
      usuario: [
        '',
        [Validators.required, Validators.minLength(4)], //TODO: admin <= 5 caracteres
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    const loginData = this.loginForm.value;
    this.validacionService
      .getToken(loginData.usuario, loginData.password)
      .subscribe((respuesta) => {
        if (respuesta === 'error') {
          this.error = respuesta;
        } else {
          //TODO: Grabar el token en el localstorage
          this.validacionService.guardarToken(respuesta);
        }
      });
  }
}
