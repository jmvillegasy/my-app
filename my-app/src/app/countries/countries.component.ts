import { Component, OnInit } from '@angular/core';
import { Country } from '@rw/models';
import * as countriesJson from './../../assets/countries.json';

@Component({
  selector: 'rw-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  selected: Country;
  countries: Country[];
  constructor() {
    //console.log(countries[10].capital);
    this.selected = countriesJson[10];
    //this.selected = countriesJson;
    /*this.selected = this.countries.filter(
      (country: Country) => (country.name = 'Peru')
    )[0];*/
    console.log(this.selected.currencies)
  }

  ngOnInit(): void {
  }

}
