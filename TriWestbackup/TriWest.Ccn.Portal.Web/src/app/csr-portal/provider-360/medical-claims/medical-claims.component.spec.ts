//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//import { TestBed, async, getTestBed, ComponentFixture, fakeAsync, tick, inject  } from '@angular/core/testing';
//import {
//    XHRBackend, BaseRequestOptions, Response, ResponseOptions, URLSearchParams,
//    Http, HttpModule } from '@angular/http';

//import { MockBackend, MockConnection } from '@angular/http/testing';

//import { HttpService } from '../../../core/services/http.service';

//import { DebugElement } from '@angular/core';
//import { By } from '@angular/platform-browser';

//import { ClaimProviderComponent } from './claim-provider.component';
//import { Provider360Service } from '../provider-360.service';

//import { ClaimDataMock } from '../provider-360.mock';
//import { ClaimData } from '../provider-360.model';

//describe('Provider 360 Claim Component ;integrated', () => {
//    console.log('Provider360ClaimComponent integrated');
//    let service: Provider360Service;
//    let backend: MockBackend;

//    let fixture: ComponentFixture<ClaimProviderComponent>,
//        component: ClaimProviderComponent,
//        element: HTMLElement,
//        debugEl: DebugElement,
//        headerCells: DebugElement[],
//        bodyRows: DebugElement[];
    
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [CommonModule, FormsModule, NgxDatatableModule],
//             declarations: [ClaimProviderComponent],
//             providers: [Provider360Service,
//                MockBackend,
//                BaseRequestOptions,
//                HttpService,
//                {
//                    provide: Http,
//                    useFactory: (backend: XHRBackend, defaultOptions:
//                        BaseRequestOptions) => new Http(backend, defaultOptions),
//                    deps: [MockBackend, BaseRequestOptions]
//                }]
          
//        });
//        backend = getTestBed().get(MockBackend);
//        service = getTestBed().get(Provider360Service);
//    }));

//    beforeEach(() => {
//        function getDate(offset: number) {
//            let date = new Date();
//            date.setDate(date.getDate() + offset);
//            let dateString = (
//                (date.getMonth() + 1) + '-' +
//                (date.getDate()) + '-' +
//                date.getFullYear()
//            );
//            return dateString;
//        }

//        backend.connections.subscribe(
//            (connection: MockConnection) => {
//                connection.mockRespond(new Response(
//                    new ResponseOptions({
//                        body: ClaimDataMock
//                    })
//                ))
//            });

//        fixture = TestBed.createComponent(ClaimProviderComponent);
//        component = fixture.componentInstance;

//    });

//    it('should show table 5 rows / 7 columns', fakeAsync(() => {
//        component.providerId = 1;
//        component.ngOnInit();
//        fixture.detectChanges();
//        tick();
//        fixture.detectChanges();
//        fixture.whenStable().then(() => {
//            debugEl = fixture.debugElement;
//            headerCells = debugEl.queryAll(By.css("datatable-header-cell"));
//            bodyRows = debugEl.queryAll(By.css("datatable-body-row"));
//            expect(bodyRows.length).toBe(5);
//            expect(headerCells.length).toBe(7);
//            component.ngOnDestroy();
//        });
//    }));
//});
