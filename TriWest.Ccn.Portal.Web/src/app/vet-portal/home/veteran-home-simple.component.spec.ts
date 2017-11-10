/// <reference path="../../core/pipes/truncate.pipe.ts" />
/// <reference path="dashboard/to-do-today/to-do-today.component.ts" />
/// <reference path="../notification-details/notification-details.component.ts" />

import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselConfig, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from "@swimlane/ngx-datatable/release";
import { BannerComponent } from './banner/banner.component';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
import { VeteranHomeSimpleComponent } from './veteran-home-simple.component';
import { VeteranHomeFooterComponent } from './footer/veteran-home-footer.component';
import { ToDoTodayComponent } from './dashboard/to-do-today/to-do-today.component';
import { NotificationsComponent } from '../notification-details/notification-details.component';
import { GeneralInfoDocumentationComponent } from './general-info-documentation/general-info-documentation.component';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { VeteranHomeService } from './veteran-home.service';
import { Headers, BaseRequestOptions, Response, RequestOptions, Http, HttpModule, XHRBackend, RequestMethod, ConnectionBackend, ResponseOptions, Jsonp } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { inject } from "@angular/core/testing";
import { Banner } from './veteran-home.model';
import { HttpService } from '../../core/services/http.service';
import { Subject } from "rxjs/Subject";

import { StatusBarComponent } from './status-bar/status-bar.component';

describe('Veteran Home Component', () => {


    let component: VeteranHomeSimpleComponent;
    let service: VeteranHomeService;
    let fixture: ComponentFixture<VeteranHomeSimpleComponent>;
    let mockBackend: MockBackend;
    let options: RequestOptions;






    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterTestingModule,
                HttpModule,
                NgbModule,
                NgxDatatableModule

            ],
            declarations: [
                VeteranHomeSimpleComponent,
                BannerComponent,
                VeteranHomeFooterComponent,
                GeneralInfoDocumentationComponent,
                ToDoTodayComponent,
                StatusBarComponent,
                NotificationsComponent,
                TruncatePipe

            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

            providers: [
                NgbCarouselConfig,
                NgbTabsetConfig,
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
        fixture = TestBed.createComponent(VeteranHomeSimpleComponent);
        component = fixture.componentInstance;

    });

    xit('should create the component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    });


});
