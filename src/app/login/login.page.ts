import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth';
import { IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
})
export class LoginPage {

  loginForm: FormGroup;
  errorMensaje: string = '';
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async iniciarSesion() {
    if (this.loginForm.invalid) return;

    this.cargando = true;
    this.errorMensaje = '';

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res: any) => {
        this.authService.guardarToken(res.token);
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        this.errorMensaje = 'Correo o contraseña incorrectos';
        this.cargando = false;
      }
    });
  }
}