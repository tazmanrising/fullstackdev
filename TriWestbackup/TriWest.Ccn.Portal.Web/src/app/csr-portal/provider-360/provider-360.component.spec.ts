import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { HttpService } from "../../core/services/http.service";
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Provider360Component } from './provider-360.component';
import { Provider360Service } from './provider-360.service';

describe('Provider360Component', () => {
    let component: Provider360Component;
    let fixture: ComponentFixture<Provider360Component>;
    let mockRouter = {
        navigate: jasmine.createSpy('navigate'),
        snapshot: {
            paramMap: {
                get(id) {
                    return 999;
                }
            }
        }
    } 

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [Provider360Component],
            providers: [
                Provider360Service,
                { provide: ActivatedRoute, useValue: mockRouter },
                { provide: Router, useValue: mockRouter },
                { provide: HttpService, useValue: {} }
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        })
        fixture = TestBed.createComponent(Provider360Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    // Add more tests as we add sub-components. For now, just make sure we're created.'
});
