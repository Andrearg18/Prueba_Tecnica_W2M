import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoHeroesComponent } from './Componentes/listado-heroes/listado-heroes.component';
import { DetallesHeroeComponent } from './Componentes/detalles-heroe/detalles-heroe.component';

const routes: Routes = [
  {path: '', component: ListadoHeroesComponent},
  {path: 'detalles/:id', component: DetallesHeroeComponent},
  {path: '**', component: ListadoHeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
