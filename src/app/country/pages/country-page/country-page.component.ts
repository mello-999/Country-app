import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-page',
  imports: [],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);


  countryResource = rxResource({
     request: () => ({ code: this.countryCode }),
     loader: ({ request }) => {
        return this.countryService.searchCountryByAlphaCode(request.code)
},
  })

}
