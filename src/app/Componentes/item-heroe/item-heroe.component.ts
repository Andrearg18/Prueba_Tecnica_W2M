import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../Modelos/heroe';
import { HeroeService } from '../../Servicios/heroe.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallesHeroeComponent } from '../detalles-heroe/detalles-heroe.component';

@Component({
  selector: 'app-item-heroe',
  templateUrl: './item-heroe.component.html',
  styleUrl: './item-heroe.component.css'
})
export class ItemHeroeComponent{
  @Input() heroe!: Heroe;

  constructor(
    private _servicioHeroe: HeroeService,
    private _dialog: MatDialog
  ){}
}
