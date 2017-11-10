import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner.component';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { VeteranHomeService } from '../veteran-home.service';
import { Headers, BaseRequestOptions, Response, RequestOptions, Http, HttpModule, XHRBackend, RequestMethod, ConnectionBackend, ResponseOptions, Jsonp } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { inject } from "@angular/core/testing";
import { Banner } from '../veteran-home.model';
import { HttpService } from '../../../core/services/http.service';
import { Subject } from "rxjs/Subject";


describe('Veteran Home Banner Component', () => {

    let component: BannerComponent;
    let service: VeteranHomeService;
    let fixture: ComponentFixture<BannerComponent>;
    let mockBackend: MockBackend;
    let options: RequestOptions;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterTestingModule,
                HttpModule,
                NgbModule

            ],
            declarations: [
                BannerComponent
            ],
            //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                NgbCarouselConfig,
                RouterTestingModule,
                VeteranHomeService,
                HttpService,
                MockBackend,
                BaseRequestOptions, ///We need BaseRequestOptions 
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ],
        });
        mockBackend = TestBed.get(MockBackend);
        service = TestBed.get(VeteranHomeService);
    }));

    beforeEach(() => {
        options = new RequestOptions({ method: RequestMethod.Post });
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    });

    it('should have three slides for the banner', () => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: JSON.stringify([
                            new Banner('5', '5mock.com', '5mock', '5mock header', '5mock message'),
                            new Banner('6', '6mock.com', '6mock', '6mock header', '6mock message'),
                            new Banner('7', '7mock.com', '7mock', '7mock header', '7mock message'),
                        ]
                        )
                    })
                ))
            });
        service.getBannerList().subscribe(
            (result: any) => {
                component.bannerDatas = service.getBannerDatas(result);
            }
        )
        fixture.detectChanges();
        component.ngOnInit();
        expect(component.bannerDatas.length).toBe(3);
    });
});
