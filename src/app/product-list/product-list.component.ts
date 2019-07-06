import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { products } from '../products';
import { WhishlistService } from '../whishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(
    private whishlistService: WhishlistService
  ) {

  }

  products = products;

  share(name: string) {
    alert('the product: ' + name + ' has been shared');
  }

  addToWhishlist(product) {
    alert('the product: ' + product.name + ' has been added to Whishlist');
    if (!this.isInWhishlist(product)) {
      this.whishlistService.addToWhishlist(product);
    }
  }

  isInWhishlist(product) {
    return this.whishlistService.getItem(product) !== -1;
  }

  onNotify(name: string, price: number) {
    alert('the product: ' + name + ' cost is > ' + price);
  }

}
