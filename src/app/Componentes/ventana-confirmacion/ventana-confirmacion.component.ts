import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ventana-confirmacion',
  templateUrl: './ventana-confirmacion.component.html',
  styleUrl: './ventana-confirmacion.component.css'
})
export class VentanaConfirmacionComponent {
  constructor(public dialogRef: MatDialogRef<VentanaConfirmacionComponent>) {}

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
