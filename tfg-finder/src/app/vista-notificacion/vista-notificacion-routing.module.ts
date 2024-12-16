import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaNotificacionPage } from './vista-notificacion.page';

const routes: Routes = [
  {
    path: '',
    component: VistaNotificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaNotificacionPageRoutingModule {}
