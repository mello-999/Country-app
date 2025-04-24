import {  Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";


export const countryRoutes: Routes = [

  {
    path:'',
    component: ByCapitalPageComponent,
    // component: HomePageComponent,
  },

  // {
  //   path: 'country',
  //   /// ??? {}

  // },

  // {
  //   path:'**',
  //   redirectTo: '',
  // },


  ];

export default countryRoutes;

