import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacionIdentidadPage } from './validacion-identidad.page';

describe('ValidacionIdentidadPage', () => {
  let component: ValidacionIdentidadPage;
  let fixture: ComponentFixture<ValidacionIdentidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionIdentidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
