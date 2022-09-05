import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.page.html',
  styleUrls: ['./consolas.page.scss'],
})
export class ConsolasPage implements OnInit {

  public listarProducto = [
    {
      "nombre": "Playstation 5",
      "precio": 679000,
      "imagen": "play5.png"
    },
    {
      "nombre": "XBox One",
      "precio": 450000,
      "imagen": "xbox1.png"
    },
    {
      "nombre": "Nintendo Switch",
      "precio": 419990,
      "imagen": "nswitch.png"
    },
    {
      "nombre": "Nintendo DS",
      "precio": 89990,
      "imagen": "dslite.png"
    },

  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['folder/Home'])
  }

  verProducto(nombre: String, precio: Number, imagen: String) {
    let url = `producto/${nombre}/${precio}/${imagen}`;

    this.router.navigate([url])
    console.log(url)
  }

}
