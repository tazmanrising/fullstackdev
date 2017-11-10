/// <reference path="../../tracker/tracker.service.ts" />
/// <reference path="../qsi-pane/qsi-pane.component.ts" />
/// <reference path="qsi-form.component.ts" />
import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { QsiFormComponent } from './qsi-form.component';
import { QsiPaneComponent } from '../qsi-pane/qsi-pane.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TrackerService } from '../../tracker/tracker.service';
import { Headers, BaseRequestOptions, Response, RequestOptions, Http, HttpModule, XHRBackend, RequestMethod, ConnectionBackend, ResponseOptions, Jsonp } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { inject } from "@angular/core/testing";
import { HttpService } from '../../core/services/http.service';
import { Subject } from "rxjs/Subject";


describe('QsiFormComponent', () => {


    let component: QsiFormComponent;
    let trackerService: TrackerService;
    let fixture: ComponentFixture<QsiFormComponent>;
    let debugEl: DebugElement;
    let inputEl: HTMLInputElement;
    let element: HTMLElement;


    let mockBackend: MockBackend;
    let options: RequestOptions;

    let service: TrackerService;




    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,
                CommonModule,
                FormsModule,
                RouterTestingModule,
                HttpModule

            ],
            declarations: [
                QsiFormComponent,
                QsiPaneComponent

            ],
            //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

            providers: [
                QsiPaneComponent,
                RouterTestingModule,
                TrackerService,
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
        service = TestBed.get(TrackerService);


    }));

    beforeEach(() => {
        options = new RequestOptions({ method: RequestMethod.Post });
        fixture = TestBed.createComponent(QsiFormComponent);
        component = fixture.componentInstance;

    });

    it('should create the component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    });

});
