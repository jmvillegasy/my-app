import { Component, OnInit } from '@angular/core';
import { Customer, Dish } from '../interfaces';
import { MenuService } from '../utils/menu.service';
import * as dishesJson from './../../assets/dishes.json';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name = 'Juan V';
  dish: Dish;
  customer: Customer;
  selected = '';

  dishes: Dish[] = dishesJson.dishes;

  constructor(public menuService: MenuService) {
    this.listDishes();
  }

  ngOnInit(): void { }

  listDishes(): void {
    this.dishes.forEach((dish, i) => {
      console.log(`${i + 1}: ${dish}`);
    })
  }

  select(name: string): void{
    this.selected = name;
  }

  send(name: string){
    const customer: Customer = {
      name: name,
      level: "regular"
    }
    this.menuService.customer = customer;
  }

}
