import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {


  nombre = "";
  precio = "";


  constructor(private activeRuta: ActivatedRoute) {

    this.nombre = this.activeRuta.snapshot.paramMap.get('nombre');

    console.log(this.activeRuta.snapshot)


  }

  ngOnInit() {

  }


}
