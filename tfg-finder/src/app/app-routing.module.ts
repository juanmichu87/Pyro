import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) // Página login como inicial
  },
  {
    path: 'tabs',
    loadChildren: () => import('./TabsMENU/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vista-notificacion',
    loadChildren: () => import('./vista-notificacion/vista-notificacion.module').then(m => m.VistaNotificacionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
