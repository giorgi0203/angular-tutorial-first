import { Component, OnInit, Input, Output } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { map, filter } from 'rxjs/operators';
type CurrencyType = 'Base' | 'Symbol';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  rates = [];
  base = 'USD';
  symbol = 'EUR';
  lastChange: CurrencyType = 'Base';
  currencyList = [];

  baseValue = 0;
  symbolValue = 0;

  symbolRate = 0;

  result = 0;
  sum = 0;

  constructor(
    private currencyService: CurrencyService
  ) {
    this.rates = currencyService.getRateSymbols();
    if (this.allSet()) {
      this.readValue();
    }
  }

  currChange(value, type: CurrencyType) {
    if (type === 'Base') {
      this.base = value;
    } else if (type === 'Symbol') {
      this.symbol = value;
    }
    if (this.allSet()) {
      this.readValue();
    }
  }

  currValChange(value, type: CurrencyType) {
    if (type === 'Base') {
      this.baseValue = value;
      this.lastChange = 'Base';
    } else if (type === 'Symbol') {
      this.symbolValue = value;
      this.lastChange = 'Symbol';
    }
    if (this.allSet()) {
      console.log('all Set');
      this.readValue();
    }
  }

  allSet() {
    return (this.base !== undefined || this.symbol !== undefined) && (this.baseValue || this.symbolValue);
  }

  readValue() {
    this.currencyService.getRate(this.base, this.symbol).subscribe({
      next: ({ rates }) => {
        this.symbolRate = rates[Object.keys(rates)[0]];
        if (this.lastChange === 'Base') {
          this.result = this.baseValue * this.symbolRate;
        } else if (this.lastChange === 'Symbol') {
          this.result = this.symbolValue / this.symbolRate;
        }
      }
    });
  }


  changeSumElementSymbol(index, symbol) {
    this.currencyList[index].symbol = symbol;
    this.calcSum();
  }
  changeSumElementValue(index, value) {
    this.currencyList[index].value = value;
    this.calcSum();
  }

  calcSum() {
    let i = 0;
    // console.log(this.currencyList);
    for (const curr of this.currencyList) {
      this.currencyService.getRate(curr.symbol, this.symbol).subscribe({
        next: ({ rates }) => {
          this.currencyList[i].symbolrate = rates[Object.keys(rates)[0]];
          this.sum += curr.symbolrate * curr.value;
          // console.log(this.sum);
          i++;
        },
      });
    }
  }

  addCurrency() {
    this.currencyList.push({
      value: 0,
      symbol: '',
      symbolrate: 0
    });
  }

  ngOnInit() {

  }

}
