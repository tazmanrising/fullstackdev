import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

import { TestBed, async, getTestBed, ComponentFixture, fakeAsync, tick, inject } from '@angular/core/testing';
import {
    XHRBackend, BaseRequestOptions, Response, ResponseOptions,
    Http, HttpModule
} from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../../core/services/http.service';

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CallerOtherComponent } from './caller-other.component';
import { NewCallService } from '../../../../app/csr-portal/new-call/new-call.service';

@Component({
    template: ''
})
class DummyComponent { }

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
} 

describe('CallerOtherComponent integrated', () => {
    console.log('CallerOtherComponent integrated');
    let fixture: ComponentFixture<CallerOtherComponent>,
        component: CallerOtherComponent,
        element: HTMLElement,
        debugEl: DebugElement;
    let firstName: HTMLInputElement;
    let lastName: HTMLInputElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CallerOtherComponent, DummyComponent],
            imports: [CommonModule, FormsModule, RouterModule, SelectModule, 
                RouterTestingModule.withRoutes([{ path: 'crm/general-info/', component: DummyComponent },])],
            providers: [
                NewCallService,
                { provide: Router, useValue: mockRouter },
                MockBackend,
                BaseRequestOptions,
                HttpService,
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions:
                        BaseRequestOptions) => new Http(backend, defaultOptions),
                    deps: [MockBackend, BaseRequestOptions]
                }],
                
        });
        fixture = TestBed.createComponent(CallerOtherComponent);
        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        firstName = debugEl.query(By.css("#firstName")).nativeElement;
        lastName = debugEl.query(By.css("#lastName")).nativeElement;
    }));

    it('should check initial input', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(firstName.value).toBe('');
            expect(lastName.value).toBe('');
        });
    });


    it('should show error message', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            firstName.value = 'Tommy';
            firstName.dispatchEvent(new Event('change'));
            lastName.dispatchEvent(new Event('change'));

            fixture.detectChanges();
            let errors = debugEl.queryAll(By.css(".alert"));
            expect(errors.length).toBe(1);
        })
        fixture.whenStable().catch((reason: any) => {
            console.log(reason)
        });
    });

    it('should enable button after two fields are completed', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let inputEvent = new Event('change');
            lastName.value = 'Wend';
            lastName.dispatchEvent(inputEvent);

            fixture.detectChanges();
            let errors = debugEl.queryAll(By.css(".alert"));
            expect(errors.length).toBe(0);
        })
        fixture.whenStable().catch((reason: any) => {
            console.log(reason)
        });
    });
});
