import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Veteran360DetailsEnrollmentComponent } from './veteran-360-details-enrollment.component';

describe('Veteran360DetailsEnrollmentComponent', () => {
    let component: Veteran360DetailsEnrollmentComponent;
    let fixture: ComponentFixture<Veteran360DetailsEnrollmentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                Veteran360DetailsEnrollmentComponent
            ],
            imports: [
                NgbModule.forRoot(),
                NgxDatatableModule
            ],
            providers: [
                NgbModal,
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ]
        });
        fixture = TestBed.createComponent(Veteran360DetailsEnrollmentComponent);
        component = fixture.componentInstance;
    }));


    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));

    it('should contain a veteran value', async(() => {
        expect(component.veteran).toBeDefined();
    }));

    it('should contain veteran.enrollments value', async(() => {
        expect(component.veteran.enrollments).toBeDefined();
    }));
});
