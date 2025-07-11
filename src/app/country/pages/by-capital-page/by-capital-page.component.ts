
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';

import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';







@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
 })

export class ByCapitalPageComponent {

  CountryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam);


  countryResource = rxResource({
     request: () => ({ query: this.query() }),
     loader: ({ request }) => {
         console.log({ query: request.query });


       if ( !request.query ) return of([]);

       return this.CountryService.searchBycapital(request.query);
      },
   });

  }

















//   isLoading = signal(false)
//   isError = signal<string|null>(null)
//   countries = signal<country[]>([])



//   onSearch(query: string) {
//      if ( this.isLoading( ) ) return;

//      this.isLoading.set(true)
//      this.isError.set(null);

//      this.CountryService.searchBycapital(query)
//      .subscribe({
//       next: (countries) => {

//           this.isLoading.set(false);
//           this.countries.set(countries);

//       },
//       error: (err) => {

//         this.isLoading.set(false);
//         this.countries.set([]);
//         this.isError.set(err);
//       },
//     });
//   }

// }










