import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.page.html',
  styleUrls: ['./juegos.page.scss'],
})
export class JuegosPage implements OnInit {

  public listarJuegos = [
    {
      "nombreJ": "Skyrim",
      "precioJ": 29990,
      "imagenJ": "juego1.png",
      "descripcionJ": "Juego para niñasThe Elder Scrolls V: Skyrim es un ARPG del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks."
    },
    {
      "nombreJ": "Lego STAR WARS",
      "precioJ": 29990,
      "imagenJ": "juego2.png",
      "descripcionJ": "Lego Star Wars: The Skywalker Saga es un videojuego de Lego del género acción-aventura desarrollado por TT Games y distribuido por Warner Bros."
    },
    {
      "nombreJ": "Animal Crossing",
      "precioJ": 29990,
      "imagenJ": "juego3.png",
      "descripcionJ": "Animal Crossing: New Horizons es un videojuego de simulación social desarrollado y publicado por Nintendo para Nintendo Switch, cuya fecha de lanzamiento mundial fue el 20 de marzo de 2020. Es la novena entrega de la saga Animal Crossing."
    },
    {
      "nombreJ": "DonkeyKong",
      "precioJ": 29990,
      "imagenJ": "juego4.png",
      "descripcionJ": "Donkey Kong Country: Tropical Freeze ya se está preparando para el debut de la serie en Nintendo Switch!"
    },
    {
      "nombreJ": "Mario",
      "precioJ": 29990,
      "imagenJ": "juego5.png",
      "descripcionJ": "Super Mario Odyssey es un videojuego de plataformas en tres dimensiones para Nintendo Switch desarrollado y publicado por Nintendo que se lanzó el 27 de octubre de 2017"
    }

  ]

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['folder/Home'])
  }


  ngOnInit() {
  }
  verJuegos(nombreJ: String, precioJ: Number, imagenJ: String, descripcionJ: String) {
    let url = `producto-juegos/${nombreJ}/${precioJ}/${imagenJ}/${descripcionJ}`;

    this.router.navigate([url])
    console.log(url)
  }
}
