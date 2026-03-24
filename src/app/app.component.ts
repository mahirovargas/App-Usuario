import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonApp, IonSplitPane, IonMenu, IonContent,
         IonList, IonItem, IonIcon, IonLabel,
         IonRouterOutlet, IonHeader, IonToolbar,
         IonTitle, IonMenuToggle } from '@ionic/angular/standalone';
import { AuthService } from './services/auth';
import { addIcons } from 'ionicons';
import { homeOutline, logOutOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonApp, IonSplitPane, IonMenu, IonContent,
    IonList, IonItem, IonIcon, IonLabel,
    IonRouterOutlet, IonHeader, IonToolbar,
    IonTitle, IonMenuToggle
  ],
})
export class AppComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({ homeOutline, logOutOutline, personOutline });
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.router.navigate(['/validacion-identidad']);
  }
}