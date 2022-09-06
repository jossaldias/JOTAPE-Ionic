import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.page.html',
  styleUrls: ['./accesorios.page.scss'],
})
export class AccesoriosPage implements OnInit {

 

  public listarAccesorios =[{
    "nombreA":"Audifonos Razer Black",
    "precioA":55990,
    "imagenA":"audifonosrazer.png",
    "descripcionA":"¡Experimenta la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken X Lite no te pierdes ningún detalle y escuchas el audio tal y como fue diseñado por los creadores"

  },
  {
    "nombreA":"Audífonos in-ear inalámbricos Baseus W04 Pro black",
    "precioA":30990,
    "imagenA":"audifonosoidos.png",
    "descripcionA":"En la calle, en el colectivo o en la oficina, ten siempre a mano tus audífonos Baseus y ¡escápate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras."

  }
];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['folder/Home'])
  }

  verAccesorios(nombreA: String, precioA: Number, imagenA: String, descripcionA: String) {
    let url = `accesorios/${nombreA}/${precioA}/${imagenA}/${descripcionA}`;

    this.router.navigate([url])
    console.log(url)

  }
}
