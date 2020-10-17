import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer.interfaces';
import { Dish } from '../interfaces/dish.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  customer : Customer;

  constructor() { }

  check(dishes: Dish[]): number{
    return 10;
  }
}
