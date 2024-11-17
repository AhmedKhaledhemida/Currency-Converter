import { Routes } from '@angular/router';
import { FF1Component } from './ff-1/ff-1.component';
import { FF3Component } from './ff-3/ff-3.component';
import { HomeComponent } from './home/home.component';
import { EURDetailsComponent } from './eur-details/eur-details.component';
import { USDDETAILSComponent } from './usd-details/usd-details.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ff1', component: FF1Component },
  {
    path: 'ff3',
    component: FF3Component,
  },
  {
    path: 'eur',
    component: EURDetailsComponent,
  },
  {
    path: 'usd',
    component: USDDETAILSComponent,
  },
  
  { path: 'details/:from/:to', component: CurrencyDetailsComponent },
];
