import { Injectable } from '@angular/core';

import { data } from './rates';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  results;
  Observer;

  constructor() {
    this.results = this.transformObjectToArray(data.rates);
    this.Observer = from(this.results);
  }

  transformObjectToArray(obj) {
    const items = [];
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];
      const item = {
        currency: key,
        value
      };
      items.push(item);
    }
    return items;
  }

  subscribe(next, complete) {
    let i = 0;
    const size = this.results.length;
    for (const item of this.results) {
      setTimeout(() => {
        next(item);
      }, i * 300);
      i++;
    }
    setTimeout(() => {
      complete(size);
    }, i * 200);
  }
}
