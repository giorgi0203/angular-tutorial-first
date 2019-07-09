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
        // fetch(`https://api.exchangeratesapi.io/latest?symbols=${currency}`)
        //   .then(response => response.json())
        //   .then((res) => {
        //     console.log(res);
        //   });
      });
    };
  }
}
