import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyeccionPage } from './proyeccion.page';

const routes: Routes = [
  {
    path: '',
    component: ProyeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyeccionPageRoutingModule {}
