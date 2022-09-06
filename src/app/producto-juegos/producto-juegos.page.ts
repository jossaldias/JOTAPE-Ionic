import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-juegos',
  templateUrl: './producto-juegos.page.html',
  styleUrls: ['./producto-juegos.page.scss'],
})
export class ProductoJuegosPage implements OnInit {


  nombreJ;
  precioJ;
  imagenJ;
  descripcionJ;

  constructor(private activeRuta: ActivatedRoute ) { }

  ngOnInit() {
    this.nombreJ = this.activeRuta.snapshot.paramMap.get('nombreJ');
    this.precioJ = this.activeRuta.snapshot.paramMap.get('precioJ');
    this.imagenJ = this.activeRuta.snapshot.paramMap.get('imagenJ');
    this.descripcionJ = this.activeRuta.snapshot.paramMap.get('descripcionJ');
  }

}
