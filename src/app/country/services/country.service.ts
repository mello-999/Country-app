import { HttpClient } from '@angular/common/http';
import { inject, Injectable, } from '@angular/core';

import { RESTCountry } from '../interfaces/rest.countries.interfaces';
import { map, Observable } from 'rxjs';
import { country } from '../interfaces/coutry.interface';
import { CountryMapper } from '../mappers/country.mapper';



const API_URL = 'https://restcountries.com/v3.1'


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchBycapital(query: string): Observable<country[]> {
    query = query.toLowerCase();

    return this.http
         .get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
         .pipe(
          map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp))
         );
  }

}



