import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Veteran360DetailsOHIComponent } from './veteran-360-details-ohi.component';

describe('Veteran360DetailsOHIComponent', () => {
    let component: Veteran360DetailsOHIComponent;
    let fixture: ComponentFixture<Veteran360DetailsOHIComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Veteran360DetailsOHIComponent],
            imports: [NgbModule, NgxDatatableModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(Veteran360DetailsOHIComponent);
        component = fixture.componentInstance;
    }));

    
    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));

    it('should contain a veteran value', async(() => {
        expect(component.veteran).toBeTruthy();
    }));
});
