import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../interfaces/dish.interfaces';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  private _name: string;
  private _totalIngredients: number;
  private _stockDish: boolean;
  
  @Input() set dish(value:Dish){
    console.log(value);
    this._name = this.generateName(value.name);
    this._totalIngredients = value.ingredient.length;
    this._stockDish = value.stock;
  }

  get name(): string{
    return this._name;
  }

  get totalIngredients(): number{
    return this._totalIngredients;
  }

  get stockDish(): boolean{
    return this._stockDish;
  }
  
  @Output() choose: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  generateName(name:string):string {
    return `${name}`
  }
  
  notify(name: string): void{
    this.choose.emit(name);
  }

}
