import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block',
      })),
      state('close', style({
        display: 'none',
      })),
      transition('*=>*', animate(200))
    ])
  ]
})
export class LoaderComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  openLoader() {
    this.isOpen = true;
  }
  closeLoader() {
    this.isOpen = false;
  }

}
