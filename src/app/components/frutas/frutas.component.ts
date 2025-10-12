import { Component } from '@angular/core';

@Component({
  selector: 'app-frutas',
  imports: [],
  templateUrl: './frutas.component.html',
  styleUrl: './frutas.component.css'
})
export class FrutasComponent {

  frutas: string[] = ['Manzana', 'Banana', 'Cereza', 'Dátil', 'Elderberry'];

  method() {
    console.log(this.frutas);
    console.log(this.frutas.length);
    console.log(this.frutas[2]);
  }

  AllFruits() {
    this.frutas.forEach(fruta => {
      console.log(fruta);
    });
  }

  insertNewFruit() {
    this.frutas.push('Fresa');
    console.log(this.frutas);
  }

  deleteFruit() {
    this.frutas.pop();
    console.log(this.frutas);
  }

  findFruit(fruit: string) {
    const resultado = this.frutas.find(fruta => fruta === fruit);
    console.log(resultado);
  }
}
