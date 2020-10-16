import { Component, OnInit } from '@angular/core';
import { Customer, Dish } from '../interfaces';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name = 'Juan Villegas';

  dish: Dish;
  customer: Customer;

  dishes: Dish[] = [{
    name: 'Arroz con pollo',
    ingredients: [{
      name: 'Pollo', qty: 1
    },{
      name: 'Arroz', qty: 2
    },{
      name: 'Aderezo', qty: 1
    }]
  },{
    name: 'Chanfainita',
    ingredients: [{
      name: 'Tallarin', qty: 1
    },{
      name: 'Papa', qty: 2
    }]
  },{
    name: 'Ceviche',
    ingredients: [{
      name: 'Pescado', qty: 1
    },{
      name: 'Limon', qty: 2
    },{
      name: 'Cebolla', qty: 2
    },{
      name: 'Aji', qty: 1
    }]
  }];

  /*
  'Arroz con pollo',
    'Escabeche de Pollo',
    'Chanfainita',
    'Ceviche',
    'Cau-cau',
    'Pollo a la Brasa',
    'Tacu Tacu',
    'Tallarin Rojo'
  */

  constructor() {
    this.listDishes();
    this.customer = {
      name: 'Juan',
      level: true,
    }
  }

  ngOnInit(): void { }

  listDishes(): void {
    this.dishes.forEach((dish, i) => {
      console.log(`${i + 1}: ${dish}`);
    })
  }

}
