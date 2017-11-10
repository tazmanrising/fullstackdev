import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule, URLSearchParams } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../../core/services/http.service';

import { AnnouncementService } from './announcement.service';
import { Announcement } from './announcement.model';
import { AnnouncementDataMock } from './announcement.service.mock';

describe('Service: AnnouncementService', () => {
    let service: AnnouncementService;
    let backend: MockBackend;
    let announcement: Announcement ;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                AnnouncementService,
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
        service = getTestBed().get(AnnouncementService);
    }));


    it('service should return 3 announcements', () => {
        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: AnnouncementDataMock
                    })
                ))
            });

        service = getTestBed().get(AnnouncementService);
        
        service.announcementsPub.subscribe((anns: Announcement[]) => {
            expect(anns.length).toBe(3);
        });

        service.getAnnouncements();
    });
});
