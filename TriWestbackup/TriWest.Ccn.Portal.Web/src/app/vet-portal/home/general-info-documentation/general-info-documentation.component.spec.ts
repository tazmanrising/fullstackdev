/// <reference path="general-info-documentation.component.ts" />
import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselConfig, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { GeneralInfoDocumentationComponent } from './general-info-documentation.component';
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


describe('General Info Documentation Component', () => {


    let component: GeneralInfoDocumentationComponent;
    let service: VeteranHomeService;
    let fixture: ComponentFixture<GeneralInfoDocumentationComponent>;
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
                GeneralInfoDocumentationComponent

            ],
            //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

            providers: [
                NgbTabsetConfig,
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
        fixture = TestBed.createComponent(GeneralInfoDocumentationComponent);
        component = fixture.componentInstance;

    });

    it('should create the component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    });

    it('should have 4 tabs', () => {
        fixture.detectChanges();
        expect(component.tabs.length).toBe(4);

    });

    it('should have 6 links on the 1st tab', () => {
        fixture.detectChanges();
        expect(component.tabs[0].content.length).toBe(6);

    });


    it('should have 6 links on the 4th tab', () => {
        fixture.detectChanges();
        expect(component.tabs[3].content.length).toBe(6);

    });
    

    //it('should have links', () => {
    //    fixture.detectChanges();
    //    let linksArray = fixture.debugElement.queryAll(By.css('.gen-info-links'));
    //    console.log(linksArray.length);
    //    console.log(linksArray);
    //    expect(linksArray).toBeTruthy();

    //});


});
