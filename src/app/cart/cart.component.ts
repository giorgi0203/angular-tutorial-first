import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { zip } from 'rxjs';

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

    this.checkoutForm = this.formBuilder.group({
      name: ['', [this.forbiddenName(), Validators.minLength(4)]],
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }, {
          validators: this.crossValidation
        })
    });
  }

  static isZipValid(zip) {
    if (zip) {
      return zip.length < 3;
    } else {
      return false;
    }
  }
  static isCityValid(city) {
    return city && city[0].toLowerCase() === 'a';
  }

  crossValidation(formGroup) {
    const zip = formGroup.get('zip').value;
    const zipStatus = CartComponent.isZipValid(zip);

    const city = formGroup.get('city').value;
    const cityStatus = CartComponent.isCityValid(city);

    const valResult = {
      zipStatus,
      cityStatus
    };
    return valResult.cityStatus && valResult.zipStatus ? null : valResult;
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Giorgi' ? {
        forbiddenName: {
          isValid: true
        }
      } : null;
    };
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

  get name() {
    return this.checkoutForm.get('name') as FormControl;
  }


  get address(): FormGroup {
    return this.checkoutForm.get('address') as FormGroup;
  }

  get street(): FormControl {
    return this.checkoutForm.get('address').get('street') as FormControl;
  }

  get city(): FormControl {
    return this.checkoutForm.get('address').get('city') as FormControl;
  }
  get zip(): FormControl {
    return this.checkoutForm.get('address').get('zip') as FormControl;
  }
  get state(): FormControl {
    return this.checkoutForm.get('address').get('state') as FormControl;
  }
  ngOnInit() {
  }

}
