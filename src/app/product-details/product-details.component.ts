import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { WhishlistService } from '../whishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private whishlistService: WhishlistService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    alert('item added to cart');
    if (!this.isInCart(product)) {
      this.cartService.addToCart(product);
    }
  }

  addToWhishlist(product) {
    alert('the product: ' + product.name + ' has been added to Whishlist');
    if (!this.isInWhishlist(product)) {
      this.whishlistService.addToWhishlist(product);
    }
  }

  isInCart(product) {
    return this.cartService.getItem(product) !== -1;
  }
  isInWhishlist(product) {
    return this.whishlistService.getItem(product) !== -1;
  }

}
