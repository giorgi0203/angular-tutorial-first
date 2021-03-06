import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  selectedShipping;

  constructor(
    private shippingService: ShippingService
  ) {
    this.shippingCosts = this.shippingService.getShippingPrice();
    this.selectedShipping = this.shippingService.getType();
  }
  selectShipping(value) {
    return this.shippingService.SelectType(value);
  }

  ngOnInit() {
  }

}
