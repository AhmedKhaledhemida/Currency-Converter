import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eur-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './eur-details.component.html',
  styleUrl: './eur-details.component.css'
})
export class EURDetailsComponent implements OnInit {
  baseCurrency: string = 'EUR';  
  amount: number = 1;  
  symbols: { [key: string]: string } = {}; 
  conversionRates: { [key: string]: number } = {};  

  private apiKey: string = 'DOoEDRN82iwuonBP0D54bpoJNbinu6wc';
  private symbolsUrl: string = 'https://api.apilayer.com/fixer/symbols';
  private convertUrl: string = 'https://api.apilayer.com/fixer/latest';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSymbols();
  }

  // Fetches list of all available currency symbols with their full names
  fetchSymbols(): void {
    const headers = new HttpHeaders().set('apikey', this.apiKey);
    
    this.http.get<any>(this.symbolsUrl, { headers }).subscribe(response => {
      if (response && response.symbols) {
        this.symbols = response.symbols;
        this.convertCurrencies();  // Once symbols are fetched, proceed with conversion
      }
    }, error => {
      console.error('Error fetching symbols:', error);
    });
  }

  // Fetches conversion rates from the base currency (USD) to all available currencies
  convertCurrencies(): void {
    const symbols = Object.keys(this.symbols).join(',');
    const headers = new HttpHeaders().set('apikey', this.apiKey);
    
    this.http.get<any>(`${this.convertUrl}?symbols=${symbols}&base=${this.baseCurrency}`, { headers })
      .subscribe(response => {
        if (response && response.rates) {
          this.conversionRates = response.rates;
        }
      }, error => {
        console.error('Error fetching conversion rates:', error);
      });
  }

  getCurrencies(): string[] {
    return Object.keys(this.symbols);
  }
  
}
