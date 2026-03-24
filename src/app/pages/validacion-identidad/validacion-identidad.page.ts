import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-validacion-identidad',
  templateUrl: './validacion-identidad.page.html',
  styleUrls: ['./validacion-identidad.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ValidacionIdentidadPage implements OnInit, OnDestroy {

  progress = 0;
  private interval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 5;
      } else {
        clearInterval(this.interval);
      }
    }, 300);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  async validarIdentidad() {
    if (this.progress < 100) return;
    await this.router.navigate(['/home']);
  }
}