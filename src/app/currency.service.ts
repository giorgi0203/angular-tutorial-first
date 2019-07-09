import { Injectable } from '@angular/core';

import { data } from './rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  results;
  Observer;

  constructor() {
    this.results = this.transformObjectToArray(data.rates);
    this.Observer = {
      results: this.results,
      filter: this.filter,
      subscribe: this.subscribe,
      map: this.map
    };
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

  filter(cb) {
    this.results = this.results.filter(cb);
    return this;
  }
  map(cb) {
    this.results = this.results.map(cb);
    return this;
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
