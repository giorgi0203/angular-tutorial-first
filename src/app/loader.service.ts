import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isOpen = false;

  constructor() { }

  start() {
    this.isOpen = true;
  }
  stop() {
    this.isOpen = false;
  }
}
