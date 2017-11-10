import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TestBed, async, getTestBed, ComponentFixture, fakeAsync, tick, inject  } from '@angular/core/testing';
import {
    XHRBackend, BaseRequestOptions, Response, ResponseOptions, URLSearchParams,
    Http, HttpModule } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../../core/services/http.service';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ClaimVeteranComponent } from './claim-veteran.component';
import { Veteran360Service } from '../veteran-360.service';

import { ClaimDataMock } from '../veteran-360.mock';
import { ClaimData } from '../veteran-360.model';

describe('Veteran 360 Claim Component integrated', () => {
    console.log('Veteran360ClaimComponent integrated');
    let service: Veteran360Service;
    let backend: MockBackend;

    let fixture: ComponentFixture<ClaimVeteranComponent>,
        component: ClaimVeteranComponent,
        element: HTMLElement,
        debugEl: DebugElement,
        headerCells: DebugElement[],
        bodyRows: DebugElement[];
    
     beforeEach(async(() => {
         TestBed.configureTestingModule({
             imports: [CommonModule, FormsModule, NgxDatatableModule],
             declarations: [ClaimVeteranComponent],
             providers: [Veteran360Service,
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
        service = getTestBed().get(Veteran360Service);
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

        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: ClaimDataMock
                    })
                ))
            });

        fixture = TestBed.createComponent(ClaimVeteranComponent);
        component = fixture.componentInstance;

    });

    it('should show table 5 rows / 7 columns', fakeAsync(() => {
        component.veteranId = 1;
        component.ngOnInit();
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            debugEl = fixture.debugElement;
            headerCells = debugEl.queryAll(By.css("datatable-header-cell"));
            bodyRows = debugEl.queryAll(By.css("datatable-body-row"));
            expect(bodyRows.length).toBe(5);
            expect(headerCells.length).toBe(7);
            component.ngOnDestroy();
        });
    }));
});