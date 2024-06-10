import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../Modelos/heroe';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../Servicios/heroe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { VentanaConfirmacionComponent } from '../ventana-confirmacion/ventana-confirmacion.component';

@Component({
  selector: 'app-detalles-heroe',
  templateUrl: './detalles-heroe.component.html',
  styleUrl: './detalles-heroe.component.css'
})
export class DetallesHeroeComponent implements OnInit{
  heroe!: Heroe;
  form!: FormGroup;
  rutaDefecto:string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servicioHeroe: HeroeService,
    private _fb: FormBuilder,
    private _location: Location,
    private _dialog: MatDialog
    ) {
      this.form = this._fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(50)]],
        imagen: ['', [Validators.required, Validators.maxLength(1000)]],
        descripcion: ['', [Validators.required]],
        nacimiento: ['', [Validators.required, Validators.maxLength(100)]],
      });
    }

    //Recoger datos del heroe para copiarlos 
    ngOnInit(): void {
      let idRecogido = this._activatedRoute.snapshot.paramMap.get('id');
      
      if (idRecogido) {
        let heroeCopiar: Heroe = this.heroe = this._servicioHeroe.getHeroe(parseInt(idRecogido))
        this.heroe = new Heroe(heroeCopiar.id, heroeCopiar.nombre, heroeCopiar.descripcion, heroeCopiar.nacimiento, heroeCopiar.imagenUrl)
      }
    }

    //BORRAR FOTO
    borrarFoto(){
      this.heroe.imagenUrl = '';
    }

    //ELIMINAR HEROE
    borrar(): void{
      const dialogRef = this._dialog.open(VentanaConfirmacionComponent);

      dialogRef.afterClosed().subscribe(resultado => {
        if(resultado && this.heroe){
          this._servicioHeroe.deleteHeroe(this.heroe.id);
          this._location.back();
        }
      })
    }

    //GUARDAR CAMBIOS 
    guardar(){
      if(this.form.valid){
        this._servicioHeroe.editarHeroe(this.heroe);
        
      }else{
        alert("¡Datos no válidos!")
      }
      
      this._location.back();
    }
  
    //CANCELAR CAMBIO
    cancelar(): void {
      this._location.back();
    }
}
