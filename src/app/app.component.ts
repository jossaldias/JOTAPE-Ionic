import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Productos', url: '/listar-productos', icon: 'bag-handle' },
    // { title: 'Productos', url: '/producto', icon: 'bag' },

  ];

  constructor() { }
}
