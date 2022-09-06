import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoJuegosPageRoutingModule } from './producto-juegos-routing.module';

import { ProductoJuegosPage } from './producto-juegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoJuegosPageRoutingModule
  ],
  declarations: [ProductoJuegosPage]
})
export class ProductoJuegosPageModule {}
