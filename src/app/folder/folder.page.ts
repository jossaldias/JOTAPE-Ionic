import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public username: string;
  public password: string;
  public loggedIn: boolean = false; 

  constructor(private activatedRoute: ActivatedRoute) {}

  login() {
    
    if (this.username === 'José' && this.password === 'admin') {
    this.loggedIn = true;
    console.log('Inicio de sesión exitoso');
    } else {
      
      console.log('Error de inicio de sesión');
    }
  }

  ngOnInit() {
  }
}
