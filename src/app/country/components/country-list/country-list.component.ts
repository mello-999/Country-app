import { Component, input } from '@angular/core';
import { country } from '../../interfaces/coutry.interface';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<country[]>()
}



