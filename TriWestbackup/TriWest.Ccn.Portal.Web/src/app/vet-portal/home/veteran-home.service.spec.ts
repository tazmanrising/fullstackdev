import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule, URLSearchParams } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../core/services/http.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { VeteranHomeService } from './veteran-home.service';
import { VeteranProfile } from '../../csr-portal/veteran-360/veteran-360.model';;
import { VeteranDataMock } from '../../csr-portal/veteran-360/veteran-360.mock';
import { NgbTab, Link, Banner } from './veteran-home.model';

describe('VeteranHomeService', () => {
    console.log('Service: VeteranHomeService');
    let service: VeteranHomeService;
    let backend: MockBackend;
    let veteran: VeteranProfile;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                VeteranHomeService,
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
        service = getTestBed().get(VeteranHomeService);
    }));

    it('should return veteran profile', () => {
        let mockData = VeteranDataMock[0];

        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: mockData
                })))
            })
        });

        service = getTestBed().get(VeteranHomeService);
        service.getVeteranDetails('1').subscribe((veteran: VeteranProfile) => {
            expect(veteran.id).toBe(1);
            expect(veteran.countOfAppointments).toBe(6);
            expect(veteran.countOfProviders).toBe(2);
            expect(veteran.countOfPrescriptions).toBe(3);
            expect(veteran.countOfAuths).toBe(4);            
        });
    });   
               
});
