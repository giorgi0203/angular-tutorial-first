import { Injectable } from '@angular/core';

import { data } from './rates';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  results;
  Observer;

  constructor() {
    this.results = this.transformObjectToArray(data.rates);
    this.Observer = new Observable(this.subscribe());
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

  subscribe() {
    return (subscriber) => {
      let i = 0;
      for (const item of this.results) {
        setTimeout(() => {
          subscriber.next(item);
        }, i * 300);
        i++;
      }
      setTimeout(() => {
        subscriber.complete();
      }, i * 500);
    };
  }
}
