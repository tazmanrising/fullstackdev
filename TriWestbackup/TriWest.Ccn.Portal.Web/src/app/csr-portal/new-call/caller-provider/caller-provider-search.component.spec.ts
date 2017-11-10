import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { By } from '@angular/platform-browser';

import { Component, DebugElement, NO_ERRORS_SCHEMA, OnChanges, Input, ViewChild } from '@angular/core';
import { CallerProviderSearchComponent } from './caller-provider-search.component';
import { CallerProviderComponent } from './caller-provider.component';
import { ProviderService } from './caller-provider.service';
import { MockProviderService } from './mock-provider.Service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MockProvider } from './mock-provider-data';
import { Observable } from "rxjs/Observable";

@Component({
    template: ''
})
class DummyComponent { }

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
} 

describe('CallerProviderSearchComponent - Async', () => {
    let component: CallerProviderComponent;
    let fixture: ComponentFixture<CallerProviderComponent>;
    let submitEl: DebugElement;
    let inputEl: DebugElement;
    let de: DebugElement;
    let el: HTMLElement;
    let mockProviderService: MockProviderService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule, RouterModule,
                RouterTestingModule.withRoutes([{ path: 'crm/provider-360', component: DummyComponent },
                { path: 'crm/general-info/', component: DummyComponent },])],
            declarations: [CallerProviderSearchComponent, CallerProviderComponent, DummyComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).overrideComponent(CallerProviderComponent,
        {
            set: {
                providers: [
                    { provide: ProviderService, useClass: MockProviderService },
                    { provide: Router, useValue: mockRouter },
                ]
            }
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(CallerProviderComponent);
            component = fixture.componentInstance;
            submitEl = fixture.debugElement.query(By.css('.btn-primary'));
            inputEl = fixture.debugElement.query(By.css('#taxId'));
            de = fixture.debugElement.query(By.css('.bootstrap')); //find the ngx-datatable

            mockProviderService = fixture.debugElement.injector.get(ProviderService);            
        });
    }));

    it('should display no data on load', () => {
        expect(component).toBeTruthy();
        expect(de).toBeNull();
    });     

    it('should return provider data when Search button is hit', fakeAsync(() => {
        const providers = spyOn(mockProviderService, 'getProviders').and.returnValue(Observable.of(MockProvider));
          
          component.caller.taxId = '200923219';
          tick();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
              submitEl = fixture.debugElement.query(By.css('.btn-primary'));
              submitEl.triggerEventHandler('submit', null); 
              
              tick(1000);      
              fixture.detectChanges();
              
              expect(providers.length).toBe(1);              
        })
    }));

});
