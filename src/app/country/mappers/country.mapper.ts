import type { country } from "../interfaces/coutry.interface";
import type{ RESTCountry } from "../interfaces/rest.countries.interfaces";



 export class CountryMapper {

  static mapRestCountryToCountry(restCountry: RESTCountry): country {
    return {
      capital: restCountry.capital ?.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No spanish Name',
      population: restCountry.population,

      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
  }


static mapRestCountryArrayToCountryArray(
  restCountries: RESTCountry[]
 ): country[] {

    return restCountries.map( this.mapRestCountryToCountry )
  }
}




