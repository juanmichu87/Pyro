import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaNotificacionPage } from './vista-notificacion.page';

describe('VistaNotificacionPage', () => {
  let component: VistaNotificacionPage;
  let fixture: ComponentFixture<VistaNotificacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaNotificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
