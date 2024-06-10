import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../Servicios/heroe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListadoHeroesComponent } from '../listado-heroes/listado-heroes.component';
import { Heroe } from '../../Modelos/heroe';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevo-heroe',
  templateUrl: './nuevo-heroe.component.html',
  styleUrl: './nuevo-heroe.component.css'
})
export class NuevoHeroeComponent implements OnInit{
  form!: FormGroup;
  heroes!: Heroe[];

  nombre!: string;
  descripcion!: string;
  nacimiento!: string;
  imagen: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  ruta!: string;

  constructor(
    private _servicioHeroe: HeroeService,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<ListadoHeroesComponent>,
  ) {
    this.form = this._fb.group({
      ruta: ['', [Validators.required, Validators.maxLength(1000)]],
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', [Validators.required]],
      nacimiento: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }
  
  ngOnInit(): void {
    this.heroes = this._servicioHeroe.getHeroes();
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Realiza cualquier acción necesaria con el archivo seleccionado
    }
  }

  //CARGAR FOTO
  subirFoto(){
    if(this.ruta && this.ruta != ''){
      this.imagen = this.ruta;
    } 
  }

  //BORRAR FOTO
  borrarFoto(){
    this.ruta = '';
    this.imagen = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  }

  //CREAR NUEVO HEROE
  crear(): void {
    if(this.form.valid){

      const nuevoHeroe: Heroe = {
        id: 0,
        nombre: this.nombre,
        descripcion: this.descripcion,
        nacimiento: this.nacimiento,
        imagenUrl: this.imagen,
      }

      this._servicioHeroe.addHeroe(nuevoHeroe);
      console.log(nuevoHeroe.descripcion)
      
    }else{
      //ERROR
      alert("¡Datos no válidos!")
    }
    
    this._dialogRef.close();
  }

  //CANCELAR CREACION
  cancelar(): void {
    this._dialogRef.close();
  }
}
