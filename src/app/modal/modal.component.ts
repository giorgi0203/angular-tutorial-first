import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalService } from '../modal.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('openCloseModal', [
      state('in', style({ height: '100%' })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({  height: '0%', }),
        animate(500)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(500, style({ height: '0%', })))
    ]),
    trigger('openCloseFade', [
      state('in', style({ opacity: .5 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0, }),
        animate(500)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(500, style({ opacity: 0 })))
    ])
  ]
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
