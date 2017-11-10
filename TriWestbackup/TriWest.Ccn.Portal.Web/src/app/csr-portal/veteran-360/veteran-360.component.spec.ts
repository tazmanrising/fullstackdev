import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Veteran360Component } from './veteran-360.component';
import { Veteran360Service } from './veteran-360.service';
import { HttpService } from '../../core/services/http.service';

describe('Veteran360Component', () => {
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [Veteran360Component],
            providers: [
                Veteran360Service,
                HttpService,
                { provide: ActivatedRoute, useValue: mockRouter },
                { provide: Router, useValue: mockRouter }
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        })
        fixture = TestBed.createComponent(Veteran360Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    // Add more tests as we add sub-components. For now, just make sure we're created.'
});
