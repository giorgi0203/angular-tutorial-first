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
    const filterCallBack = ({ value }) => {
      return value > 2;
    };
    const mapCallBack = ({ currency, value }) => {
      return { icon: '🏦', currency, value };
    };
    const Observer = this.currencyService.Observer;
    const observable = Observer.filter(filterCallBack)
      .map(mapCallBack)
      .subscribe(action, complete);
  }



}
