import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'storefront' },
    { title: 'Consolas', url: '/consolas', icon: 'desktop' },
    { title: 'Juegos', url: '/consolas', icon: 'game-controller' },
    { title: 'Accesorios', url: '/consolas', icon: 'watch' },


  ];

  constructor() { }
}
