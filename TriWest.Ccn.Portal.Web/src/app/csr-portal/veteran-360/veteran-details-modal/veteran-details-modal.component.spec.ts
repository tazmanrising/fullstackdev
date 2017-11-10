import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Input, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http, HttpModule } from "@angular/http";
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatchPhoneTypePipe } from '../../../core/pipes/match-phone-type.pipe';
import { MatchAddressTypePipe } from '../../../core/pipes/match-address-type.pipe';
import { RemovePhoneTypePipe } from '../../../core/pipes/remove-phone-type.pipe';
import { InlineEditComponent } from '../../../core/directives/inline-edit/inline-edit.component';
import { Veteran360Component } from '../veteran-360.component';
import { VeteranDetailsComponent } from '../veteran-details/veteran-details.component';
import { VeteranDetailsModalComponent } from '../veteran-details-modal/veteran-details-modal.component';
import { Veteran360Service } from '../veteran-360.service';

import { HttpService } from '../../../core/services/http.service';

let component: Veteran360Component;
let fixture: ComponentFixture<Veteran360Component>;
let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
    params: Observable.of({ id: "5" }),
    snapshot: {
        paramMap: {
            get(id) {
                return 999;
            }
        }
    }
}
let modalService: NgbModal;

describe('VeteranDetailsModalComponent', () => {

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, FormsModule, NgbModule.forRoot()],
            declarations: [MatchPhoneTypePipe, MatchAddressTypePipe, RemovePhoneTypePipe, InlineEditComponent,
                Veteran360Component, VeteranDetailsComponent, VeteranDetailsModalComponent],
            providers: [Veteran360Service, HttpService,
                { provide: NgbModal, useValue: modalService },
                { provide: ActivatedRoute, useValue: mockRouter },
                { provide: Router, useValue: mockRouter }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(Veteran360Component);
        component = fixture.componentInstance;
    }));

    it('should be created', async(() => {
        expect(component).toBeTruthy();
    }));   
});


