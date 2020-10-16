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
  
  dishes = [
    'Arroz con pollo',
    'Escabeche de Pollo',
    'Chanfainita',
    'Ceviche',
    'Cau-cau',
    'Pollo a la Brasa',
    'Tacu Tacu',
    'Tallarin Rojo'
  ];

  constructor() {
    this.listDishes();
  }

  ngOnInit(): void {}

  listDishes():void {
    this.dishes.forEach((dish,i)=>{
      console.log(`${i+1}: ${dish}`);
    })
  }

}
