import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { CallerProviderComponent } from './caller-provider.component';
import { ProviderService } from './caller-provider.service';
import { Provider } from './provider.model';
import { CallerProviderSearchComponent } from './caller-provider-search.component';

@Component({
    template: ''
})
class DummyComponent { }

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
} 

describe('CallerProviderComponent', () => {
    let component: CallerProviderComponent;
    let fixture: ComponentFixture<CallerProviderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, FormsModule, RouterTestingModule.withRoutes([{ path: 'crm/provider-360', component: DummyComponent },
            { path: 'crm/general-info/', component: DummyComponent },])],
            declarations: [CallerProviderComponent, CallerProviderSearchComponent, DummyComponent], // declare the test component
            providers: [ProviderService, { provide: Router, useValue: mockRouter }],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(CallerProviderComponent);
        component = fixture.componentInstance;       
        fixture.detectChanges();
        const searchEl = fixture.debugElement.query(By.css('caller-provider-search'));
        
    });

    it('should create caller-provider component', () => {
        expect(component).toBeTruthy();
    });
    
    it('should display heading `Validate Provider`', async(() => {
        de = fixture.debugElement.query(By.css('h3'));
        el = de.nativeElement;
        let title = el.innerHTML;
        expect(title).toContain('Validate Provider');
    }));         
    
    it('taxId input should be empty', async(() => {
        de = fixture.debugElement;
        el = de.query(By.css("#taxId")).nativeElement;              
        expect(el.textContent).toBe('');
      })); 
       
});
