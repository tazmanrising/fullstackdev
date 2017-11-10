import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NgbDateStruct, NgbDatepickerConfig, NgbModal, ModalDismissReasons, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { DatePickerModel, SearchParameters, VeteranVerificationInfo } from './verify-veteran-caller.model';
import { VerifyVeteranCallerService } from './verify-veteran-caller.service';
import { RowData } from './verify-veteran-caller.mock';
import { VerifyVertanCallerFormatter } from './verify-veteran-caller.formatter';
import { environment } from '../../../../environments/environment';

import { IeNumeric } from '../../../core/directives/ie-numeric/ie-numeric.directive';

@Component({
    selector: 'verify-veteran-caller',
    templateUrl: './verify-veteran-caller.component.html',
    providers: [VerifyVeteranCallerService, NgbDatepickerConfig, { provide: NgbDateParserFormatter, useClass: VerifyVertanCallerFormatter }]
})

/** verify-veteran-caller component*/
export class VerifyVeteranCallerComponent implements OnInit
{
    results: VeteranVerificationInfo[] = [];
    parameters: SearchParameters = {
        firstName: null,
        lastName: null,
        ssnLast4: null,
        repFName: null,
        repLName: null,
        dob: {
            month: null,
            day: null,
            year: null
        }
    };
    selected: any[] = [];
    errorMessage: string = '';
    showLoadingIndicator: boolean = false;
    searchComplete: boolean = false;
    isRepresentative: boolean = false;
    modalMessage: string;
    repFirstName: string = '';
    repLastName: string = '';
    allowContinue: boolean = false;
    searchEnabled: boolean = false;

    constructor(private datepickerConfig: NgbDatepickerConfig,
                private verifyVeteranCaller: VerifyVeteranCallerService,
                private router: Router,
                private modalService: NgbModal) {

        datepickerConfig.minDate = { month: 1, day: 1, year: (new Date().getFullYear() - 118) };
        datepickerConfig.maxDate = { month: 1, day: 1, year: (new Date().getFullYear() - 18) };
    }

    /** Called by Angular after verify-veteran-caller component initialized */
    ngOnInit(): void { }

    onSelectRow({ selected }, content) {
        console.log('Select Event', selected, this.selected);
        console.log(selected[0].hippaAlerts);

        console.group('isRepresentative values')
        console.log('this.isRepresentative', this.isRepresentative)
        console.log('this.repFirstName', this.parameters.repFName)
        console.log('this.repLastName', this.parameters.repLName)
        console.log((this.isRepresentative && (this.parameters.repFName === '' || this.parameters.repLName === '')));
        console.groupEnd();

        if (this.isRepresentative && (this.parameters.repFName === '' || this.parameters.repLName === '')) {
            console.log('thinks its true');
            this.modalMessage = "If the caller is a Veteran Representative, both their first and last name must be entered. Please enter the representative's name and re-select the veteran from the list."
            this.modalService.open(content);
            this.allowContinue = false;
        }
        else {
            this.modalMessage = "";
            if (this.isRepresentative) {
                if (selected[0].hippaAlerts) {
                    this.modalService.open(content).result.then((result) => {
                        console.log("result", result);
                        if (result === 'confirmed') {
                            this.allowContinue = true;
                        }
                    }, (reason) => {
                        console.log("reason", reason);
                        if (reason === 'canceled') {
                            this.allowContinue = false;
                        }
                    });
                }
                else {
                    this.modalMessage = "No HIPPA Alerts, this caller is not authorized."
                    this.allowContinue = false;
                }
            }
            else {
                this.allowContinue = true;
            }
        }
    }

    checkValid() {
        // First, build the true/false state of the dateOfBirth datepicker..
        //
        let dobStatus = false;
        if ((this.parameters.dob !== null) && (this.parameters.dob instanceof Object) && (this.parameters.dob.year > 1899))
            dobStatus = true;

        let ssnStatus = false;
        if ((this.parameters.ssnLast4 !== null) && (this.parameters.ssnLast4.toString().length === 4))
            ssnStatus = true;

        let lastNameStatus = false;
        if ((this.parameters.lastName !== null) && (this.parameters.lastName.toString().length > 0))
            lastNameStatus = true;


        if (lastNameStatus && (dobStatus || ssnStatus))
            this.searchEnabled = true;
        else {
            if ((this.parameters.ssnLast4 !== null) &&
                (this.parameters.ssnLast4.toString().length > 0) &&
                (this.parameters.ssnLast4.toString().length < 4)) {

            }
            this.searchEnabled = false;

        }

        console.group('checkValid');
        console.log('dobStatus', dobStatus);
        console.log('ssnStatus', ssnStatus);
        console.log('(lastNameStatus && (dobStatus || ssnStatus))', (lastNameStatus && (dobStatus || ssnStatus)));
        console.log('lastNameStatus', lastNameStatus);
        console.log('this.searchEnabled', this.searchEnabled);
        console.groupEnd();

     }
    doSearch(): any { 
        let params = new URLSearchParams();
        this.results = [];
        this.searchComplete = false;
        this.showLoadingIndicator = true;
        this.selected = [];

        // Last name is present and contains any number of characters.
        if (this.parameters.lastName) 
            params.append('lastName', this.parameters.lastName);

        // First name is present and contains any number of characters.
        if (this.parameters.firstName)
            params.append('firstName', this.parameters.firstName);

        // First name is present and contains any number of characters.
        if (this.parameters.ssnLast4 || (this.parameters.dob.month && this.parameters.dob.day && this.parameters.dob.year)) {
            if (this.parameters.ssnLast4)
                params.append('ssnLast4', this.parameters.ssnLast4);

            if (this.parameters.dob && (this.parameters.dob.month && this.parameters.dob.day && this.parameters.dob.year))
                params.append('dob', this.parameters.dob.month + '/' + this.parameters.dob.day + '/' + this.parameters.dob.year);

        }
        this.verifyVeteranCaller.getVeterans(params).subscribe(value => {
            this.results = value;
            this.searchComplete = true;
            this.showLoadingIndicator = false;
        }, error => this.errorMessage = <any>error);
    } 

    clickContinue() {
        this.router.navigate(['crm/veteran-360', this.selected[0].id]);
    }

    clickGeneral() {
        this.router.navigate(['crm/general-info']);
    }

    onSelectDate(event) {
        // Reserved for future use.
        // 
    }

    filterNonNumeric(event: any) {
        return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
    }
}
