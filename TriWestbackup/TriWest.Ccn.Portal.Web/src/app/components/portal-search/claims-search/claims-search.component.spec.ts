import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect, tick, fakeAsync, getTestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from "@angular/platform-browser";
import { ClaimsSearchComponent } from './claims-search.component';
import { NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";
import { SelectModule } from 'ng2-select';
import { Veteran360Module } from "../../../csr-portal/veteran-360/veteran-360.module";

let component: ClaimsSearchComponent;
let fixture: ComponentFixture<ClaimsSearchComponent>;

describe('Claims Search component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                ReactiveFormsModule,
                CommonModule,
                FormsModule,
                RouterTestingModule,
                HttpModule,
                Veteran360Module,

                NgbDatepickerModule,
                SelectModule
            ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });


        fixture = TestBed.createComponent(ClaimsSearchComponent);
        component = fixture.componentInstance;

        //debugEl = fixture.debugElement;
        //firstName = debugEl.query(By.css("#firstName")).nativeElement;
        //lastName = debugEl.query(By.css("#lastName")).nativeElement;
        //vamcSelect = debugEl.query(By.css("#vamc")).nativeElement;
        //stationId = debugEl.query(By.css("#stationId")).nativeElement;
        //email = debugEl.query(By.css("#email")).nativeElement;
    }));



    it('should create the component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();

    });



    it('Provider Tax ID should take Maximum of 9 digit', async(() => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('#ProviderTaxId').attributes as NamedNodeMap
        expect(attributes.getNamedItem('maxlength').value).toEqual('9');
    }));

    //it('should be empty for provider name', fakeAsync(() => {
    //    component.ngOnInit();
    //    tick(1000);
    //    fixture.detectChanges();
    //    let compiled = fixture.debugElement.nativeElement;
    //    let providerName = compiled.querySelector('.providerName');
    //    fixture.whenStable().then(() => {
    //        expect(providerName.textContent).toBe('');

    //    })
    //}));


    it('NPI should take Maximum of 10 digit', async(() => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('#npi').attributes as NamedNodeMap
        expect(attributes.getNamedItem('maxlength').value).toEqual('10');
    }));

    it('Veteran Number should take Maximum of 10 digit', async(() => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('.veteran-number').attributes as NamedNodeMap
        expect(attributes.getNamedItem('maxlength').value).toEqual('10');
    }));

    it('SSN should take Maximum of 4 digit', async(() => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let attributes = compiled.querySelector('.ssn-number').attributes as NamedNodeMap
        expect(attributes.getNamedItem('maxlength').value).toEqual('4');
    }));

    it('should be empty for first name', fakeAsync(() => {
        component.ngOnInit();
        tick(1000);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let claimNumber = compiled.querySelector('.claims-number');
        fixture.whenStable().then(() => {
          //  console.log("fName: " + fName);
            expect(claimNumber.textContent).toBe('');

        })
    }));

    it('should be empty for last name', fakeAsync(() => {
        component.ngOnInit();
        tick(1000);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        let claimNumber = compiled.querySelector('.claims-number');
        fixture.whenStable().then(() => {
            expect(claimNumber.textContent).toBe('');

        })
    }));

    


    //it('should be empty for last name', fakeAsync(() => {
    //    component.ngOnInit();
    //    tick(1000);
    //    fixture.detectChanges();
    //    lName = debugEl.query(By.css('#lastName')).nativeElement;
    //    fixture.whenStable().then(() => {
    //        console.log("lName: " + lName);
    //        expect(lName.textContent).toBe('');
    //    })
    //}));


    //it('should check initial input', () => {
    //    fixture.detectChanges();
    //    fixture.whenStable().then(() => {
    //        expect(firstName.value).toBe('');
    //        expect(lastName.value).toBe('');
    //        expect(stationId.value).toBe('');
    //        expect(email.value).toBe('');
    //        console.log(vamcSelect.value);
    //    });
    //});
});
