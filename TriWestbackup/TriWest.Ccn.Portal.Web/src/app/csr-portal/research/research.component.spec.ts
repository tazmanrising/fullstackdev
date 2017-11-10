import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectModule } from 'ng2-select';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ResearchComponent } from './research.component';
import { PortalSearchComponent } from '../../components/portal-search/portal-search.component';
import { VeteranSearchComponent } from '../../components/portal-search/veteran-search/veteran-search.component';
import { ProviderSearchComponent } from '../../components/portal-search/provider-search/provider-search.component';


describe('ResearchComponent', () => {
    let component: ResearchComponent;
    let fixture: ComponentFixture<ResearchComponent>;
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

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule, SelectModule, NgbModule.forRoot(), NgxDatatableModule],
            declarations: [ResearchComponent, PortalSearchComponent, VeteranSearchComponent, ProviderSearchComponent],
            providers: [
                { provide: Router, useValue: mockRouter }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
