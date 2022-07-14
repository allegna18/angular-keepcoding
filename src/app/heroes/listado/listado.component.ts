import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=["Spiderman","IronMan","Thor","Hulk","Capitan America","AntMan"];
  heroeBorrado:string | undefined;
  heroesBorrados:string[]=[];

  borrarHeroe():void{
    //this.heroes.pop();
    this.heroeBorrado=this.heroes.shift();
    this.heroesBorrados.push( String(this.heroeBorrado) );
  }

  ordenarHeroe():void{
    this.heroes.sort();
  }

  //tarea
  /*Crear un array de heroes borrados y mostrarlos
  en tiempo real al borrar cada heroe*/





}



