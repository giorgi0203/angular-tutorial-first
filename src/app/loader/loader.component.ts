import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LoaderService } from '../loader.service';

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

  constructor(
    private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    this.loaderService.getOObservable().subscribe((val) => {
      console.log(val);
      this.isOpen = val;
    });
  }

}
