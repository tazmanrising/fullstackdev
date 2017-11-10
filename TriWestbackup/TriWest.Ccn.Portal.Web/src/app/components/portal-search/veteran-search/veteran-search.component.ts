import { Component, ViewChild, EventEmitter, OnInit, Input, Output, ChangeDetectorRef } from '@angular/core';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { NgbDateStruct, NgbDatepickerConfig, NgbDateParserFormatter, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs/Observable";
import { SelectModule } from 'ng2-select';
import { NgControl, DefaultValueAccessor, FormControl, Validators } from '@angular/forms';
import { VeteranSearchParameters, DatePickerModel } from './veteran-search.model';
import { VeteranSearchService } from './veteran-search.service';
import { VeteranSearchFormatter } from './veteran-search.formatter';
import { usStates, Programs } from '../portal-search-config';

@Component({
    selector: 'veteran-search',
    templateUrl: './veteran-search.component.html',
    providers: [VeteranSearchService, NgbDatepickerConfig, { provide: NgbDateParserFormatter, useClass: VeteranSearchFormatter }],

})
/** Veteran Search component*/
export class VeteranSearchComponent implements OnInit {
    @Input() searching: boolean;
    @Output() newRows = new EventEmitter<Array<any>>();
    @Output() formValidated = new EventEmitter<boolean>();

    public tempRows: Array<any>;
    public searchComplete: boolean = true;
    public errorMessage: string = '';
    public states: any[] = [];
    public vamcList: any[] = [];
    public programs: any[] = [];
    public ssnHasError: boolean = false;


    @ViewChild('ssnTooltip') public ssnTooltip: NgbTooltip;


    public parameters: VeteranSearchParameters = {
        lastName: '',
        firstName: '',
        memberNumber: '',
        phone: '',
        ssnLast4: '',
        dateOfBirth: null,
        vamc: [],
        program: [],
        city: '',
        state: [],
        postalCode: ''
    }


    constructor(private datepickerConfig: NgbDatepickerConfig,
        private veteranSearchService: VeteranSearchService,
        private cd: ChangeDetectorRef) {
        this.states = usStates;
        this.programs = Programs;

        datepickerConfig.minDate = { month: 1, day: 1, year: (new Date().getFullYear() - 118) };
        datepickerConfig.maxDate = { month: 1, day: 1, year: (new Date().getFullYear() - 18) };
    }

    ngOnInit(): void {
        this.veteranSearchService.getVamcList().subscribe(
            value => { this.vamcList = value; },
            error => this.errorMessage = <any>error);
    }
    checkValid() {
        console.group('checkValid');
       // console.log("(this.parameters.lastName != '')", (this.parameters.lastName != ''));
       // console.log("(this.parameters.firstName != '')", (this.parameters.firstName != ''));
       // console.log("(this.parameters.memberNumber != '')", (this.parameters.memberNumber != ''));
       // console.log("(this.parameters.phone != '')", (this.parameters.phone != ''));
       // console.log("(this.parameters.city != '')", (this.parameters.city != ''));
       //// console.log("((this.parameters.ssnLast4 != '') && (this.parameters.ssnLast4.toString().length === 4 || this.parameters.ssnLast4.toString().length === 0)) ", ((this.parameters.ssnLast4 != '') && (this.parameters.ssnLast4.toString().length === 4 || this.parameters.ssnLast4.toString().length === 0)) );
       // console.log("((this.parameters.vamc !== null) && (this.parameters.vamc.length > 0))", ((this.parameters.vamc !== null) && (this.parameters.vamc.length > 0)));
       // console.log("((this.parameters.state !== null) && (this.parameters.state.length > 0)) ", ((this.parameters.state !== null) && (this.parameters.state.length > 0)) );
       // console.log("((this.parameters.program !== null) && (this.parameters.program.length > 0))", ((this.parameters.program !== null) && (this.parameters.program.length > 0)));
       // console.log("((this.parameters.postalCode != '') && (this.parameters.postalCode.toString().length > 4))", ((this.parameters.postalCode != '') && (this.parameters.postalCode.toString().length > 4)));
       // console.log("", );
       // console.log("(this.parameters.ssnLast4 === null)", (this.parameters.ssnLast4 === null));
       // console.log("(this.parameters.ssnLast4 === undefined)", (this.parameters.ssnLast4 === undefined));
       // console.log("(this.parameters.ssnLast4 != '')", (this.parameters.ssnLast4 != ''));

        console.groupEnd();




        // Check each form field individually, for flexibility.
        if (
            (this.parameters.lastName != '') ||
            (this.parameters.firstName != '') ||
            (this.parameters.memberNumber != '') ||
            (this.parameters.ssnLast4 != null) ||
            ((this.parameters.phone != null) && (this.parameters.phone != '')) ||
            (this.parameters.city != '') ||
            ((this.parameters.vamc !== null) && (this.parameters.vamc.length > 0)) ||
            ((this.parameters.state !== null) && (this.parameters.state.length > 0)) ||
            ((this.parameters.program !== null) && (this.parameters.program.length > 0)) ||
            ((this.parameters.postalCode != null) && (this.parameters.postalCode != '')) 
            
        ) {
            console.log('Stadard validation passed, checking extended validation')
             // Check the length of the zip code.
            console.log('this.parameters.ssnLast4.toString().length', this.parameters.ssnLast4.toString().length);
            console.log('this.parameters.postalCode.toString().length', this.parameters.postalCode.toString().length);

            if (this.parameters.postalCode != '') {
                if ((this.parameters.postalCode.toString().length < 5) && (this.parameters.postalCode.toString().length != 0)) {
                    this.formValidated.emit(false);
                    return;
                }
            }
            if (this.parameters.ssnLast4 != '') {
                if ((this.parameters.ssnLast4.toString().length > 0 ) && (this.parameters.ssnLast4.toString().length < 4)) {
                    this.formValidated.emit(false);
                    return
                }
            }

            // else
            console.log('extended validation passed.')
            this.formValidated.emit(true);

            //    this.ssnTooltip.close();
            //    this.ssnHasError = false;
            //
            //this.formValidated.emit(true);
        }
        else {
            console.log('One or more variables did not pass..')
            if (this.parameters.ssnLast4 != null) {
                if (this.parameters.ssnLast4.toString().length < 4 ||
                    this.parameters.ssnLast4.toString().length > 0) {
                    this.ssnTooltip.ngbTooltip = "4 digits";
                    this.ssnTooltip.placement = "left";
                    this.ssnHasError = true;
                    this.ssnTooltip.open();
                }
            }
            this.formValidated.emit(false);
        }
    }

    stateRemoved() {
        this.parameters.state = []
        this.checkValid();
    }
    programRemoved() {
        this.parameters.program = []
        this.checkValid();
    }

    vamcRemoved() {
        this.parameters.vamc = []
        this.checkValid();
    }

    selected() {
        this.formValidated.emit(true);
    }

    clearFields() {
        this.parameters.lastName = '';
        this.parameters.firstName = '';
        this.parameters.lastName = '';
        this.parameters.memberNumber = '';
        this.parameters.phone = '';
        this.parameters.ssnLast4 = '';
        this.parameters.vamc = [];
        this.parameters.state = [];
        this.parameters.program = [];
        this.parameters.city = '';
        this.parameters.postalCode = '';
        this.parameters.dateOfBirth = { month: null, day: null, year: null };
    }

    doSearch() {
        let params = new URLSearchParams();
        this.tempRows = [];
        this.searchComplete = false;

        // Check that each search parameter is present and contains an appropriate value. If so, 
        // add it to the search parameters. 
        if (this.parameters.lastName)
            params.append('lastName', this.parameters.lastName);

        if (this.parameters.firstName)
            params.append('firstName', this.parameters.firstName);

        if (this.parameters.memberNumber)
            params.append('memberNumber', this.parameters.memberNumber);

        if (this.parameters.phone)
            params.append('phoneNumber', this.parameters.phone);

        if (this.parameters.ssnLast4)
            params.append('ssnLast4', this.parameters.ssnLast4);

        if (this.parameters.vamc &&
            this.parameters.vamc instanceof Array &&
            this.parameters.vamc.length > 0)
            params.append('vamc', this.parameters.vamc[0].text);

        if (this.parameters.program &&
            this.parameters.program instanceof Array &&
            this.parameters.program.length > 0)
            params.append('program', this.parameters.program[0].text);

        if (this.parameters.city)
            params.append('city', this.parameters.city);

        if (this.parameters.state &&
            this.parameters.state instanceof Array &&
            this.parameters.state.length > 0)
            params.append('state', this.parameters.state[0].id);

        if (this.parameters.postalCode)
            params.append('postalCode', this.parameters.postalCode);

        if (this.parameters.dateOfBirth && this.parameters.dateOfBirth.year)
            params.append('dob',
                this.parameters.dateOfBirth.month + "/" +
                this.parameters.dateOfBirth.day + '/' +
                this.parameters.dateOfBirth.year);

        // Call the API URL, with the supplied parameters.
        this.veteranSearchService.getVeterans(params).subscribe(
            value => {
                this.searchComplete = true;
                this.newRows.emit(value);
            },
            error => this.errorMessage = <any>error
        );

    }

}
