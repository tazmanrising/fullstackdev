///// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, fakeAsync, tick, async, getTestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import {
    XHRBackend, BaseRequestOptions, Response, ResponseOptions, URLSearchParams,
    Http, HttpModule
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { DebugElement } from '@angular/core';

import { BrowserModule, By } from "@angular/platform-browser";
import { StatusBarComponent } from './status-bar.component';
import { VeteranHomeService } from '../veteran-home.service';
import { HttpService } from '../../../core/services/http.service';
import { VeteranDataMock } from '../../../csr-portal/veteran-360/veteran-360.mock';

let component: StatusBarComponent;
let fixture: ComponentFixture<StatusBarComponent>;
let backend: MockBackend;
let service: VeteranHomeService;
let debugEl: DebugElement;

describe('Status-bar component', () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [StatusBarComponent],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                VeteranHomeService,
                MockBackend,
                BaseRequestOptions,
                HttpService,
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions:
                        BaseRequestOptions) => new Http(backend, defaultOptions),
                    deps: [MockBackend, BaseRequestOptions]
                }]
        });
        backend = getTestBed().get(MockBackend);
        service = getTestBed().get(VeteranHomeService);

    }));
    beforeEach(() => {
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
        let mockData = VeteranDataMock[0];
        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: mockData
                    })
                ))
            });

        fixture = TestBed.createComponent(StatusBarComponent);
        component = fixture.componentInstance;

    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
    it('should have 4 panels', fakeAsync(() => {
        component.ngOnInit();
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            debugEl = fixture.debugElement;           
            let panels = debugEl.queryAll(By.css('.status-panel'));
         
            expect(panels.length).toBe(4);
        })
    }));
});
