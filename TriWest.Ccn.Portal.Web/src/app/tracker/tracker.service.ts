/// <reference path="../core/services/http.service.ts" />
/// <reference path="tracker.model.ts" />
import { Injectable } from '@angular/core';
import { Contact, Customer, Category, SubCategory } from './tracker.model';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { HttpService } from '../core/services/http.service';
import { environment } from '../../environments/environment';

const contactTypesUrl = environment.apiUrl + 'api/contacttypes';
const customersUrl = environment.apiUrl + 'api/customertypes';
const interactionUrl = environment.apiUrl + 'api/csrinteractions';

@Injectable()
export class TrackerService {

    toShowOrNotToShow = true;
    urlFound: string;

    private modeTrackerSubject = new Subject<boolean>();
    pubmodeTrackerSubject = this.modeTrackerSubject.asObservable();

    private showTrackerSubject = new Subject<boolean>();
    pubTrackerSubject = this.showTrackerSubject.asObservable();

    private contactSubject = new Subject<Contact[]>();
    contactPub = this.contactSubject.asObservable();

    private customerSubject = new Subject<Customer[]>();
    customerPub = this.customerSubject.asObservable();

    private categorySubject = new Subject<Category[]>();
    categoryPub = this.categorySubject.asObservable();

    private subCategorySubject = new Subject<SubCategory[]>();
    subCategory = this.subCategorySubject.asObservable();

    contactTypes: Contact[] = [];
    customerTypes: Customer[] = [];


    constructor(r: Router, private httpService: HttpService) {
        r.events.subscribe(event => this.setTracker(event));
        this.getContactTypes();
        this.getCustomerTypes();
    }


    public getItem() {
        return this.httpService.getItem<any>(contactTypesUrl);
    }

    public getContactTypes() {
        if (this.contactTypes.length > 0) {
            this.contactSubject.next(this.contactTypes);
        } else {
            this.httpService.getItem<Contact[]>(contactTypesUrl)
                .subscribe((cts: Contact[]) => {
                    this.contactTypes = cts;
                    this.contactSubject.next(this.contactTypes);
                });
        }
    }

    public getCustomerTypes() {
        if (this.customerTypes.length > 0) {
            this.customerSubject.next(this.customerTypes);
        } else {
            this.httpService.getItem<Customer[]>(customersUrl)
                .subscribe((ccs: Customer[]) => {
                    this.customerTypes = ccs;
                    this.customerSubject.next(this.customerTypes);
                });
        }
    }

    public getCustomerList(params: URLSearchParams) {
        return this.httpService.getItem<any>(customersUrl);
    }

    public makeTrackerVisible() {
        if (this.urlFound === '/crm/newcall') {
            return true;
        }
        else return false;
    }

    public hideTrackerVisible() {
        this.showTrackerSubject.next(false);
    }


    public setTracker(event) {
        if (event instanceof NavigationEnd) {
            this.urlFound = event.url;
            let show = this.makeTrackerVisible();
            if (show) {
                this.showTrackerSubject.next(show);
            }
            
            console.log(this.urlFound);

        }
    }

    public setTrackerMode(isExpand: boolean) {
        this.modeTrackerSubject.next(isExpand);
    }

    getDate() {
        return new Date();
    }

    //getContact() {


    //}

    //getCustomer() {
    //    return [
    //        new Customer(1, 'VAMC'),
    //        new Customer(2, 'Vet'),
    //        new Customer(3, 'Provider'),
    //        new Customer(4, 'Other'),
    //        new Customer(5, 'None')
    //    ]
    //}

    //getCategory() {
    //    return [
    //        new Category(1, 1, 'VAMC-Cat-1'),
    //        new Category(2, 1, 'VAMC-Cat-2'),
    //        new Category(3, 1, 'VAMC-Cat-3'),
    //        new Category(4, 2, 'Vet-Cat-1'),
    //        new Category(5, 2, 'Vet-Cat-2'),
    //        new Category(6, 2, 'Vet-Cat-3'),
    //        new Category(7, 3, 'Provider-Cat-1'),
    //        new Category(8, 3, 'Provider-Cat-2'),
    //        new Category(9, 3, 'Provider-Cat-3'),
    //        new Category(10, 4, 'Other-Cat-1'),
    //        new Category(11, 4, 'Other-Cat-2'),
    //        new Category(12, 4, 'Other-Cat-3'),
    //        new Category(13, 5, 'None-Cat-1'),
    //        new Category(14, 5, 'None-Cat-3'),
    //        new Category(15, 5, 'None-Cat-2'),
    //    ];
    //}

    //getSubCategories() {
    //    return [
    //        new SubCategory(1, 1, 'VAMC-SubCat-1-1'),
    //        new SubCategory(2, 1, 'VAMC-SubCat-1-2'),
    //        new SubCategory(3, 2, 'VAMC-SubCat-2-1'),
    //        new SubCategory(4, 2, 'VAMC-SubCat-2-2'),
    //        new SubCategory(5, 3, 'VAMC-SubCat-3-1'),
    //        new SubCategory(6, 3, 'VAMC-SubCat-3-2'),
    //        new SubCategory(7, 4, 'Vet-SubCat-1-1'),
    //        new SubCategory(8, 4, 'Vet-SubCat-1-2'),
    //        new SubCategory(9, 5, 'Vet-SubCat-2-1'),
    //        new SubCategory(10, 5, 'Vet-SubCat-2-2'),
    //        new SubCategory(11, 6, 'Vet-SubCat-3-1'),
    //        new SubCategory(12, 6, 'Vet-SubCat-3-2'),
    //        new SubCategory(13, 7, 'Provider-SubCat-1-1'),
    //        new SubCategory(14, 7, 'Provider-SubCat-1-2'),
    //        new SubCategory(15, 8, 'Provider-SubCat-2-1'),
    //        new SubCategory(16, 8, 'Provider-SubCat-2-2'),
    //        new SubCategory(17, 9, 'Provider-SubCat-3-1'),
    //        new SubCategory(18, 9, 'Provider-SubCat-3-1'),
    //        new SubCategory(19, 10, 'Other-SubCat-1-1'),
    //        new SubCategory(20, 10, 'Other-SubCat-1-2'),
    //        new SubCategory(21, 11, 'Other-SubCat-2-1'),
    //        new SubCategory(22, 11, 'Other-SubCat-2-1'),
    //        new SubCategory(23, 12, 'Other-SubCat-3-1'),
    //        new SubCategory(24, 12, 'Other-SubCat-3-2'),
    //        new SubCategory(25, 13, 'None-SubCat-1-1'),
    //        new SubCategory(26, 13, 'None-SubCat-1-2'),
    //        new SubCategory(27, 14, 'None-SubCat-2-1'),
    //        new SubCategory(28, 14, 'None-SubCat-2-2'),
    //        new SubCategory(29, 15, 'None-SubCat-3-1'),
    //        new SubCategory(30, 15, 'None-SubCat-3-2'),
    //    ];
    //}
}

