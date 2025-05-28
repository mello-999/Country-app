import { Component, input } from '@angular/core';
import { country } from '../../interfaces/coutry.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<country[]>();


  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}



