import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../Modelos/heroe';
import { HeroeService } from '../../Servicios/heroe.service';
import { MatDialog } from '@angular/material/dialog';
import { NuevoHeroeComponent } from '../nuevo-heroe/nuevo-heroe.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrl: './listado-heroes.component.css'
})
export class ListadoHeroesComponent {
  listaHeroes!: Heroe[];
  nombreBuscar!: string;
  cargandoListado: boolean = false;
  sinResultados: boolean = false;

  constructor(
    private _servicioHeroe: HeroeService,
    private _dialog: MatDialog
  ) {}

  //Cargar lista sin continuar ejecucion
  async ngOnInit(): Promise<void> {
    this.cargandoListado = true;
    await this._servicioHeroe.cargarHeroes();
    this._cargarTodosHeroes();
    this.cargandoListado = false;
  }

  //ABRIR VENTANA CREAR HEROE
  agregarHeroe(): void{
    this._servicioHeroe.getHeroe(2)
    const dialogRef = this._dialog.open(NuevoHeroeComponent, {
      width: '50%px',
      height: '75.5%',
      disableClose: true,
      autoFocus: true
    })
  }

  //BSUCAR POR FILTRO NOMBRE
  async buscar(): Promise<void>{
    //No hay datos en el buscador, muestra lista original
    if(!this.nombreBuscar  || this.nombreBuscar === ''){
      this.sinResultados = false;
      this._cargarTodosHeroes();

    }else{
      //Si no, filtra por la busqueda
      this.listaHeroes = this.listaHeroes.filter(heroe => heroe.nombre.toLowerCase().includes(this.nombreBuscar.toLowerCase()));

      //Si no se encuentran resultados, muestra mensaje
      if(this.listaHeroes.length == 0){
        this.sinResultados = true;

      //Si hay, muestra los nombres con la primera mayuscula
      }else{
        this.listaHeroes.map(heroe => heroe.nombre = heroe.nombre.charAt(0).toUpperCase() + heroe.nombre.slice(1).toLowerCase())
      }
    }
  }

  //Metodo privado cargar lista original
  private _cargarTodosHeroes(): void{
    this.listaHeroes = this._servicioHeroe.getHeroes();
    this.listaHeroes.map(heroe => heroe.nombre = heroe.nombre.toUpperCase())
  }
}
