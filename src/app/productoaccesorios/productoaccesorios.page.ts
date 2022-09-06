import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productoaccesorios',
  templateUrl: './productoaccesorios.page.html',
  styleUrls: ['./productoaccesorios.page.scss'],
})
export class ProductoaccesoriosPage implements OnInit {

  nombreA;
  precioA;
  imagenA;
  descripcionA;

  constructor(private activeRuta: ActivatedRoute ) { }

  ngOnInit() {
    this.nombreA = this.activeRuta.snapshot.paramMap.get('nombreA');
    this.precioA = this.activeRuta.snapshot.paramMap.get('precioA');
    this.imagenA = this.activeRuta.snapshot.paramMap.get('imagenA');
    this.descripcionA = this.activeRuta.snapshot.paramMap.get('descripcionA');
  }

}
