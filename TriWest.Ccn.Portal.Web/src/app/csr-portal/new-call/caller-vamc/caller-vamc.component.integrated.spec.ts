import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

import { TestBed, async, getTestBed, ComponentFixture, fakeAsync, tick, inject  } from '@angular/core/testing';
import {
    XHRBackend, BaseRequestOptions, Response, ResponseOptions,
    Http, HttpModule } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../../core/services/http.service';

import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CallerVamcComponent } from './caller-vamc.component';
import { NewCallService } from '../../../../app/csr-portal/new-call/new-call.service';

@Component({
    template: ''
})
class DummyComponent { }

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
}


describe('CallerVamcComponent integrated', () => {
    console.log('CallerVamcComponent integrated');
    let fixture: ComponentFixture<CallerVamcComponent>,
      component: CallerVamcComponent,
      element: HTMLElement,
      debugEl: DebugElement;
    let firstName: HTMLInputElement;
    let lastName: HTMLInputElement;
    let vamcSelect: HTMLInputElement;
    let stationId: HTMLInputElement;
    let email: HTMLInputElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, FormsModule, SelectModule,
                RouterTestingModule.withRoutes([{ path: 'crm/provider-360', component: DummyComponent },
                { path: 'crm/general-info/', component: DummyComponent },])],
            declarations: [CallerVamcComponent, DummyComponent],
          providers: [NewCallService,
              MockBackend,
              BaseRequestOptions,
              HttpService,
              {
                  provide: Http,
                  useFactory: (backend: XHRBackend, defaultOptions:
                      BaseRequestOptions) => new Http(backend, defaultOptions),
                  deps: [MockBackend, BaseRequestOptions]
              },
              { provide: Router, useValue: mockRouter }],
        });
        fixture = TestBed.createComponent(CallerVamcComponent);
        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        firstName = debugEl.query(By.css("#firstName")).nativeElement;
        lastName = debugEl.query(By.css("#lastName")).nativeElement;
        vamcSelect = debugEl.query(By.css("#vamc")).nativeElement;
        stationId = debugEl.query(By.css("#stationId")).nativeElement;
        email = debugEl.query(By.css("#email")).nativeElement;
    });

    it('should check initial input', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(firstName.value).toBe('');
            expect(lastName.value).toBe('');
            expect(stationId.value).toBe('');
            expect(email.value).toBe('');
            console.log(vamcSelect.value);
        });
    });


    it('should show error message', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            firstName.value = 'Tommy';
            firstName.dispatchEvent(new Event('change'));
            lastName.dispatchEvent(new Event('change'));

            fixture.detectChanges();
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
      })
      fixture.whenStable().catch((reason: any) => {
          console.log(reason)
      });
    });
});