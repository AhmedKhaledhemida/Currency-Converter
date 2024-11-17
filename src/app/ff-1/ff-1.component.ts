import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ff-1',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterLink],
  templateUrl: './ff-1.component.html',
  styleUrls: ['./ff-1.component.css'],
})
export class FF1Component implements OnInit {
  amount: string = ''; 
  fromCurrency: string = 'USD'; 
  toCurrency: string = 'EUR'; 
  convertedAmount: number | null = null;
  conversionRate: number | null = null;
  currencies: string[] = []; 
  currencyNames: { [key: string]: string } = {}; 

  private apiKey: string = 'DOoEDRN82iwuonBP0D54bpoJNbinu6wc'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCurrencyNames(); 
  }

  // Fetch all currency symbols from the API
  fetchCurrencyNames(): void {
    const symbolsUrl = 'https://api.apilayer.com/fixer/symbols';
    const headers = new HttpHeaders({
      apikey: this.apiKey,
    });

    this.http.get<any>(symbolsUrl, { headers }).subscribe(
      (response) => {
        if (response && response.symbols) {
          // Update the currencies array with all the symbols
          this.currencies = Object.keys(response.symbols);
        }
      },
      (error) => {
        console.error('Error fetching currency symbols:', error);
      }
    );
  }

  // Get the conversion rate from the API
  getConversionRate(): void {
    const parsedAmount = parseFloat(this.amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    const url = `https://api.apilayer.com/fixer/convert?to=${this.toCurrency}&from=${this.fromCurrency}&amount=${parsedAmount}`;
    const headers = { apikey: this.apiKey };

    this.http.get<any>(url, { headers }).subscribe(
      (response) => {
        if (response && response.result) {
          this.convertedAmount = response.result;
          this.conversionRate = response.info?.rate;
        }
      },
      (error) => {
        if (error.status === 429) {
          console.error('Too many requests. Please try again later.');
          alert('Too many requests. Please try again later.');
        } else {
          console.error('Error converting currency:', error);
        }
      }
    );
  }

  // Event handler for the Convert button click
  onConvertButtonClick(): void {
    this.getConversionRate(); 
  }

  // Event handler to ensure only numbers are entered in the input field
  onAmountChange(event: any): void {
    const inputValue = event.target.value;
    // Only numeric characters allowed
    this.amount = inputValue.replace(/[^0-9.]/g, ''); 
  }

  // Swap the selected currencies
  swapCurrencies(): void {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    // Recalculate conversion after swap
    this.getConversionRate(); 
  }
}
