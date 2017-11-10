import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { NotificationService } from './notification-details.service';
import { NotificationData } from './notifications.model';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';


@Component({
    selector: 'notification',
    providers: [TruncatePipe],
    templateUrl: './notification-details.component.html'
})

export class NotificationsComponent implements OnInit,OnDestroy {

   // @Input() notification: any; //VeteranProfile;
    @Input() Id: any;
    notificationDatas: NotificationData[];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;    
    showData = false;




    notificationSubscription: Subscription;

    constructor(
        private modalService: NgbModal,
        private notificationService: NotificationService
        
    ) { }

    ngOnInit(): void {
        let params = this.getSearchParams();
        console.log(params);
      this.notificationSubscription = this.notificationService.getNotificationList(params)
        .subscribe((response: any) => {
          this.notificationDatas = this.notificationService.getNotificationData(response);
          console.log('notif', this.notificationDatas);
          this.showData = true;
        });
    }

    public ngOnDestroy() {
      this.notificationSubscription.unsubscribe();
    }


    getSearchParams() {
        console.log('getSearchParams');
        let params = new URLSearchParams();
        params.append('Id', "1");
        params.append('page', '1');
        return params
    }




}
