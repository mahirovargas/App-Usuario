import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Usuarios de forma local
  private usuarios: any[] = [
    { email: 'john@gmail.com', password: '123456', nombre: 'john' }
  ];

  constructor() {}

  login(email: string, password: string): Observable<any> {
    const usuario = this.usuarios.find(
      u => u.email === email && u.password === password
    );
    if (usuario) {
      return of({ token: 'token-simulado-123', usuario });
    } else {
      return throwError(() => new Error('Credenciales incorrectas'));
    }
  }

  register(datos: any): Observable<any> {
    const existe = this.usuarios.find(u => u.email === datos.email);
    if (existe) {
      return throwError(() => new Error('El correo ya está registrado'));
    }
    this.usuarios.push(datos);
    return of({ mensaje: 'Registro exitoso' });
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }

  estaLogueado(): boolean {
    return this.obtenerToken() !== null;
  }
}








/**

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private apiUrl = 'https://reqres.in/api'; // Cambia por tu URL real

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, datos);
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }

  estaLogueado(): boolean {
    return this.obtenerToken() !== null;
  }
}
  */