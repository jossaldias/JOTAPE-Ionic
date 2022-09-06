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
      "imagen": "play5.png",
      "descripcion": "La consola PS5¿ hace posibles nuevas formas de juego que jamás habías imaginado.Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica, gatillos adaptativos y audio 3D, además de una generación completamente nueva de juegos de PlayStation®."
    },
    {
      "nombre": "XBox One",
      "precio": 450000,
      "imagen": "xbox1.png",
      "descripcion": "Consola de nueva generación. Juegos de nueva generación. Embárcate en una nueva generación de aventuras con juegos como; Forza Horizon 5, Microsoft Flight Simulator, Far Cry 6 y los próximos lanzamientos de Battlefield 2042 y Halo Infinite de la forma en que deben experimentarse, solo en Xbox Series X.Xbox Series X es la Xbox más rápida y potente de la historia, que ofrece velocidades de cuadro sensacionalmente suaves de hasta 120 FPS con el pop visual de HDR. Sumérgete en personajes más nítidos, mundos más brillantes y detalles imposibles con juegos 4K reales.Potencia tus sueños."
    },
    {
      "nombre": "Nintendo Switch",
      "precio": 419990,
      "imagen": "nswitch.png",
      "descripcion": "Nintendo Switch combina la potencia de una consola para el hogar con la movilidad de una consola portátil. Una nueva era para los videojuegos que te ofrece nuevas maneras de jugar, donde quieras, como quieras, cuando quieras."
    },
    {
      "nombre": "Nintendo DS",
      "precio": 89990,
      "imagen": "dslite.png",
      "descripcion": "Es una videoconsola portátil de la multinacional de origen japonés, Nintendo, creada para suceder a la Game Boy Advance. Permitía la reproducción de videojuegos y multimedia, pertenece a la séptima generación cuyo rival directo fue la PlayStation Portable. Fue la tercera consola para videojuegos en que podemos interactuar con el juego mediante el uso de la pantalla táctil."
    },

  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['folder/Home'])
  }

  verProducto(nombre: String, precio: Number, imagen: String, descripcion: String) {
    let url = `producto/${nombre}/${precio}/${imagen}/${descripcion}`;

    this.router.navigate([url])
    console.log(url)
  }

}
