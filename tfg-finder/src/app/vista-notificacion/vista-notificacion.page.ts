import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-notificacion',
  templateUrl: './vista-notificacion.page.html',
  styleUrls: ['./vista-notificacion.page.scss'],
})
export class VistaNotificacionPage {
  constructor(private router: Router) {}

  // Método para volver a tab2
  cerrarVista() {
    this.router.navigate(['/tabs/tab2']);
  }

  // Método que se llama cuando el ion-card es clickeado
  onCardClick() {
    // Redirigir a la página de tab2
    this.router.navigate(['/tabs/tab2']);
  }
}
