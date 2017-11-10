import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestBed, async, getTestBed, ComponentFixture, fakeAsync, tick, inject } from '@angular/core/testing';
import {
    XHRBackend, BaseRequestOptions, Response, ResponseOptions, URLSearchParams,
    Http, HttpModule
} from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

import { HttpService } from '../../../core/services/http.service';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementService } from './announcement.service';
import { FormatDatePipe } from '../../../core/pipes/format-date.pipe';

import { Announcement } from './announcement.model';
import { AnnouncementDataMock } from './announcement.service.mock';

describe('AnnouncementsComponent Component integrated', () => {
    let service: AnnouncementService;
    let backend: MockBackend;

    let fixture: ComponentFixture<AnnouncementsComponent>,
        component: AnnouncementsComponent,
        element: HTMLElement,
        debugEl: DebugElement,
        announcePanels: DebugElement[],
        dateElem: HTMLElement;
    let datePipe = {
        transform(value: string): any {
            console.log(`date: ${value}`);
            return value;
        }
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, FormsModule],
            declarations: [AnnouncementsComponent, FormatDatePipe],
            providers: [AnnouncementService,
                FormatDatePipe,
                MockBackend,
                BaseRequestOptions,
                HttpService,
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions:
                        BaseRequestOptions) => new Http(backend, defaultOptions),
                    deps: [MockBackend, BaseRequestOptions]
                }]
        });
        backend = getTestBed().get(MockBackend);
        service = getTestBed().get(AnnouncementService);
    }));

    beforeEach(() => {
        backend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        body: AnnouncementDataMock
                    })
                ))
            });

        fixture = TestBed.createComponent(AnnouncementsComponent);
        component = fixture.componentInstance;
    });

    it('should show 3 announcements', fakeAsync(() => {
        component.ngOnInit();
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            console.log('data  ' + JSON.stringify(component.announcements));
            debugEl = fixture.debugElement;
            announcePanels = debugEl.queryAll(By.css("#announcementItem"));
            expect(announcePanels.length).toBe(3);
            component.ngOnDestroy();
        });
    }));
});

//    let httpService = {
//        getItem: (url: String): Announcement[] => {
//            return [new Announcement(1, new Date(), 'All Hubs', 'Test', 'Test content')];
//        }
//    };
//    beforeEach(async(() => {
//        TestBed.configureTestingModule({
//            declarations: [AnnouncementsComponent, FormatDatePipe],
//            providers: [{ provide: HttpService, useValue: httpService },
//                AnnouncementService, FormatDatePipe]
//        }).compileComponents();
//    }));

//    it('should create the AnnouncementComponent', async(() => {
//        const fixture = TestBed.createComponent(AnnouncementsComponent);
//        const component = fixture.debugElement.componentInstance;
//        expect(component).toBeTruthy();
//    }));


//    it('should render 10 items in list', async(() => {
//        const fixture = TestBed.createComponent(AnnouncementsComponent);
//        fixture.detectChanges();
//        const announcementListDiv = fixture.debugElement.nativeElement;
//        expect(announcementListDiv.children.length).toBe(10);
//    }));

