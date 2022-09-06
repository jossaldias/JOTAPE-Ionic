import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  public listarJuegos=[
    {
      "nombreJ":"Pokemon",
      "precioJ":1,
      "imagenJ":"play5.png",
      "descripcionJ":"Juego para niñas"
    }
  ]

  constructor(private router: Router) { }


  ngOnInit() {
  }
verJuegos(nombreJ:String,precioJ:Number,imagenJ:String,descripcionJ:String){
  let url = `juegos/${nombreJ}/${precioJ}/${imagenJ}/${descripcionJ}`;

  this.router.navigate([url])
    console.log(url)
}
}
