/// <reference path="to-do-today.component.ts" />
import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselConfig, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToDoTodayComponent } from './to-do-today.component';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Headers, BaseRequestOptions, Response, RequestOptions, Http, HttpModule, XHRBackend, RequestMethod, ConnectionBackend, ResponseOptions, Jsonp } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { inject } from "@angular/core/testing";

import { Subject } from "rxjs/Subject";


describe('To Do Today Component', () => {


    let component: ToDoTodayComponent;
    let fixture: ComponentFixture<ToDoTodayComponent>;
    let mockBackend: MockBackend;
    let options: RequestOptions;
    let debugEl: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterTestingModule,
                HttpModule,
                NgbModule

            ],
            declarations: [
                ToDoTodayComponent

            ],
            //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

            providers: [
                NgbCarouselConfig,
                NgbTabsetConfig,
                RouterTestingModule,
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
    }));

    beforeEach(() => {
        options = new RequestOptions({ method: RequestMethod.Post });
        fixture = TestBed.createComponent(ToDoTodayComponent);
        component = fixture.componentInstance;
    });

    it('should create the components', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    });

    it('should have 1st accordion open', () => {
        fixture.detectChanges();
        expect(component.panelList[0].nextState).toBeTruthy();

    });


    it('should have 5 accordions ', () => {
        fixture.detectChanges();
        expect(component.panelList.length).toBe(5);

    });

   



});
