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
    this.calcSum();
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
      this.readValue();
    }
  }

  allSet() {
    return (this.base !== undefined || this.symbol !== undefined) && (this.baseValue || this.symbolValue);
  }

  readValue() {
    this.currencyService.getRate(this.base, this.symbol).subscribe({
      next: ({ rates }) => {
        if (this.base !== this.symbol) {
          this.symbolRate = rates[Object.keys(rates)[0]];
          if (this.lastChange === 'Base') {
            this.result = this.baseValue * this.symbolRate;
          } else if (this.lastChange === 'Symbol') {
            this.result = this.symbolValue / this.symbolRate;
          }
        } else { this.result = this.baseValue; }

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
    // reset sum
    this.sum = 0;
    for (const [index, curr] of this.currencyList.entries()) {
      if (curr.symbol !== '') {
        this.currencyService.getRate(curr.symbol, this.base).subscribe({
          next: ({ rates }) => {
            if (rates) {
              this.currencyList[index].symbolrate = rates[Object.keys(rates)[0]];
              this.sum += curr.symbolrate * curr.value;
            } else {
              this.currencyList[index].symbolrate = 1;
              this.sum += curr.symbolrate * curr.value;
            }
          },
        });
      }
    }
  }

  removeCurrency(index) {
    this.currencyList.splice(index, 1);
    this.calcSum();
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
