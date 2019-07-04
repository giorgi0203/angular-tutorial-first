import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = products;

  share(name: string) {
    alert('the product: ' + name + ' has been shared');
  }

  onNotify(name: string, price: number) {
    alert('the product: ' + name + ' cost is > ' + price);
  }

}
