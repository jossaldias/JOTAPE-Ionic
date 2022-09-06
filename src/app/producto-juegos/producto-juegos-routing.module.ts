import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoJuegosPage } from './producto-juegos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoJuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoJuegosPageRoutingModule {}
