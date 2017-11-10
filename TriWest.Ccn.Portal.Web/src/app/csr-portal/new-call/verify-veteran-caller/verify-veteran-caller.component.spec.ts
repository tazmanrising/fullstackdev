import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { By } from '@angular/platform-browser';
import { Component, DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";

import {
    NgbModule, NgbDatepicker, NgbCalendar,
    NgbDateStruct, NgbDatepickerConfig,
    NgbModal, ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { VerifyVeteranCallerComponent } from './verify-veteran-caller.component';
import { DatePickerModel, SearchParameters, VeteranVerificationInfo } from './verify-veteran-caller.model';
import { VerifyVeteranCallerService } from './verify-veteran-caller.service';

@Component({
    template: ''
})
class DummyComponent { }

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
} 

describe('verify-veteran-caller.component', () => {
    let component: VerifyVeteranCallerComponent;
    let fixture: ComponentFixture<VerifyVeteranCallerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, FormsModule, NgbModule.forRoot(), NgxDatatableModule, RouterModule,
                RouterTestingModule.withRoutes([{ path: 'crm/veteran-360', component: DummyComponent },
                { path: 'crm/general-info/', component: DummyComponent },])],
            declarations: [VerifyVeteranCallerComponent, DummyComponent], // declare the test component
            providers: [NgbModal, 
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: Router, useValue: mockRouter }
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        });

        fixture = TestBed.createComponent(VerifyVeteranCallerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        //const searchEl = fixture.debugElement.query(By.css('caller-provider-search'));

    });

    it('should create caller-provider component', () => {
        expect(component).toBeTruthy();
    });

    it('Expect the lastName field to start empty', async(() => {
        de = fixture.debugElement;
        el = de.query(By.css("#lastName")).nativeElement;
        expect(el.textContent).toBe('');
    }));

    it('should NOT have search results before OnSearch', () => {
        console.log("component.results : " + component.results);
        expect(component.results.length).toBe(0);
    });

});
