import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'consolas',
    loadChildren: () => import('./consolas/consolas.module').then(m => m.ConsolasPageModule)
  },
  {
    path: 'producto/:nombre/:precio/:imagen/:descripcion',
    loadChildren: () => import('./producto/producto.module').then(m => m.ProductoPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'producto-juegos/:nombreJ/:precioJ/:imagenJ/:descripcionJ',
    loadChildren: () => import('./producto-juegos/producto-juegos.module').then( m => m.ProductoJuegosPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
