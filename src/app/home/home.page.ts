import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonMenuButton, IonButtons, IonImg,
  IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,           // ← para que funcione routerLink
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonMenuButton, IonButtons, IonImg,
    IonButton, IonIcon    // ← nuevos
  ],
})
export class HomePage {
  constructor() {
    addIcons({ personOutline }); // ← registra el ícono
  }
}