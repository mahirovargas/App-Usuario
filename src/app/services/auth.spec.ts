import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // Cambia esto por tu URL de API real del baken
  private apiUrl = 'https://reqres.in/api'; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(nombre: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { nombre, email, password });
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