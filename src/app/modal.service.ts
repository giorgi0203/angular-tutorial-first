import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modals = [];

  constructor() { }

  add(modal) {
    this.modals.push(modal);
  }

  remove(modal) {
    this.modals.splice(this.modals.indexOf(modal), 1);
  }

  open(modal) {
    this.modals.find(modal);
  }
}
