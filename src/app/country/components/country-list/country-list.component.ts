import { Component, input } from '@angular/core';
import { country } from '../../interfaces/coutry.interface';


@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<country[]>()
}



