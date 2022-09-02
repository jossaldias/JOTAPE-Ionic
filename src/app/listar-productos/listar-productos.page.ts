import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {


  public listarProducto = [
    {
      "nombre": "Televisor",
      "precio": 300000,
      "imagen": "tele.png"
    },
    {
      "nombre": "Lavadora",
      "precio": 450000,
      "imagen": "lavadora.jpg"
    },
    {
      "nombre": "Refrigerador",
      "precio": 250000,
      "imagen": "refri.png"
    },
    {
      "nombre": "Refrigerador",
      "precio": 250000,
      "imagen": "refri.png"
    },
    {
      "nombre": "Refrigerador",
      "precio": 250000,
      "imagen": "refri.png"
    },
    {
      "nombre": "Refrigerador",
      "precio": 250000,
      "imagen": "refri.png"
    },
    {
      "nombre": "Refrigerador",
      "precio": 250000,
      "imagen": "refri.png"
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
