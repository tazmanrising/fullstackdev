import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule, URLSearchParams } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../core/services/http.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { VeteranDataMock, AuthDataMock, NotesMock } from './veteran-360.mock';
import { Veteran360Service } from './veteran-360.service';
import { VeteranProfile } from './veteran-360.model';

import { AuthData } from './veteran-360.model';


describe('Veteran360Service', () => {
    console.log('Service: Veteran360Service');
    let service: Veteran360Service;
    let backend: MockBackend;
    let veteran: VeteranProfile;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                Veteran360Service,
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
        service = getTestBed().get(Veteran360Service);
    }));

    it('should return veteran by id(1)', () => {
        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: VeteranDataMock
                })))
            })
        });

        service = getTestBed().get(Veteran360Service);

        let veterans = service.getVeteranDetailsById(1).subscribe((data: any) => {
            expect(data.id).toBe(1);
        });
    });

    it('should return veteran ohi list by id(1)', () => {
        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: VeteranDataMock
                })))
            })
        });

        service = getTestBed().get(Veteran360Service);

        let veterans = service.getVeteranDetailsById(1).subscribe((data: any) => {
            expect(data.id).toBe(1);
            expect(data.veteranOHIList.length).toBeGreaterThan(0);
        });
    });

    it('should return veteran enrollments by id(1)', () => {
        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: VeteranDataMock
                })))
            })
        });

        service = getTestBed().get(Veteran360Service);

        let veterans = service.getVeteranDetailsById(1).subscribe((data: any) => {
            expect(data.id).toBe(1);
            expect(data.enrollments.length).toBeGreaterThan(0);
        });
    });

    it('should return 3 AuthDatas records', () => {
        function getDate(offset: number) {
            let date = new Date();
            date.setDate(date.getDate() + offset);
            let dateString = (
                (date.getMonth() + 1) + '-' +
                (date.getDate()) + '-' +
                date.getFullYear()
            );
            return dateString;
        }

        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: AuthDataMock
                    })
                ))
            });
        let params = new URLSearchParams();
        params.append('veteranId', '1');
        service.getAuthList(params).subscribe((response:any) => {
            let authDatas = response.results;
            expect(authDatas.length).toBe(3);
        });;
    });

    it('should return veteran notes veteran id(1)', () => {
        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: NotesMock
                })))
            })
        });

        service = getTestBed().get(Veteran360Service);
        let params = new URLSearchParams();
        params.append('veteranId', '2');

        let notes = service.getCareRadiusNotesByVeteranId(params).subscribe((data: any) => {
            expect(data.id).toBe(2);
            expect(data.notes.length).toBeGreaterThan(0);
        });
    });

});
