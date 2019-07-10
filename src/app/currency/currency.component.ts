import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { filter, map } from 'rxjs/operators';

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
      this.rates.push(value);
    };
    const complete = () => {
      this.ratesSize = this.rates.length;
    };
    const mapCallBack = ({ rates }) => {
      const currency = Object.keys(rates)[0];
      return { icon: '🏦', currency, value: rates[currency] };
    };
    const Observer = this.currencyService.Observer;
    const observable = Observer
      .pipe(map(mapCallBack))
      .subscribe({ next: action, complete });
  }



}
