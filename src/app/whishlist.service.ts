import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  items = [];
  constructor() { }

  addToWhishlist(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  getItem(item) {
    return this.items.indexOf(item);
  }

  removeItem(id) {
    return this.items.splice(id, 1);
  }

  clearWhishlist() {
    this.items = [];

    return this.items;
  }

}
