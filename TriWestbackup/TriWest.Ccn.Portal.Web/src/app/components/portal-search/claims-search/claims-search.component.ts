import { Component, ViewChild, EventEmitter, OnInit, Input, Output, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { NgbDateStruct, NgbDatepickerConfig, NgbDateParserFormatter, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs/Observable";
import { SelectModule } from 'ng2-select';
import { ClaimsSearchFormatter } from './claims-search.formatter';
import { usStates, Programs } from '../portal-search-config';
import { Veteran360Service } from "../../../csr-portal/veteran-360/veteran-360.service";
import { Subscription } from "rxjs/Subscription";
import { ClaimsSearchParameters } from "./claims-search.model";
import { ClaimsSearchService } from "./claims-search.service";

@Component({
    selector: 'claims-search',
    templateUrl: './claims-search.component.html',
    providers: [NgbDatepickerConfig, { provide: NgbDateParserFormatter, useClass: ClaimsSearchFormatter }]
})
/** Claims Search component*/
export class ClaimsSearchComponent implements OnInit {

    @Input() searching: boolean;
    @Output() newRows = new EventEmitter<Array<any>>();
    @Output() formValidated = new EventEmitter<boolean>();


    @ViewChild('ssnTooltip') public ssnTooltip: NgbTooltip;
    @ViewChild('providerTaxIdTooltip') public providerTaxIdTooltip: NgbTooltip;
    @ViewChild('npiTooltip') public npiTooltip: NgbTooltip;

   
    public minDate = { year: 1800, month: 1, day: 1 };
    public maxDate = { year: 2099, month: 1, day: 1 };
    private tempRows: Array<any>;
    private searchComplete: boolean = true;
    private errorMessage: string = '';

    public ssnHasError: boolean = false;
    public npiHasError: boolean = false;
    public providerTaxIdHasError: boolean = false;

    claimSubscription: Subscription;
    public states: any[] = [];
    public parameters: ClaimsSearchParameters = {
        claimsNumber: '',
        veteranFirstName: '',
        veteranLastName: '',
        veteranNumber: '',
        dateOfBirth: null,
        ssnLast4: '',
        providerTaxId: '',
        providerName: '',
        npi: '',
        city: '',
        postalCode: '',
        state: []
    };

    constructor(private datepickerConfig: NgbDatepickerConfig,
        private veteran360Service: ClaimsSearchService,
        private cd: ChangeDetectorRef) {
        this.states = usStates;
    }

    /** Called by Angular after Provider Search component initialized */
    ngOnInit(): void {
        this.cd.markForCheck();
    }

    checkValid() {
        this.cd.markForCheck();
        console.group('checkValid');
        console.log('this.parameters', this.parameters);
        console.groupEnd();
        if ((this.parameters.claimsNumber !== '') ||
            ((this.parameters.veteranLastName !== null) && (this.parameters.veteranLastName.toString().length > 0)) ||
            ((this.parameters.veteranFirstName !== null) && (this.parameters.veteranFirstName.toString().length > 0)) ||
            ((this.parameters.veteranNumber !== null) && (this.parameters.veteranNumber.toString().length > 0)) ||
            (this.parameters.providerName.length > 0) ||
            ((this.parameters.npi !== null) && (this.parameters.npi.length <= 10 && this.parameters.npi.length >= 4)) ||
            ((this.parameters.providerTaxId !== null) && (this.parameters.providerTaxId.toString().length <= 10 && this.parameters.providerTaxId.toString().length >= 4)) ||
            ((this.parameters.ssnLast4 !== null) && (this.parameters.ssnLast4.toString().length === 4)) ||
            ((this.parameters.city !== null) && (this.parameters.city.toString().length > 0)) ||
            ((this.parameters.state !== null) && (this.parameters.state.length > 0)) ||
            ((this.parameters.postalCode !== null) && (this.parameters.postalCode.toString().length > 0)) ||
            ((this.parameters.dateOfBirth) && (this.parameters.dateOfBirth.year) && (this.parameters.dateOfBirth.year > 0))) {
            this.formValidated.emit(true);
            this.validateAndDisplayToolTip();
            // this.ssnHasError = false;
            // this.npiHasError = false;
        }
        else {
            console.log('One or more variables did not pass..')
            this.validateAndDisplayToolTip();
            this.formValidated.emit(false);
        }

    }

    validateAndDisplayToolTip() {
        if (this.parameters.ssnLast4 !== null) {
            if (this.parameters.ssnLast4.toString().length < 4 &&
                this.parameters.ssnLast4.toString().length > 0) {
                this.ssnTooltip.ngbTooltip = "4 Digits Required";
                this.ssnTooltip.placement = "left";
                this.ssnHasError = true;
                this.ssnTooltip.open();
            }
            else {
                this.ssnHasError = false;
                this.ssnTooltip.close();
            }
        }
        if (this.parameters.npi !== null) {
            if ((this.parameters.npi.toString().length > 0) &&
                (this.parameters.npi.toString().length < 4)) {
                this.npiTooltip.ngbTooltip = "Minimum 4 Digits Required";
                this.npiTooltip.placement = 'top';
                this.npiHasError = true;
                this.npiTooltip.open();
            }
            else {
                this.npiHasError = false;
                this.npiTooltip.close();
            }
        }
        if (this.parameters.providerTaxId !== null) {
            if ((this.parameters.providerTaxId.toString().length > 0) &&
                (this.parameters.providerTaxId.toString().length < 4)) {
                this.providerTaxIdTooltip.ngbTooltip = "Minimum 4 Digits Required";
                this.providerTaxIdTooltip.placement = 'top';
                this.providerTaxIdHasError = true;
                this.providerTaxIdTooltip.open();
            }
            else {
                this.providerTaxIdHasError = false;
                this.providerTaxIdTooltip.close();
            }
        }
        //else {
        //    this.npiHasError = true;
        //    this.npiTooltip.close();
        //}
    }


    stateRemoved() {
        let tempValid: boolean = (
            (this.parameters.claimsNumber !== '') ||
            (this.parameters.veteranLastName !== '') ||
            (this.parameters.veteranFirstName !== '') ||
            (this.parameters.veteranNumber !== '') ||
            (this.parameters.ssnLast4 !== '') ||
            (this.parameters.providerTaxId.length > 0) ||
            (this.parameters.providerName.length > 0) ||
            (this.parameters.npi !== '') ||
            (this.parameters.city !== '') ||
            (this.parameters.state.length > 0) ||
            (this.parameters.postalCode !== '') ||
            ((this.parameters.dateOfBirth) && (this.parameters.dateOfBirth.year) && (this.parameters.dateOfBirth.year > 0)));
        this.formValidated.emit(tempValid);
    }

    selected() {
        this.formValidated.emit(true);
    }

    clearFields() {
        this.parameters.claimsNumber = '';
        this.parameters.veteranLastName = '';
        this.parameters.veteranFirstName = '';
        this.parameters.veteranNumber = '';
        this.parameters.ssnLast4 = '';
        this.parameters.providerTaxId = '';
        this.parameters.providerName = '';
        this.parameters.npi = '';
        this.parameters.city = '';
        this.parameters.state = [];
        this.parameters.postalCode = '';
        this.parameters.dateOfBirth = { month: null, day: null, year: null }
        this.clearToolTips();
    }

    clearToolTips() {
        this.ssnHasError = false;
        this.ssnTooltip.close();
        this.providerTaxIdHasError = false;
        this.providerTaxIdTooltip.close();
        this.npiHasError = false;
        this.npiTooltip.close();
    }

    doSearch() {
        let params = new URLSearchParams();
        this.tempRows = [];
        this.searchComplete = false;

        // Check that each search parameter is present and contains an appropriate value. If so, 
        // add it to the search parameters.  
        params.append('page', '1');
        params.append('pageSize', '25');
        if (this.parameters.veteranNumber)
            params.append('veteranNumber', this.parameters.veteranNumber);

        if (this.parameters.providerTaxId && this.parameters.providerTaxId.toString().length > 3)
            params.append('providerTaxId', this.parameters.providerTaxId);


        if (this.parameters.claimsNumber)
            params.append('claimNumber', this.parameters.claimsNumber);

        if (this.parameters.veteranLastName)
            params.append('veteranLastName', this.parameters.veteranLastName);

        if (this.parameters.veteranFirstName)
            params.append('veteranFirstName', this.parameters.veteranFirstName);

        if (this.parameters.dateOfBirth && this.parameters.dateOfBirth.year)
            params.append('dob',
                this.parameters.dateOfBirth.month + "/" +
                this.parameters.dateOfBirth.day + '/' +
                this.parameters.dateOfBirth.year);

        if (this.parameters.ssnLast4)
            params.append('ssnLast4', this.parameters.ssnLast4);

        if (this.parameters.providerName)
            params.append('providerName', this.parameters.providerName);

        if (this.parameters.npi && this.parameters.npi.toString().length > 3)
            params.append('npi', this.parameters.npi);

        if (this.parameters.city)
            params.append('city', this.parameters.city);

        if (this.parameters.state &&
            this.parameters.state instanceof Array &&
            this.parameters.state.length > 0)
            params.append('state', this.parameters.state[0].id);

        if (this.parameters.postalCode)
            params.append('zip', this.parameters.postalCode);

        this.claimSubscription = this.veteran360Service.getClaimList(params)
            .subscribe((response: any) => {
                console.log("*******");
                console.log(response);
                let claimRows = this.veteran360Service.getClaimDatas(response);
                console.log(claimRows);
                this.searchComplete = true;

                this.newRows.emit(claimRows);
            },
            error => this.errorMessage = <any>error);
    }

}
