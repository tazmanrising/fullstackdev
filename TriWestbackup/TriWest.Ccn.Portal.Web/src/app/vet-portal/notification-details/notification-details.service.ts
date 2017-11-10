import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../core/services/http.service';
import { URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
import { NotificationData } from './notifications.model';

const notificationsUrl = environment.apiUrl + 'api/notifications';

@Injectable()
export class NotificationService {
    private serviceUrl = environment.apiUrl;

    constructor(public http: Http, private httpService: HttpService) {
        //this.currencyPipe = new CurrencyPipe('en');
    }

    public getNotificationList(params: URLSearchParams) {
        return this.httpService.getItem<any>(notificationsUrl, params);
    }

    public getNotificationData(response: any): NotificationData[] {
        let notificationDatas = [];

        response['results'].forEach((nd: NotificationData) => {
            notificationDatas.push(nd);
        });

        return notificationDatas;
    }


}
