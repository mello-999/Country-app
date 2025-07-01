import { HttpClient } from '@angular/common/http';
import { inject, Injectable, } from '@angular/core';

import { RESTCountry } from '../interfaces/rest.countries.interfaces';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { country } from '../interfaces/coutry.interface';
import { CountryMapper } from '../mappers/country.mapper';



const API_URL = 'https://restcountries.com/v3.1'


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, country[]>();
  private queryCacheCountry = new Map<string, country[]>();



  searchBycapital(query: string): Observable<country[]> {
    query = query.toLowerCase();


    if ( this.queryCacheCapital.has(query)) {
      return of( this.queryCacheCapital.get(query) ?? [] );
    }

    return this.http
         .get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
         .pipe(
          map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
          tap( counbtries => this.queryCacheCapital.set(query, counbtries) ),
          catchError((error) => {
            console.log('Error fetching ', error);

            return throwError(() => new Error(`No se pudo obtenenr capital con ese nombre ${ query }`))
          })
         );
  }


searchBycountry(query: string) {
  const url = `${API_URL}/name/${query}`;
  query = query.toLowerCase();


  if (this.queryCacheCountry.has(query) ) {
    return of( this.queryCacheCountry.get(query) ?? [] );
  }



  return this.http
       .get<RESTCountry[]>(url)
       .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap(countries => this.queryCacheCountry.set(query, countries)),
        delay(2000),
        catchError(error=>{
          console.log('Error fetching ', error);

          return throwError(() => new Error(`No se pudo obtenenr paises con ese nombre ${ query }`))
        })
       );
}

searchCountryByAlphaCode(code: string) {
  const url = `${API_URL}/alpha/${code}`;


  return this.http.get<RESTCountry[]>(url).pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        map( countries => countries.at(0) ),
        catchError((error) => {
          console.log('Error fetching ', error);


          return throwError(
            () => new Error(`No se pudo obtenenr paises con ese código ${code}`))
        })
       );
}


}



