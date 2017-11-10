import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response, URLSearchParams } from '@angular/http';
import { notificationMock } from './notification-details.mock';

export class MockNotificationService {


  public getNotificationDetails(searchParams: URLSearchParams): Observable<any> {
    return Observable.of(notificationMock);
  }

}
