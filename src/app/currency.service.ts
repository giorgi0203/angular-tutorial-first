import { Injectable } from '@angular/core';

import { data } from './rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;

  constructor() {
    this.result = data.rates;
  }

  subscribe(next, complete) {
    let i = 0;
    const keys = Object.keys(this.result);
    const size = keys.length;
    for (const key of keys) {
      const value = this.result[key];
      const item = {
        currency: key,
        value
      };
      setTimeout(() => {
        next(item);
      }, i * 200);
      i++;
    }
    setTimeout(() => {
      complete(size);
    }, i * 500);
  }
}
