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
      console.log(value);

      this.rates.push(value);
    };
    const complete = () => {
      this.ratesSize = this.rates.length;
    };
    const filterCallBack = ({ value }) => {
      return value > 2;
    };
    const mapCallBack = ({ currency, value }) => {
      return { icon: '🏦', currency, value };
    };
    const Observer = this.currencyService.Observer;
    const observable = Observer
      .pipe(filter(filterCallBack), map(mapCallBack))
      .subscribe(action, complete);
  }



}
