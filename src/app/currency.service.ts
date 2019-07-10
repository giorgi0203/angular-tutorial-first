import { Injectable } from '@angular/core';

import { data } from './currencies';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currencies;
  Observer;

  constructor(
    private httpClient: HttpClient
  ) {
    this.currencies = data;
    this.Observer = new Observable(this.subscribe());
  }

  getRate(base, symbols) {
    return new Observable((subscriber) => {
      const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
      // if we are converting to same base return empty object and rates will be undefined
      if (base === symbols) {
        subscriber.next({});
      } else {
        this.httpClient.get(url)
          .subscribe((val) => {
            subscriber.next(val);
          });
      }

    });
  }
  getRateSymbols() {
    return this.currencies;
  }

  subscribe() {
    return (subscriber) => {
      let i = 0;
      const size = this.currencies.length;
      from(this.currencies).subscribe((currency) => {
        this.httpClient.get(`https://api.exchangeratesapi.io/latest?symbols=${currency}`)
          .subscribe((val) => {
            i++;
            subscriber.next(val);
            if (i === size) {
              subscriber.complete();
            }
          });
      });
    };
  }
}
