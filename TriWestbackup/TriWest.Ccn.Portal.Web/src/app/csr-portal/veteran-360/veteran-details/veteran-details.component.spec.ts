import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Input, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MatchPhoneTypePipe } from '../../../core/pipes/match-phone-type.pipe';
import { MatchAddressTypePipe } from '../../../core/pipes/match-address-type.pipe';
import { RemovePhoneTypePipe } from '../../../core/pipes/remove-phone-type.pipe';
import { InlineEditComponent } from '../../../core/directives/inline-edit/inline-edit.component';
import { Veteran360Component } from '../veteran-360.component';
import { VeteranDetailsComponent } from './veteran-details.component';
import { VeteranDetailsModalComponent } from '../veteran-details-modal/veteran-details-modal.component';

let component: VeteranDetailsComponent;
let fixture: ComponentFixture<VeteranDetailsComponent>;
let modalService: NgbModal;

describe('VeteranDetailsComponent', () => {

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, NgbModule.forRoot()],
            declarations: [MatchPhoneTypePipe, MatchAddressTypePipe, RemovePhoneTypePipe, InlineEditComponent,
                Veteran360Component, VeteranDetailsComponent, VeteranDetailsModalComponent],
            providers: [NgbModal,
                { provide: ComponentFixtureAutoDetect, useValue: true }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(VeteranDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));  
});


