import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getOObservable() {
    return this.isOpen;
  }

  start() {
    console.log('start');
    this.isOpen.next(true);
  }
  stop() {
    console.log('stop');
    this.isOpen.next(false);
  }
}
