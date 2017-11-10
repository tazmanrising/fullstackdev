//import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { DatePipe } from '@angular/common';
//import { TrackerService } from '../tracker.service';
//import { Contact, Customer, Category, SubCategory } from '../tracker.model';
//import { TrackerSliderComponent } from '../tracker-slider/tracker-slider.component';




//@Component({
//    selector: 'tracker-form',
//    templateUrl: './tracker-form.component.html',
//    styleUrls: ['./tracker-form.component.css'],
//    providers: [TrackerService]

//})
///** tracker-form component*/
//export class TrackerFormComponent implements OnInit {
//    trackerForm: FormGroup;
//    session: string;
//    date: Date;
//    setCustomer: boolean;
//    setContact: boolean;
//    setCategory: boolean;
//    setSubCategory: boolean;

//    categories: Category[];
//    subCategories: SubCategory[];

//    //catergories: any [];
//    //subCategories: any[];
//    //subCategoriesAfterChangeEvent = [];
//    //session: FormControl;
//    //date: FormControl;
//    //contactType: FormControl;
//    //customerType: FormControl;
//    //catergory: FormControl;
//    //subCategory: FormControl;
//    //firstName: FormControl;
//    //lastName: FormControl;
//    //phone: FormControl;
//    //extension: FormControl;


//    contactTypes: Contact[];


//    customerTypes: Customer[];


//    //categoryTypes: string[] = [
//    //    'Category 1',
//    //    'Category 2',
//    //    'Category 3',
//    //    'Category 4',
//    //    'Category 5'
//    //];

//    //subCategoryTypes: string[] = [
//    //    'Sub Category 1',
//    //    'Sub Category 2',
//    //    'Sub Category 3',
//    //    'Sub Category 4',
//    //    'Sub Category 5'
//    //];


//    //this.date = new Date();
//    /** tracker-form ctor */
//    constructor(
//        private dataService: TrackerService,
//        private trackerSlider: TrackerSliderComponent) {}

//    /** Called by Angular after tracker-form component initialized */
//    ngOnInit(): void {

//        this.contactTypes = this.dataService.getContact();
//        this.customerTypes = this.dataService.getCustomer();


//        this.session = '1234567890-1-1';
//        this.date = new Date();
//        this.trackerForm = new FormGroup({
//            session: new FormControl(this.session),
//            date: new FormControl(this.date),
//            contactType: new FormControl(this.contactTypes, [
//                Validators.required
//            ]),
//            customerType: new FormControl(this.customerTypes, Validators.required),
//            category: new FormControl(this.categories, Validators.required),
//            subCategory: new FormControl(this.subCategories, Validators.required),

//            firstName: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'\-])+$")]),
//            lastName: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern("^([ \u00c0-\u01ffa-zA-Z'\-])+$")]),
//            phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^([0-9'\-])+$")]),
//            extension: new FormControl('', [Validators.maxLength(7)])

//        });

//        //this.setCustomer = !this.trackerForm.controls['customerType'].value;
//        //this.setContact = !this.trackerForm.controls['contactType'].value;
//        //this.setCategory = !this.trackerForm.controls['categoryType'].value;
//        //this.setSubCategory = !this.trackerForm.controls['subCategoryType'].value;
//    }


//    //labelUpFn() {
//    //    if (this.trackerForm.controls['firstName'].dirty && this.trackerForm.controls['firstName'].value) {
//    //        return true;
//    //    }
//    //    else return false;
//    //}
//    //labelUpLn() {
//    //    if (this.trackerForm.controls['lastName'].dirty && this.trackerForm.controls['lastName'].value) {
//    //        return true;
//    //    }
//    //    else return false;
//    //}

//    onSubmit(tracker) {
//        console.log(JSON.stringify(tracker));
//        this.trackerForm.reset();
//    }

//    numbersOnly(e) {
//        if (!(e.keyCode >= 46 && e.keyCode <= 57) && (e.keyCode >= 96 && e.keyCode <= 105) && (e.keyCode == 8)) {

//            e.preventDefault();
//        }

//        //var y = this.trackerForm.controls['phone']
//        //this.trackerForm.controls['phone'].patchValue(y.value.replace(/[^0-9.-]/g, ''));
//        // OR
//        //this.trackerForm.controls['phone'].setValue(y.value.replace(/[^0-9.-]/g, ''));

//        //console.log('y', y);

//    }

//    //setCategoryFlag() {
//    //    this.setCategory = !this.setCategory;
//    //}

//    //compareCategory(c1: string, c2: string): boolean {
//    //    return c1 === c2;
//    //}

//    //setSubCategoryFlag() {
//    //    this.setSubCategory = !this.setSubCategory;
//    //}

//    //compareSubCategory(c1: string, c2: string): boolean {
//    //    return c1 === c2;
//    //} 

//    //setCustomerFlag() {
//    //    this.setCustomer = !this.setCustomer;
//    //}
//    //setContactFlag() {
//    //    this.setContact = !this.setContact;
//    //}

//    onSelectCustomer(customerid) {
//        this.categories = [];
//        this.subCategories = [];
//        this.categories = this.dataService.getCategory().filter(item => item.customerid == customerid);
//        console.log(customerid);


//    }

//    onSelectCategory(categoryid) {
//        this.subCategories = [];
//        this.subCategories = this.dataService.getSubCategories().filter(item => item.categoryid == categoryid);
//        console.log(categoryid);
//    }

//    toggleMenu() {
//        this.trackerSlider.toggleMenu();
//    }



//}
