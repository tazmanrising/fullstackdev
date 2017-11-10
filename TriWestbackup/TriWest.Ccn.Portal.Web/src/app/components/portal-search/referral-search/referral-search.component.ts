import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { SelectModule } from 'ng2-select';

import { ReferralSearchService } from './referral-search.service';
import { ReferralSearchParameters } from './referral-search.model';
//import { ReferralSearchFormatter } from './referral-search.formatter';

@Component({
    selector: 'referral-search',
    templateUrl: './referral-search.component.html',
    providers: [
        ReferralSearchService
    ]
})
export class ReferralSearchComponent implements OnInit {
    @Input() searching: boolean;
    @Output() newRows = new EventEmitter<Array<any>>();
    @Output() formValidated = new EventEmitter<boolean>();

    private tempRows: Array<any>;
    private searchComplete: boolean = true;
    private errorMessage: string = '';

    params: ReferralSearchParameters = new ReferralSearchParameters();

    programs: any[] = [];
    profiles: any[] = [];
    reasonCodes: any[] = [];
    categoryOfCareItems: any[] = [];
    vamcs: any[] = [];

    constructor(private service: ReferralSearchService) { }

    ngOnInit(): void {
        this.loadDropdowns();
    }

    public clearFields() {
        this.params.vamcs            = [];
        this.params.categoryOfCares  = [];
        this.params.reasonCodes      = [];
        this.params.veteranProfiles  = [];
        this.params.veteranPrograms  = [];
        this.params.memberNumber     = '';
        this.params.provider         = '';
        this.params.referralNumber   = '';
        this.params.ssnLast4         = '';
        this.params.veteranFirstName = '';
        this.params.veteranLastName  = '';
        this.params.veteranZipCode   = '';
        this.params.createdOnStart   = ''; //{ month: null, day: null, year: null };
        this.params.createdOnEnd     = ''; //{ month: null, day: null, year: null };
    }

    public doSearch() {
        console.info('doSearch', this.params);

        this.tempRows = [];
        let searchParams = new URLSearchParams();

        if (this.params.veteranLastName)
            searchParams.append('veteranLastName', this.params.veteranLastName);
        if (this.params.veteranFirstName)
            searchParams.append('veteranFirstName', this.params.veteranFirstName);
        if (this.params.veteranZipCode)
            searchParams.append('veteranZipCode', this.params.veteranZipCode);
        if (this.params.memberNumber)
            searchParams.append('memberNumber', this.params.memberNumber);
        if (this.params.ssnLast4)
            searchParams.append('ssnLast4', this.params.ssnLast4);
        if (this.params.referralNumber)
            searchParams.append('referralNumber', this.params.referralNumber);

        if (this.params.vamcs &&
            this.params.vamcs instanceof Array &&
            this.params.vamcs.length > 0)
            searchParams.append('vamc', this.params.vamcs[0].text);

        if (this.params.provider)
            searchParams.append('provider', this.params.provider);

        if (this.params.veteranProfiles &&
            this.params.veteranProfiles instanceof Array &&
            this.params.veteranProfiles.length > 0)
            searchParams.append('profile', this.params.veteranProfiles[0].text);

        if (this.params.categoryOfCares &&
            this.params.categoryOfCares instanceof Array &&
            this.params.categoryOfCares.length > 0)
            searchParams.append('categoryOfCare', this.params.categoryOfCares[0].text);

        if (this.params.veteranPrograms &&
            this.params.veteranPrograms instanceof Array &&
            this.params.veteranPrograms.length > 0)
            searchParams.append('program', this.params.veteranPrograms[0].text);

        if (this.params.reasonCodes &&
            this.params.reasonCodes instanceof Array &&
            this.params.reasonCodes.length > 0)
            searchParams.append('reasonCode', this.params.reasonCodes[0].text);

        if (this.params.createdOnStart) // && this.params.createdOnStart.year)
            searchParams.append('createdOnStart', this.params.createdOnStart);

        if (this.params.createdOnEnd) // && this.params.createdOnEnd.year)
            searchParams.append('createdOnEnd', this.params.createdOnEnd);

        // Call the API URL, with the supplied parameters.
        this.service.searchReferrals(searchParams).subscribe(
            value => {
                this.searchComplete = true;
                this.newRows.emit(value);
            },
            error => this.errorMessage = <any>error
        );

    }

    selected() {
        this.formValidated.emit(true);
    }

    checkValid() {
        console.info('checkValid()', this.params);
        let isValid: boolean = (
            (this.params.vamcs.length > 0) ||
            (this.params.categoryOfCares.length > 0) ||
            (this.params.reasonCodes.length > 0) ||
            (this.params.veteranProfiles.length > 0) ||
            (this.params.veteranPrograms.length > 0) ||
            (this.params.memberNumber !== '') ||
            (this.params.provider !== '') ||
            // check if referral number has at least 4 characters
            (this.params.referralNumber !== '' && this.params.referralNumber.length >= 4) ||
            (this.params.ssnLast4 !== '') ||
            (this.params.veteranFirstName !== '') ||
            (this.params.veteranLastName !== '') ||
            (this.params.veteranZipCode !== '') ||
            (this.params.createdOnStart !== '' && this.isValidDate(this.params.createdOnStart)) ||//) && (this.params.createdOnStart.year)) ||
            (this.params.createdOnEnd !== '' && this.isValidDate(this.params.createdOnEnd)) //) && (this.params.createdOnEnd.year)) 
        );
        this.formValidated.emit(isValid);
        return isValid;
    }

    private isValidDate(dateString: string) {
        return (/(\d{1,2})\/(\d{1,2})\/(\d{4})/).test(dateString);        
    }

    dropdownRemoved() {
        this.formValidated.emit(this.checkValid());
    }

    private loadDropdowns(): void {
        this.service.getVamcList().subscribe((list) => {
            this.vamcs = list;
        });
        this.service.getVeteranPrograms().subscribe((list) => {
            this.programs = list;
        });
        this.service.getVeteranProfiles().subscribe((list) => {
            this.profiles = list;
        });
        this.service.getReasonCodes().subscribe((list) => {
            this.reasonCodes = list;
        });
        this.service.getCategoryOfCareList().subscribe((list) => {
            this.categoryOfCareItems = list;
        });
    }

}
