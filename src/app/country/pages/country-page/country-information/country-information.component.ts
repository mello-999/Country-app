import { Component, input, computed } from '@angular/core';
import { country } from '../../../interfaces/coutry.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<country>();


  currentYear = computed(() => {
           return new Date().getFullYear();
  });

 }
