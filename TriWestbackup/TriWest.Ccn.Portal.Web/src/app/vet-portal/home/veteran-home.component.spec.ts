///// <reference path="../../core/services/http.service.ts" />
///// <reference path="banner/banner.component.ts" />
///// <reference path="footer/veteran-home-footer.component.ts" />
///// <reference path="general-info-documentation/general-info-documentation.component.ts" />
///// <reference path="veteran-home.service.ts" />
///// <reference path="veteran-home-simple.component.ts" />
//import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
//import { BrowserModule, By } from "@angular/platform-browser";
//import { CommonModule } from '@angular/common';
//import { NgbModule, NgbCarouselConfig, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
//import { BannerComponent } from './banner/banner.component';
//import { VeteranHomeSimpleComponent } from './veteran-home-simple.component';
//import { VeteranHomeFooterComponent } from './footer/veteran-home-footer.component';
//import { GeneralInfoDocumentationComponent } from './general-info-documentation/general-info-documentation.component';
//import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { Router, NavigationEnd } from '@angular/router';
//import { RouterTestingModule } from '@angular/router/testing';
//import { URLSearchParams } from '@angular/http';
//import { Observable } from "rxjs/Observable";
//import { VeteranHomeService } from './veteran-home.service';
//import { Headers, BaseRequestOptions, Response, RequestOptions, Http, HttpModule, XHRBackend, RequestMethod, ConnectionBackend, ResponseOptions, Jsonp } from '@angular/http';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { inject } from "@angular/core/testing";
//import { Banner } from './veteran-home.model';
//import { HttpService } from '../../core/services/http.service';
//import { Subject } from "rxjs/Subject";

//import { StatusBarComponent } from './status-bar/status-bar.component';

//describe('Veteran Home Component', () => {


//    let component: VeteranHomeSimpleComponent;
//    let service: VeteranHomeService;
//    let fixture: ComponentFixture<VeteranHomeSimpleComponent>;
//    let mockBackend: MockBackend;
//    let options: RequestOptions;






//    beforeEach(async(() => {
//        TestBed.configureTestingModule({
//            imports: [
//                CommonModule,
//                RouterTestingModule,
//                HttpModule,
//                NgbModule

//            ],
//            declarations: [
//                VeteranHomeSimpleComponent,
//                BannerComponent,
//                VeteranHomeFooterComponent,
//                GeneralInfoDocumentationComponent,
//                StatusBarComponent

//            ],
//            //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

//            providers: [
//                NgbCarouselConfig,
//                NgbTabsetConfig,
//                RouterTestingModule,
//                VeteranHomeService,
//                HttpService,
//                MockBackend,
//                BaseRequestOptions, ///We need BaseRequestOptions 

//                {
//                    provide: Http,
//                    deps: [MockBackend, BaseRequestOptions],
//                    useFactory:
//                    (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//                        return new Http(backend, defaultOptions);
//                    }
//                }
//            ],



//        });

//        mockBackend = TestBed.get(MockBackend);
//        service = TestBed.get(VeteranHomeService);


//    }));

//    beforeEach(() => {
//        options = new RequestOptions({ method: RequestMethod.Post });
//        fixture = TestBed.createComponent(VeteranHomeSimpleComponent);
//        component = fixture.componentInstance;

//    });

//    it('should create the component', () => {
//        fixture.detectChanges();
//        expect(component).toBeTruthy();

//    });

   
//});
