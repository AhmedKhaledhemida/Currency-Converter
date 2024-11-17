import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './currency-details.component.html',
  styleUrl: './currency-details.component.css',
})
export class CurrencyDetailsComponent implements OnInit {
  fromCurrency: string | null = null;
  toCurrency: string | null = null;
  conversionRate: number | null = null;
  currencies: string[] = []; 
  date: string | null = null;

  private apiKey: string = 'DOoEDRN82iwuonBP0D54bpoJNbinu6wc';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.fromCurrency = params.get('from');
      this.toCurrency = params.get('to');

      this.getExchangeRate(this.fromCurrency, this.toCurrency);
    });
  }

  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    console.log(`${year}-${month}-${day}`);

    return `${year}-${month}-${day}`;
  }
  getExchangeRate(from: string | null = null, to: string | null = null): void {
    if (from && to) {
      this.date = this.getCurrentDate();
      const url = `https://api.apilayer.com/fixer/${this.date}?symbols=${to}&base=${from} `;
      const headers = new HttpHeaders({
        apikey: this.apiKey,
      });

      this.http.get<any>(url, { headers }).subscribe(
        (response) => {
          if (response && response.rates) {
            this.conversionRate = response.rates[to];
          }
        },
        (error) => {
          if (error.status === 429) {
            console.error('Too many requests. Please try again later.', error);
          } else {
            console.error('Error converting currency:', error);
          }
        }
      );
    }
  }
}
