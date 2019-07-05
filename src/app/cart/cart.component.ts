import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    console.log(this.cartService);

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(costumerData) {
    console.warn('order has been submited ', costumerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  setDefault() {
    this.checkoutForm.get('name').setValue('John Doe');
    this.checkoutForm.get('address').setValue('kyiv');
  }

  getFormDataAsString() {
    return JSON.stringify(this.checkoutForm.value);
  }

  ngOnInit() {
  }

}
