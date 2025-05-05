import type { country } from "../interfaces/coutry.interface";
import type{ RESTCountry } from "../interfaces/rest.countries.interfaces";



 export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RESTCountry): country {
    return {
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      population: restCountry.population
    };
  }


static mapRestCountryArrayToCountryArray(
  restCountries: RESTCountry[]
 ): country[] {

    return restCountries.map( this.mapRestCountryToCountry )
  }
}




