import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { By } from '@angular/platform-browser';
import { Observable } from "rxjs/Observable";
import { Component, DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, OnChanges, Input, ViewChild } from '@angular/core';

/* 3rd-party components */
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
    NgbModule, NgbDatepicker, NgbCalendar,
    NgbDateStruct, NgbDatepickerConfig,
    NgbModal, ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

/* Local component imports */
import { VerifyVeteranCallerComponent } from './verify-veteran-caller.component';
import { VerifyVeteranCallerService } from './verify-veteran-caller.service';
import { MockVerifyVeteranCallerService } from './verify-veteran-caller.service.mock';

import { RowData } from './verify-veteran-caller.mock';

@Component({
    template: ''
})
class DummyComponent { }

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
} 

describe('VerifyVeteranCallerService', () => {
    let component: VerifyVeteranCallerComponent;
    let fixture: ComponentFixture<VerifyVeteranCallerComponent>;
    let submitEl: DebugElement;
    let inputEl: DebugElement;
    let de: DebugElement;
    let el: HTMLElement;
    let mockVerifyVeteranCallerService: MockVerifyVeteranCallerService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule, NgbModule.forRoot(), RouterModule,
                RouterTestingModule.withRoutes([{ path: 'crm/veteran-360', component: DummyComponent },
                { path: 'crm/general-info/', component: DummyComponent },])],
            declarations: [VerifyVeteranCallerComponent, DummyComponent],
            providers: [{ provide: VerifyVeteranCallerService, useClass: MockVerifyVeteranCallerService },
                { provide: Router, useValue: mockRouter }],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        //}).overrideComponent(VerifyVeteranCallerComponent, {
        //    set: {
        //        providers: [
        //            { provide: VerifyVeteranCallerService, useClass: MockVerifyVeteranCallerService }
        //        ]
        //    }
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(VerifyVeteranCallerComponent);
            component = fixture.componentInstance;
            submitEl = fixture.debugElement.query(By.css('.btn-primary'));
            inputEl = fixture.debugElement.query(By.css('#taxId'));
            de = fixture.debugElement.query(By.css('.bootstrap')); //find the ngx-datatable
            mockVerifyVeteranCallerService = fixture.debugElement.injector.get(VerifyVeteranCallerService);
        });
    }));

    it('should display no data on load', () => {
        expect(component).toBeTruthy();
        expect(de).toBeNull();
    });

    it('should return provider data on Search button is hit', fakeAsync(() => {
        const providers = spyOn(mockVerifyVeteranCallerService, 'getVeterans').and.returnValue(Observable.of(RowData));

        fixture.whenStable().then(() => {

            component.parameters.ssnLast4 = '4321';
            component.parameters.lastName = 'carter';
            fixture.detectChanges();
            submitEl.triggerEventHandler('submit', null);
            mockVerifyVeteranCallerService

            tick(1000);
            fixture.detectChanges();

            expect(providers.length).toBe(1);
        })
    }));

});
