import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent,
         IonMenuButton, IonButtons, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonImg, CommonModule, IonHeader, IonToolbar, IonTitle,
            IonContent, IonMenuButton, IonButtons],
})
export class HomePage {}