import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '@rw/models';
import * as countriesJson from './../../assets/countries.json';

@Component({
  selector: 'rw-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [UpperCasePipe]
})
export class CountriesComponent implements OnInit {
  selected: Country;
  countries: Country[];
  birthday = new Date();
  total = 1223456.555551;
  constructor(private upperCasePipe: UpperCasePipe) {
    //console.log(countries[10].capital);
    this.selected = countriesJson[2];
    //this.selected = countriesJson;
    /*this.selected = this.countries.filter(
      (country: Country) => (country.name = 'Peru')
    )[0];*/
    console.log(this.selected.currencies)
  }

  ngOnInit(): void {
  }

  send(name:string):void{
    console.log('Antes:::',name);
    name = this.upperCasePipe.transform(name);
    //name = name.toUpperCase();
    console.log('Despues:::',name);
  }

}
