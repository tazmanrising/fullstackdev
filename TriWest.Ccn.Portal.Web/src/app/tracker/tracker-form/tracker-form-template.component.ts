import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TrackerService } from '../tracker.service';
import { Contact, Customer, Category, SubCategory, TrackerForm } from '../tracker.model';
import { TrackerSliderComponent } from '../tracker-slider/tracker-slider.component';
import { MaskDirective } from '../tracker-directives/mask.directive';
import { TrackerFormService } from '../tracker-service/tracker-form.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
    selector: 'tracker-form-temp',
    templateUrl: './tracker-form-template.component.html',
    styleUrls: ['./tracker-form-template.component.css'],
    providers: [TrackerService, TrackerFormService],
})
/** tracker-form component*/
export class TrackerFormTemplateComponent implements OnInit, OnDestroy {
    model: TrackerForm = new TrackerForm();
    contactSubscription: Subscription;
    customerSubcription: Subscription;
    date: string;
    @ViewChild('f') form: any;
    setCustomer: boolean;
    setContact: boolean;
    setCategory: boolean;
    setSubCategory: boolean;
    charCounter: number;
    maxCharsInNotes = 4000;
    categories: Category[];
    subCategories: SubCategory[];
    contactTypes: Contact[];
    customerTypes: Customer[];
    /** tracker-form ctor */
    constructor(
        private trackerService: TrackerService,
        private dataService: TrackerFormService,
        private trackerSlider: TrackerSliderComponent,
        private router: Router

    ) { }
    /** Called by Angular after tracker-form component initialized */
    ngOnInit(): void {

        this.date = new Date().toString();
        this.model.timerStart = new Date().toISOString();
        this.characterCounter();
        this.dataService.addSession().subscribe(
            result => {
                this.model.sessionId = result.sessionId + '-1-1'
            },
            error => {
                console.log(error);
            }
        )


        this.contactSubscription = this.trackerService.contactPub
            .subscribe((cts: Contact[]) => {
                this.contactTypes = cts;
            });
        this.trackerService.getContactTypes();


        this.customerSubcription = this.trackerService.customerPub
            .subscribe((ccs: Customer[]) => {
                this.customerTypes = ccs;
            });
        this.trackerService.getCustomerTypes();




        //this.customerTypes = this.trackerService.getCustomer();
       
    }

    ngOnDestroy() {
        this.contactSubscription.unsubscribe();
        this.customerSubcription.unsubscribe();
    }


    //labelUpFn() {
    //    if (this.trackerForm.controls['firstName'].dirty && this.trackerForm.controls['firstName'].value) {
    //        return true;
    //    }
    //    else return false;
    //}
    //labelUpLn() {
    //    if (this.trackerForm.controls['lastName'].dirty && this.trackerForm.controls['lastName'].value) {
    //        return true;
    //    }
    //    else return false;
    //}

    onSubmit(tracker) {

        this.model.timerEnd = new Date().toISOString();
        let beforetrackerparse = this.model.sessionId;
        let stringparts = beforetrackerparse.split('-', 3);
        this.model.sessionId = stringparts[0].toString();
        this.model.timerStart
        console.log(stringparts);

        console.log(JSON.stringify(this.model));
        if (this.form.valid) {
            this.dataService.updateSession(this.model).subscribe(() => {
                this.form.reset();
                this.model.phone = '';
                this.model.sessionNote = '';
                this.characterCounter();
                this.router.navigate(['']);
                this.trackerService.hideTrackerVisible();

            });
         
           
        }
    }


    onSelectCustomer(customerid) {
        this.categories = [];
        this.subCategories = [];
        this.model.categoryId = null;
        this.model.subCategoryId = null;
        this.categories = this.customerTypes.find(item => item.customerTypeId == customerid).childCategories;
        console.log(customerid);


    }

    onSelectCategory(categoryid) {
        this.model.subCategoryId = null;
        this.subCategories = [];
        this.subCategories = this.categories.find(item => item.categoryId == categoryid).childSubCategories;
        console.log(categoryid);
    }

    toggleMenu() {
        this.trackerSlider.toggleMenu();
    }


    characterCounter() {
        this.charCounter = this.maxCharsInNotes - this.model.sessionNote.length;

    }



}
