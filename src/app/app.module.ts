import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemHeroeComponent } from './Componentes/item-heroe/item-heroe.component';
import { NuevoHeroeComponent } from './Componentes/nuevo-heroe/nuevo-heroe.component';
import { DetallesHeroeComponent } from './Componentes/detalles-heroe/detalles-heroe.component';
import { NavbarComponent } from './Componentes/UI/navbar/navbar.component';
import { ListadoHeroesComponent } from './Componentes/listado-heroes/listado-heroes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { VentanaConfirmacionComponent } from './Componentes/ventana-confirmacion/ventana-confirmacion.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ItemHeroeComponent,
    NuevoHeroeComponent,
    DetallesHeroeComponent,
    NavbarComponent,
    ListadoHeroesComponent,
    VentanaConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
