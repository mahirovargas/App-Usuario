import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonItem,
  IonIcon, IonLabel, IonButton, IonRouterOutlet, IonApp, IonSplitPane } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true, // ← faltaba
  imports: [IonSplitPane, IonApp, IonRouterOutlet, 
    CommonModule,
    IonHeader, IonToolbar, IonTitle,
    IonContent, IonList, IonItem,
    IonIcon, IonLabel, IonButton
  ],
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router) {
    addIcons({ personOutline, logOutOutline });
  }

  ngOnInit() {}

  cerrarSesion() {
    this.router.navigate(['/validacion-identidad']);
  }
}