import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {


  nombre;
  precio;


  constructor(private activeRuta: ActivatedRoute) {



  }

  ngOnInit() {
    
    this.nombre = this.activeRuta.snapshot.paramMap.get('nombre');
    this.precio = this.activeRuta.snapshot.paramMap.get('precio');



  }


}
