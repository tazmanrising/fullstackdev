import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationData } from '../notification-details/notifications.model';

@Component({
  selector: 'notification-details-modal',
  templateUrl: './notification-details-modal.component.html'
})
export class NotificationDetailsModalComponent {
  @Input('notificationDatas') notificationDatas: NotificationData;
  email: string = '';
  phone: string = '';

  constructor(public activeModal: NgbActiveModal) { }

  onSave(event) {
    /*save data*/
    this.activeModal.close();
  }
}
