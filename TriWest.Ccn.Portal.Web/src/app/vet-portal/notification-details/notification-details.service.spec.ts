import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule, URLSearchParams } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpService } from '../../core/services/http.service';
import { notificationMock } from './notification-details.mock';
import { NotificationService } from './notification-details.service';
import { NotificationData } from './notifications.model';

describe('NotificationService', () => {
  console.log('Service: NotificationService');
  let service: NotificationService;
  let backend: MockBackend;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        NotificationService,
        MockBackend,
        BaseRequestOptions,
        HttpService,
        {
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
    backend = getTestBed().get(MockBackend);
    service = getTestBed().get(NotificationService);
  }));


  it('should return notification notes', () => {
    getTestBed().compileComponents().then(() => {
      backend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: notificationMock
        })));
      });
    });

    service = getTestBed().get(NotificationService);
    let params = new URLSearchParams();
    params.append('Id', '1');
    params.append('page', '1');


    let notes = service.getNotificationList(params).subscribe((data: any) => {
      expect(data.id).toBe(2);
      expect(data.notes.length).toBeGreaterThan(0);
    });
  });


});
