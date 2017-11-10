import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { URLSearchParams } from '@angular/http';
import { ProviderService } from './caller-provider.service';
import { Provider } from './provider.model';

describe('Service: ProviderService', () => {

    let service: ProviderService;
    let backend: MockBackend;
    let provider: Provider;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ProviderService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => new Http(backend, defaultOptions),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });

        backend = getTestBed().get(MockBackend);
    });

    it('service should return a provider for given taxId', () => {
        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body:
                            {
                                "id": 1,
                                "providerName": "Charles Rogers",
                                "groupName": "Utica Medical Clinic",
                                "taxId": "200923219",
                                "npi": "23214",
                                "addressPrimary": "1439 Utica Ave",
                                "cityPrimary": "Tulsa",
                                "statePrimary": "OK",
                                "postalCodePrimary" : "74100"
                            }
                        })
                    ))

                })
        });

        service = getTestBed().get(ProviderService);
        let params = new URLSearchParams();
        params.append('taxId', "200923219");
        service.getProviders(params).subscribe((data: any) => {
            expect(data.length).toBe(1);
            expect(data.providerName).toBe("Charles Rogers");
            expect(data.groupName).toBe("Utica Medical Clinic");
            expect(data.taxId).toBe("200923219");
            expect(data.npi).toBe("23214");
        });
    });

});