import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaNotificacionPageRoutingModule } from './vista-notificacion-routing.module';

import { VistaNotificacionPage } from './vista-notificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaNotificacionPageRoutingModule
  ],
  declarations: [VistaNotificacionPage]
})
export class VistaNotificacionPageModule {}
