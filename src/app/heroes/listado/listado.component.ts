import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado: string='';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
