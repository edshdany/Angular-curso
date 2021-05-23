import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})


export class ListadoComponent {

  heroes: string [] = ['spider', 'lovesno wey', 'el hielo man', 'el cabron del ojo chueco', 'el putasos locos'];

  heroeborrado: string = '';

  BorrarHeroe(){
    console.log('Borrando');

    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado);

    this.heroeborrado = this.heroes.shift() || '';
  }



}
