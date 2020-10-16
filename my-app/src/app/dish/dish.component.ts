import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../interfaces/dish.interfaces';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  //@Input() name = 'ceviche';
  private _name: string;
  private _totalIngredients: number;
  
  @Input() set dish(value:Dish){
    console.log(value);
    this._name = this.generateName(value.name);
    this._totalIngredients = value.ingredients.length;
  }

  get name(): string{
    return this._name;
  }

  get totalIngredients(): number{
    return this._totalIngredients;
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
