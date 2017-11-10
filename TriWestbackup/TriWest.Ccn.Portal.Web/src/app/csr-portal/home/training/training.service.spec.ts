import { async, getTestBed, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { XHRBackend, BaseRequestOptions, Response, ResponseOptions, Http, HttpModule } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

import { TrainingService } from './training.service';
import { Training } from './training.model';

describe('Service: TrainingService', () => {

    let service: TrainingService;
    let backend: MockBackend;
    let trainingMessage: Training;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                TrainingService,
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

    it('service should return training message', () => {
        getTestBed().compileComponents().then(() => {
            backend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body:
                            {
                                "id": 10,
                                "title": "Windstrom 2",
                                "message": "<p>We invite you to hear firsthand innovative treatments and quality of care that happen on a daily basis here. <a target=\"_blank\" href=\"www.triwest.com\">www.triwest.com</a> </p>",
                                "createdOn": "08/27/2017"
                            }
                        })
                    ))

                })
        });

        service = getTestBed().get(TrainingService);
        service.getTrainingMessage().subscribe((data: any) => {
            expect(data.length).toBe(1);
            expect(data.id).toBe(10);
            expect(data.title).toBe("Windstrom 2");
            expect(data.message).toBe("<p>We invite you to hear firsthand what our physicians, medical experts and patients have to say about the cutting-edge procedures, innovative treatments and quality of care that happen on a daily basis here. <a target=\"_blank\" href=\"www.triwest.com\">www.triwest.com</a> </p>");
            expect(data.createdOn).toBe("08/27/2017");
        });
    });

});
