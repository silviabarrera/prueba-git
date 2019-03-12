import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
//la barra de navegacion comienza cerrada
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }
  
  toggleNavbar() {
    // si estaba abierta, colocar que pase a cerrada
    this.navbarOpen = !this.navbarOpen;
  }

}
