import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoaccesoriosPage } from './productoaccesorios.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoaccesoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoaccesoriosPageRoutingModule {}
