import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {
  }

  addToCart(product: any) {
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

  clearCart() {
    this.items = [];

    return this.items;
  }

  getShippingPrice() {
    console.log(this.http.get('/assets/shipping.json'));

    return this.http.get('/assets/shipping.json');
  }
}
