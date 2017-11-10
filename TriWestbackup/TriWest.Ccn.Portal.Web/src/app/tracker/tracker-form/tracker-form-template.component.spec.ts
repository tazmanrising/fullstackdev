/// <reference path="../../core/services/http.service.ts" />
///// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick} from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { MaskDirective } from '../tracker-directives/mask.directive';
import { TrackerFormTemplateComponent } from './tracker-form-template.component';
import { TrackerSliderComponent } from '../tracker-slider/tracker-slider.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TrackerService } from '../tracker.service';
import { TrackerFormService } from '../tracker-service/tracker-form.service';
import { Headers, BaseRequestOptions, Response, RequestOptions, Http, HttpModule, XHRBackend, RequestMethod, ConnectionBackend, ResponseOptions, Jsonp } from '@angular/http';
import { MockBackend, MockConnection} from '@angular/http/testing';
import { inject } from "@angular/core/testing";
import { HttpService } from '../../core/services/http.service';
import { Contact, Customer, Category, SubCategory, TrackerForm } from '../tracker.model';
import { ContactDataMock, CcsDataMock, Session} from '../tracker-mocks/tracker-service.mock';
import { Subject } from "rxjs/Subject";


describe('TrackerFormTemplateComponent', () => {


    let component: TrackerFormTemplateComponent;
    let trackerFormService: TrackerFormService;
    let fixture: ComponentFixture<TrackerFormTemplateComponent>;
    let debugEl: DebugElement;
    let inputEl: HTMLInputElement;
    let element: HTMLElement;
    

    let mockBackend: MockBackend;
    //let responseBody: Object = {
    //    body: [{
    //        sessionId: '1234567890'

    //    }]
    //};
    //let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    //let requestOptions: RequestOptions = new RequestOptions({ headers: headers });

    let options: RequestOptions;
    let service1: TrackerFormService;
    let service2: TrackerService;


    let trackerForm: TrackerForm; 

    let sessionId: HTMLElement;
    let sessionDate: HTMLElement;
    let contactTypes: DebugElement[];
    let customerTypes: DebugElement[];
    let category: DebugElement[];
    let subCategory: DebugElement[];
    let fName: HTMLInputElement;
    let lName: HTMLInputElement;
    let phone: HTMLInputElement;
    let extension: HTMLInputElement;
    let notes: HTMLInputElement;

    //let r: Router;
    //let tService = new TrackerService(r);




    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,
                CommonModule,
                FormsModule,
                RouterTestingModule,
                HttpModule

            ],
            declarations: [
                TrackerFormTemplateComponent,
                MaskDirective
            ],
            //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

            providers: [
                TrackerSliderComponent,
                RouterTestingModule,
                TrackerService,
                TrackerFormService,
                HttpService,
                MockBackend,
                BaseRequestOptions, ///We need BaseRequestOptions 

                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ],



        });

        mockBackend = TestBed.get(MockBackend);
        service1 = TestBed.get(TrackerFormService);


    }));

    beforeEach(() => {
        options = new RequestOptions({ method: RequestMethod.Post });
        fixture = TestBed.createComponent(TrackerFormTemplateComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        sessionId = debugEl.query(By.css('#session')).nativeElement;
        sessionDate = debugEl.query(By.css('#date')).nativeElement;



    });



    it('should create the component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    }
        //inject([TrackerFormService, MockBackend],
        //    fakeAsync(trackerFormService, mockBackend) => {


    );



        it('should create the sessionId', () => {
            fixture.detectChanges();
            expect(sessionId).toBeTruthy();
        });

        it('should have sessionId length to 14', fakeAsync(() => {

            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: JSON.stringify(Session)
                        })
                    ))
                });
            service1.addSession().subscribe(
                result => {
                    component.model.sessionId = result.sessionId + '-1-1'

                    console.log(component.model.sessionId);
                })

           
            tick();
            expect(component.model.sessionId.length).toBe(14);



                     //service1.addSession().subscribe(
            //    (response: any) =>
            //    {
            //        let sessionid = response.sessionId;
            //        expect(sessionid.length).toBe(10);
            //        console.log("sessionid: "+ sessionid);

            //    }
            //)


            
            //fixture.detectChanges();
            //fixture.whenStable().then(() => {
            //    expect(sessionId.innerText.length).toBe(14);
            //    console.log("session id: " + sessionId.innerText);
            //})
          
        }));

        it('should have session date', fakeAsync(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: Session
                        })
                    ))
                });
            service1.addSession().subscribe(
                result => {
                    component.model.timerStart = result.timerStart;

                    console.log(component.model.timerStart);
                })


            tick();
            expect(component.model.timerStart.length).toBeGreaterThan(13);
           
            //tick();
            //fixture.detectChanges();

            //fixture.whenStable().then(() => {
            //    expect(sessionDate.innerText.length).toBeGreaterThan(13);
            //})
           

        }));

        //it('should have contactTypes of 5 in number', fakeAsync(() => {
        //    mockBackend.connections.subscribe(
        //        (connection: MockConnection) => {
        //            connection.mockRespond(new Response(
        //                new ResponseOptions({
        //                    body: ContactDataMock
        //                })
        //            ))
        //        });

        //    service2.getItem().subscribe((response: any) => {
        //        component.contactTypes = response;
        //        console.log(response);
        //    })
        //    tick(1000);

            
        //    expect(component.contactTypes.length).toBe(5);
        //    //fixture.detectChanges();
        //    //contactTypes = debugEl.queryAll(By.css('#contactType'));
        //    //fixture.whenStable().then(() => {
        //    //    expect(contactTypes.length).toBe(5);
        //    //})
        //}));


        //it('should have customerTypes of 5 in number', fakeAsync(() => {
        //    component.ngOnInit();

        //    tick(1000);
        //    fixture.detectChanges();
        //    contactTypes = debugEl.queryAll(By.css('#customerType'));
        //    fixture.whenStable().then(() => {
        //        expect(contactTypes.length).toBe(5);
        //    })
        //}));

        //it('should have category of length of 3 in array passing id of 1', fakeAsync(() => {
        //    component.ngOnInit();
        //    component.onSelectCustomer(1);

        //    tick(1000);
        //    fixture.detectChanges();
        //    category = debugEl.queryAll(By.css('#category'));
        //    fixture.whenStable().then(() => {
        //        console.log("category: " + category );
        //        expect(category.length).toBe(3);
        //    })
        //}));

        //it('should have subcategory of length of 2 in array passing id of 1', fakeAsync(() => {
        //    component.ngOnInit();
        //    component.onSelectCategory(1);

        //    tick(1000);
        //    fixture.detectChanges();
        //    subCategory = debugEl.queryAll(By.css('#subCategory'));
        //    fixture.whenStable().then(() => {
        //        console.log("subCategory: " + subCategory);
        //        expect(subCategory.length).toBe(2);
        //    })
        //}));


        it('should be empty for first name', fakeAsync(() => {
            component.ngOnInit();
            tick(1000);
            fixture.detectChanges();
            fName = debugEl.query(By.css('#firstName')).nativeElement ;
            fixture.whenStable().then(() => {
                console.log("fName: " + fName);
                expect(fName.textContent).toBe('');

            })
        }));


        it('should be empty for last name', fakeAsync(() => {
            component.ngOnInit();
            tick(1000);
            fixture.detectChanges();
            lName = debugEl.query(By.css('#lastName')).nativeElement;
            fixture.whenStable().then(() => {
                console.log("lName: " + lName);
                expect(lName.textContent).toBe('');
            })
        }));

        it('should be empty for phone', fakeAsync(() => {
            component.ngOnInit();
            tick(1000);
            fixture.detectChanges();
            phone = debugEl.query(By.css('#phone')).nativeElement;
            fixture.whenStable().then(() => {
                console.log("phone: " + phone);
                expect(phone.textContent).toBe('');
            })
        }));

        it('should be empty for extension', fakeAsync(() => {
            component.ngOnInit();
            tick(1000);
            fixture.detectChanges();
            extension = debugEl.query(By.css('#extension')).nativeElement;
            fixture.whenStable().then(() => {
                console.log("extension: " + extension);
                expect(extension.textContent).toBe('');
            })
        }));

        it('should be empty for notes', fakeAsync(() => {
            component.ngOnInit();
            tick(1000);
            fixture.detectChanges();
            notes = debugEl.query(By.css('#notes')).nativeElement;
            fixture.whenStable().then(() => {
                console.log("notes: " + extension);
                expect(notes.textContent).toBe('');
            })
        }));

     // NEED TO FIX THIS   -  breaks with  textContext is undefined or null 

    it('Should find trackerId in the session tracker slider panel', () => {
        let sessionTrackerfixture = TestBed.createComponent(TrackerFormTemplateComponent);
        let sessionTrackerapp = sessionTrackerfixture.debugElement.componentInstance;
        sessionTrackerapp.model.sessionId = '1234567890-1-1';
        sessionTrackerfixture.detectChanges();
        let compiled = sessionTrackerfixture.debugElement.nativeElement;
        expect(compiled.querySelector('#session').textContent).toContain('1234567890-1-1');
    });

    //it('Should find tracker datetime in the session tracker slider panel', () => {
    //    let sessionTrackerfixture = TestBed.createComponent(TrackerFormTemplateComponent);
    //    let sessionTrackerapp = sessionTrackerfixture.debugElement.componentInstance;
    //    sessionTrackerapp.model.date= '08/10/2017 20:10:50';
    //    sessionTrackerfixture.detectChanges();
    //    let compiled = sessionTrackerfixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('#date').textContent).toContain('mm/dd/yyyy');
    //});

    it('Should Maxlength of phone extension be 7', () => {
        let sessionTrackerfixture = TestBed.createComponent(TrackerFormTemplateComponent);
        let sessionTrackerapp = sessionTrackerfixture.debugElement.componentInstance;
        sessionTrackerfixture.detectChanges();
        let compiled = sessionTrackerfixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('#extension').attributes as NamedNodeMap
        expect(attributes.getNamedItem('maxlength').value).toEqual('7');
    });


    it('Should Permanent label extention is there', () => {
        let sessionTrackerfixture = TestBed.createComponent(TrackerFormTemplateComponent);
        let sessionTrackerapp = sessionTrackerfixture.debugElement.componentInstance;
        sessionTrackerfixture.detectChanges();
        let compiled = sessionTrackerfixture.debugElement.nativeElement;
        expect(compiled.querySelector('.extention-label').textContent).toContain('Extension');
    });

    it('Should Category default value selected only when custommer type not selected', () => {
      //  fixture = TestBed.createComponent(TrackerFormTemplateComponent);
      //  component = fixture.componentInstance;

        let sessionTrackerapp = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        fixture.whenStable().then(() => {
            expect(compiled.querySelector('#category').getText()).toEqual('--Select--');
        });      

    });

    //it('Should specific category list populated when that customer type is selected', () => {
    //    let sessionTrackerapp = fixture.debugElement.componentInstance;
    //    sessionTrackerapp.model.customerType = 4;
    //    fixture.detectChanges();
    //    let compiled = fixture.debugElement.nativeElement;
    //    fixture.whenStable().then(() => {
    //        expect(compiled.querySelector('#category').getText()).toEqual('--Select--');
    //    });
    
        //it('Should specific customer type d when that customer type is selected', () => {
        //    let sessionTrackerapp = fixture.debugElement.componentInstance;
        //    sessionTrackerapp.model.customerType = 1;
        //    fixture.detectChanges();
        //    let compiled = fixture.debugElement.nativeElement;
        //    fixture.whenStable().then(() => {
        //        expect(compiled.querySelector('#category').getText()).toEqual('--Select--');
        //    });

    //});


    it('Should find the Extension masking when empty', () => {
        let sessionTrackerfixture = TestBed.createComponent(TrackerFormTemplateComponent);
        let sessionTrackerapp = sessionTrackerfixture.debugElement.componentInstance;
        sessionTrackerfixture.detectChanges();
        let compiled = sessionTrackerfixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('#phone').attributes as NamedNodeMap
        expect(attributes.getNamedItem('placeholder').value).toEqual('(123) 456-7890');

        //compiled.querySelector('#phone').getAttribute('placeholder').toEqual('(123) 456-7890');
        //compiled.querySelector('#phone').getAttribute('placeholder').then((element) => {
        //    expect(element).toEqual('(123) 456-7890');
        //});

    });

    it('Should find TextArea for note', () => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
    });

    it('Notes should support maximum 4000 characters', () => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('#notes').attributes as NamedNodeMap
        expect(attributes.getNamedItem('maxlength').value).toEqual('4000');
    });

    //it('Should find counter for remaining characters for notes', () => {
    //    let sessionTrackerapp = fixture.debugElement.componentInstance;
    //    sessionTrackerapp.model.notes = 'abc';
    //    fixture.detectChanges();
    //    let compiled = fixture.debugElement.nativeElement;
    //    let notes = compiled.querySelector('#notes');
    //    notes.dispatchEvent(new Event('keyup'));
    //    fixture.detectChanges();
    //    expect(compiled.querySelector('.notes-counter').textContent).toContain('3997');
    //});

    it('Should SubCategory default value selected', () => {

        let sessionTrackerapp = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        fixture.whenStable().then(() => {
            expect(compiled.querySelector('#subCategories').getText()).toEqual('--Select--');
        });

    });

    //it('Should no option to select SubCategory until customer type and category is selected.', () => {

    //    let sessionTrackerapp = fixture.debugElement.componentInstance;
    //    fixture.detectChanges();
    //    let compiled = fixture.debugElement.nativeElement;
    //});

     //it('Changing Category resets sub category options.', () => {

    //    let sessionTrackerapp = fixture.debugElement.componentInstance;
    //    fixture.detectChanges();
    //    let compiled = fixture.debugElement.nativeElement;
    //});





}); 
