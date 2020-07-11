import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyeccionPageRoutingModule } from './proyeccion-routing.module';

import { ProyeccionPage } from './proyeccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyeccionPageRoutingModule
  ],
  declarations: [ProyeccionPage]
})
export class ProyeccionPageModule {}
