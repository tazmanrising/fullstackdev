import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule, URLSearchParams } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../core/services/http.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AuthDataMock, ClaimDataMock } from './provider-360.mock';
import { Provider360Service } from './provider-360.service';

import { AuthData } from './provider-360.model';


function getDate(offset: number) {
    let date = new Date();
    date.setDate(date.getDate() + offset);
    let dateString = (
        (date.getMonth() + 1) + '/' +
        (date.getDate()) + '/' +
        date.getFullYear()
    );
    return dateString;
}

describe('Provider360Service', () => {
    let service: Provider360Service;
    let backend: MockBackend;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                Provider360Service,
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
        service = getTestBed().get(Provider360Service);
    }));

    it('should return 3 Referral Data records', () => {

        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: AuthDataMock
                    })
                ))
            });
        let params = new URLSearchParams();
        params.append('providerId', '1');
        service.getAuthList(params).subscribe((response:any) => {
            let authDatas = response.results;
            expect(authDatas.length).toBe(3);
        });;
    });

    it('should return 5 Claim Data records', () => {

        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: ClaimDataMock
                    })
                ))
            });
        let params = new URLSearchParams();
        params.append('providerId', '1');
        service.getClaimList(params).subscribe((response: any) => {
            let claimDatas = response.results;
            expect(claimDatas.length).toBe(5);
        });;
    });

});
