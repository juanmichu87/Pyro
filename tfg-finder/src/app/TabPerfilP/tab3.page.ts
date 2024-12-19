import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}  // Inyectar Router

  cerrarSesion() {
    this.router.navigate(['/login/login']);  // Redirigir a la página de login
  }
}
