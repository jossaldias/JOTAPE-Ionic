import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoaccesoriosPageRoutingModule } from './productoaccesorios-routing.module';

import { ProductoaccesoriosPage } from './productoaccesorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoaccesoriosPageRoutingModule
  ],
  declarations: [ProductoaccesoriosPage]
})
export class ProductoaccesoriosPageModule {}
