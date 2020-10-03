import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '@rw/models';
import * as countriesJson from './../../assets/countries.json';

@Component({
    selector: 'rw-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
    providers: [UpperCasePipe],
})
export class CountriesComponent implements OnInit {
    selected: CountQueuingStrategy;
    countries: Country[];
    birthday = new Date();
    total = 123456.7897532;

    constructor(){
        this.selected = countriesJson[2];
        console.log(this.selected.currencies);
    }

    ngOnInit(): void {}

    send(name: string): void {
        console.log('Antes...', name);
        name = this.upperCasePipe.transform(name);
        console.log('Despues:::', name);
    }
}
