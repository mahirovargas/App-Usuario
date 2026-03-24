import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
})
export class RegisterPage {

  registerForm: FormGroup;
  errorMensaje: string = '';
  cargando: boolean = false;
  fotoPerfil: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  async tomarFoto() {
    try {
      const foto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });
      this.fotoPerfil = 'data:image/jpeg;base64,' + foto.base64String;
    } catch (error) {
      console.error('Error al tomar foto:', error);
    }
  }

  async registrarse() {
    if (this.registerForm.invalid) return;
    if (!this.fotoPerfil) {
      this.errorMensaje = 'Por favor toma una foto de perfil';
      return;
    }

    this.cargando = true;
    this.errorMensaje = '';

    const datos = {
      ...this.registerForm.value,
      foto: this.fotoPerfil
    };

    this.auth.register(datos).subscribe({
      next: () => {
        this.router.navigate(['/home']); // ✅ Al registrarse va a home
      },
      error: (err: any) => {
        this.errorMensaje = 'Error al registrarse. Intenta de nuevo.';
        this.cargando = false;
      }
    });
  }

  // ✅ Método separado, fuera de registrarse()
  irAValidacion() {
    this.router.navigate(['/validacion-identidad']);
  }
}