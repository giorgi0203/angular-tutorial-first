import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  rates: Array<object> = [];
  ratesSize: number;

  constructor(
    private currencyService: CurrencyService
  ) {

  }

  ngOnInit() {
    const action = (value) => {
      console.log(value);

      this.rates.push(value);
    };
    const complete = (size) => {
      this.ratesSize = size;
    };
    const observable = this.currencyService.subscribe(action, complete);
  }



}
