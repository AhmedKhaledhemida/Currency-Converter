import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from './navabar/navabar.component';

import { FF1Component } from './ff-1/ff-1.component';

import { FF3Component } from './ff-3/ff-3.component';
import { HomeComponent } from './home/home.component';

import { EURDetailsComponent } from './eur-details/eur-details.component';
import { USDDETAILSComponent } from './usd-details/usd-details.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavabarComponent,
    FF1Component,
    FF3Component,
    HomeComponent,
 
    EURDetailsComponent,
    USDDETAILSComponent,
    CurrencyDetailsComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})

export class AppComponent {
  title = 'banquemisr.challenge05';
}
