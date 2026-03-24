import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  it('should create the app', async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilComponent],
      providers: [provideRouter([])]
    }).compileComponents();
    
    const fixture = TestBed.createComponent(PerfilComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
