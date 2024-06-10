import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Heroe } from '../Modelos/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService{
  private api = 'https://akabab.github.io/superhero-api/api';
  private listaHeroes: Heroe[] = [];

  constructor(private http: HttpClient) {}  

  //METODO ASINCROMO PARA CARGAR HEROES
  public async cargarHeroes(): Promise<void> {
    //Comprobar que la lista no este cargada aun
    if(this.listaHeroes.length == 0){
      try {
        const response = await this.http.get<any[]>(this.api + '/all.json').toPromise();
        
        if (response){
          this.listaHeroes = response.map(e => new Heroe(
            e.id,
            e.biography.fullName,
            e.work.occupation,
            e.biography.placeOfBirth,
            e.images.sm
          ));
        }
  
      } catch (error) {
        console.error('Error al obtener los heroes:', error);
      }

      //Agregar otros heroes de prueba por si no cargan bien los datos de la api
      this._agregarHeroesEjemplo();
    }
  }

  //LISTAR HERORES
  public getHeroes(): Heroe[]{
    return this.listaHeroes;
  }
  
  //BUSCAR HEROE
  public getHeroe(id: number): Heroe {
    return this.listaHeroes.find(h => h.id === id) as Heroe;
  }

  //AGREGAR HEROE
  public addHeroe(heroe: Heroe): void{
    heroe.id = this.getHeroes().length + 1;
    this.listaHeroes.push(heroe);
  }

  //BORRAR HEROE
  public deleteHeroe(id: number): void{
    let indexHeore = this.listaHeroes.findIndex(h => h.id === id);
    this.listaHeroes.splice(indexHeore, 1);
  }

  //EDITAR HEROE
  public editarHeroe(heroe: Heroe){
    let indexHeore = this.listaHeroes.findIndex(h => h.id === heroe.id);
    this.listaHeroes.splice(indexHeore, 1, heroe);
  }


  //Agregar datos de prueba
  private _agregarHeroesEjemplo(): void{
    let lengthLista = this.listaHeroes.length || 0;

    let heroeEjemplo1: Heroe = new Heroe(
      lengthLista++, 
      'Hogun', 
      'Excelente combatiente cuerpo a cuerpo y caballero, excelente guerrero, fuerza sobrehumana, velocidad, resistencia, durabilidad y curación factor de extendido la vida útil.',
      'Habilidades sobrehumanas', 
      '../../assets/images/heroe_ejemplo1.png'
    )
    let heroeEjemplo2: Heroe = new Heroe(
      lengthLista++, 
      'Kamala Khan', 
      'Puede generar, crear y proyectar construcciones de la luz dura de cualquier cosa que pueda imaginar. Khan es capaz de crear puños y pies gigantes para golpear a sus enemigos.',
      'Construcciones de luz dura.', 
      '../assets/images/heroe_ejemplo2.png'
    )
    let heroeEjemplo3: Heroe = new Heroe(
      lengthLista++, 
      'Fantomex', 
      'Es un humano evolucionado artificialmente, un mutante diseñado con tres cerebros para el procesamiento paralelo independiente y "sangre nano-activa".',
      'Crear ilusiones realistas.', 
      '../assets/images/heroe_ejemplo3.png'
    )
    let heroeEjemplo4: Heroe = new Heroe(
      lengthLista++, 
      'Encantadora', 
      'Uso de magia y hechicería. Fuerza, velocidad, agilidad, resistencia, durabilidad e invulnerabilidad sobrehumana. Manipulación de las emociones y proyección de energía. Telequinesis y elepatía.',
      'Hechicera.', 
      '../assets/images/heroe_ejemplo4.png'
    )

    this.listaHeroes.push(heroeEjemplo1, heroeEjemplo2, heroeEjemplo3, heroeEjemplo4)
  }
}