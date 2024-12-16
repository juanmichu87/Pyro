import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'; // Importar LoadingController


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(
    private router: Router,
    private loadingController: LoadingController  // Inyectar el servicio LoadingController
  ) {}

  async iniciarSesion() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',  // Mensaje que aparece en la pantalla de carga
      spinner: 'circles',  // Tipo de spinner, puedes cambiarlo (por ejemplo, 'dots', 'lines', 'bubbles', etc.)
      duration: 2000  // Duración del loading (en milisegundos), se puede ajustar o eliminar
    });
    await loading.present();  // Mostrar el loading

    // Simular un retraso (por ejemplo, espera de autenticación)
    setTimeout(() => {
      loading.dismiss();  // Ocultar el loading después del retraso
      this.router.navigate(['/tabs/tab2']);  // Navegar a la vista tab2 después de iniciar sesión
    }, 2000);  // Simula un retraso de 2 segundos, ajusta según lo necesites
  }
}