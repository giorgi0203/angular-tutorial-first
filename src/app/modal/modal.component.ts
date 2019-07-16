import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {


  isOpen = false;
  result: Observable<{ closeReason: 'CANCEL' | 'OK' | '' }>;
  observer;

  constructor(
    private modalService: ModalService
  ) {
    this.result = new Observable(observer => {
      this.observer = observer;
    });
  }

  ngOnInit() {
    this.modalService.add(this);
  }
  ngOnDestroy() {
    // throw new Error("Method not implemented.");
    this.modalService.remove(this);
  }

  show() {
    this.isOpen = true;
    return this.result;
  }

  hide() {
    this.isOpen = false;
  }

  cancel() {
    this.observer.next({ closeReason: 'CANCEL' });
    this.hide();
  }
  ok() {
    this.observer.next({ closeReason: 'OK' });
    this.hide();
  }

}
