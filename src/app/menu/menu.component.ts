import { Component, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(-300px)',

      })),
      state('close', style({
        transform: 'translateX(0)',
      })),
      transition('*=>*', animate(200))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  public openMenu() {
    this.isOpen = true;
  }
  closeMenu() {
    this.isOpen = false;
  }

}
