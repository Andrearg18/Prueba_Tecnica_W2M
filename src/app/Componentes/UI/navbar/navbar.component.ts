import { Component } from '@angular/core';
import { Heroe } from '../../../Modelos/heroe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  heroeBuscar!: Heroe;
  
  constructor() {}

  searchHeroes(algo:any){
    
  }
}
