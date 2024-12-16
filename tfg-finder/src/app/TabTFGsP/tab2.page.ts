import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  notificationsCount: number = 3; // Este valor puede ser dinámico

  constructor() {}

   // Acción cuando se hace clic en el botón de notificaciones
   onNotificationsClick() {
    console.log('Botón de notificaciones pulsado');
    // Aquí puedes navegar a otra página o abrir un modal de notificaciones
  }

  // Acción cuando se selecciona una tarjeta
  onCardClick(cardTitle: string) {
    console.log(`Se seleccionó la tarjeta: ${cardTitle}`);
    // Aquí puedes mostrar un detalle o redirigir a otra página
  }
}
