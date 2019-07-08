import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

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
      name: ['', [Validators.minLength(2)]],
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  onSubmit(costumerData) {
    console.warn('order has been submited ', costumerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  setDefault() {
    this.checkoutForm.patchValue({
      name: 'Jon Doe'
    });
  }

  clearCart() {
    console.warn('cart has been cleared');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.setDefault();
  }

  removeItem(itemId) {
    console.warn('item has been removed', this.items[itemId]);
    this.cartService.removeItem(itemId);
  }

  getFormDataAsString() {
    return JSON.stringify(this.checkoutForm.value);
  }

  ngOnInit() {
  }

}
