import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import {
    XHRBackend, BaseRequestOptions, Response, ResponseOptions,
    Http, HttpModule
} from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../core/services/http.service';

import { NewCallService } from './new-call.service';
import { Vamc } from './new-call.model';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

describe('NewCallService', () => {
    console.log('Service: AnnouncementService');
    let service: NewCallService;
    let backend: MockBackend;
    let Vamcs: Vamc[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                NewCallService,
                MockBackend,
                BaseRequestOptions,
                HttpService,
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions:
                        BaseRequestOptions) => new Http(backend, defaultOptions),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
        backend = getTestBed().get(MockBackend);

        service = getTestBed().get(NewCallService);
    }));

    it('service should return Caller Types', () => {
        let callerTypes = service.getCallerTypes();
        expect(callerTypes.length).toBe(4);
        expect(callerTypes[3].title).toBe('Other');
    });

    it('should return Caller Type by Type', () => {
        let callerType = service.getCallerType('other');
        expect(callerType.title).toBe('Other');
    });

    it('should return Vamcs', fakeAsync(() => {
        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body:
                        [new Vamc(1, 'One VAMC'),
                         new Vamc(2, 'Two VAMC')
                        ]
                    })
                ))
            });

        service.getVamcList();
        tick();

        let vamcs = service.vamcList;
        let vamc = vamcs[1];
        expect(vamcs.length).toBe(2);
        expect(vamc.name).toBe('Two VAMC');
    }));

    it('should publish VMACs', () => {
        let testSub = service.vamcListPub.subscribe((vamcs: Vamc[]) => {
            expect(vamcs.length).toBe(2);
        })
    });
});