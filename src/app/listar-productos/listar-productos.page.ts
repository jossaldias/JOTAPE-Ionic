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
      "imagen": "https://ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2020%2F02%2F28142808%2FAW32B4SMFRENTE.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=0e331b003182cee41aa3a8818491a5cb"
    },
    {
      "nombre": "Lavadora",
      "precio": 450000,
      "imagen": "https://home.ripley.cl/store/Attachment/WOP/D136/2000383288550/2000383288550-1.jpg"
    },
    {
      "nombre": "Refrigerador",
      "precio": 250000,
      "imagen": "data:image/jpeg;base64,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"
    },

  ];


  constructor(private router: Router) { }

  ngOnInit() {

  }

  goToHome() {
    this.router.navigate(['folder/Home'])
  }

  verProducto(nombre: String, precio: Number) {
    let url = `producto/${nombre}/${precio}`;

    this.router.navigate([url])
    console.log(url)
  }


}
