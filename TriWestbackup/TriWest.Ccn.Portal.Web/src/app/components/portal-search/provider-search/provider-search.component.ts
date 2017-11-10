import { Component, ViewChild, EventEmitter, OnInit, Input, Output, ChangeDetectorRef } from '@angular/core';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { NgbDateStruct, NgbDatepickerConfig, NgbDateParserFormatter, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs/Observable";
import { SelectModule } from 'ng2-select';

// import { RowData } from './provider-search.mock';
import { ProviderSearchService } from './provider-search.service';
import { ProviderSearchFormatter } from './provider-search.formatter';
import { usStates, Programs } from '../portal-search-config';

@Component({
    selector: 'provider-search',
    templateUrl: './provider-search.component.html',
    providers: [ProviderSearchService, NgbDatepickerConfig, { provide: NgbDateParserFormatter, useClass: ProviderSearchFormatter }],
})

export class ProviderSearchComponent implements OnInit {
    @Input() searching: boolean;
    @Output() newRows = new EventEmitter<Array<any>>();
    @Output() formValidated = new EventEmitter<boolean>();

    private tempRows: Array<any>;
    private searchComplete: boolean = true;
    private errorMessage: string = '';
    public states: any[] = [];
    public mockSpecialties: any[] = [];
    public npiValid: boolean = true;
    public tinValid: boolean = true;

    public parameters = { npi: '', tin: '', placeOfService: '', name: '', group: '', specialty: [], phone: '', address: '', city: '', state: [], zip: '' };

    @ViewChild('npiTooltip') public npiTooltip: NgbTooltip;
    @ViewChild('tinTooltip') public tinTooltip: NgbTooltip;


    constructor(private datepickerConfig: NgbDatepickerConfig,
        private providerSearchService: ProviderSearchService) {
        this.states = usStates;
        providerSearchService.getSpecialties().subscribe(
            value => {
                this.mockSpecialties = value;
            },
            error => this.errorMessage = <any>error);

    }

    ngOnInit(): void {
    }

    public clearFields() {
        this.parameters.npi = '';
        this.parameters.tin = '';
        this.parameters.placeOfService = '';
        this.parameters.name = '';
        this.parameters.group = '';
        this.parameters.specialty = [];
        this.parameters.phone = '';
        this.parameters.address = '';
        this.parameters.city = '';
        this.parameters.state = [];
        this.parameters.zip = '';
    }

    specialtyRemoved() {
        this.parameters.specialty = []
        this.checkValid();
    }

    stateRemoved() {
        this.parameters.state = []
        this.checkValid();
    }

    checkValid() {
        console.log('checkValid()')
        let tempValid = false;
        //let phoneRegEx = new RegExp("^(\\(?\\d\\d\\d\\)?)( |-|\\.)?\\d\\d\\d( |-|\\.)?\\d{4,4}(( |-|\\.)?[ext\\.]+ ?\\d+)?$");
        //let phoneValid = phoneRegEx.test(this.parameters.phone)

        tempValid = (
            (
                ((this.parameters.npi !== null) &&
                    (this.parameters.npi.toString().length <= 10 &&
                        this.parameters.npi.toString().length >= 4)
                )
                || ((this.parameters.tin !== null) &&
                    (this.parameters.tin.toString().length <= 10 &&
                        this.parameters.tin.toString().length >= 4)
                )
                || ((this.parameters.placeOfService !== null) &&
                    (this.parameters.placeOfService !== '')
                )
                || ((this.parameters.name !== null) &&
                    (this.parameters.name !== '')
                )
                || ((this.parameters.group !== null) &&
                    (this.parameters.group !== '')
                )
                || ((this.parameters.phone !== null) &&
                    (this.parameters.phone !== '')
                )
                || ((this.parameters.specialty !== null) &&
                    (this.parameters.specialty.length > 0)
                )
                || ((this.parameters.phone !== null) &&
                    (this.parameters.phone.toString().length === 10)
                )
                || ((this.parameters.address !== null) &&
                    (this.parameters.address !== '')
                )
                || ((this.parameters.city !== null) &&
                    (this.parameters.city !== '')
                )
                || ((this.parameters.zip !== null) &&
                    (this.parameters.zip !== '')
                )
            )
        );


        if (!tempValid) {
            // Check NPI...
            if (this.parameters.npi !== null) {
                if ((this.parameters.npi.toString().length > 0) &&
                    (this.parameters.npi.toString().length < 4)) {
                    this.npiTooltip.ngbTooltip = "4 Digits Required";
                    this.npiTooltip.placement = 'top';
                    this.npiValid = false;
                    this.npiTooltip.open();
                }
                else {
                    this.npiValid = true;
                    this.npiTooltip.close();
                }
            }
            else {
                this.npiValid = true;
                this.npiTooltip.close();
            }

            // Check tin...
            if (this.parameters.tin !== null) {
                if ((this.parameters.tin.toString().length > 0) &&
                    (this.parameters.tin.toString().length < 4)) {
                    this.tinTooltip.ngbTooltip = "4 Digits Required";
                    this.tinTooltip.placement = 'top';
                    this.tinValid = false;
                    this.tinTooltip.open();
                }
                else {
                    this.tinValid = true;
                    this.tinTooltip.close();
                }
            }
            else {
                this.tinValid = true;
                this.tinTooltip.close();
            }
        }
        else {
            this.npiValid = true;
            this.npiTooltip.close();
            this.tinValid = true;
            this.tinTooltip.close();
        }
        this.formValidated.emit(tempValid);

    }

    selected() {
        this.formValidated.emit(true);
    }

    doSearch(page: number = 1, pageSize: number = 25) {
        console.log('Veteran 360-Search')
        let params = new URLSearchParams();
        this.tempRows = [];
        this.searchComplete = false;

        // Check that each search parameter is present and contains an appropriate value. If so, 
        // add it to the search parameters. 
        if (this.parameters.npi)
            params.append('npi', this.parameters.npi);

        if (this.parameters.tin)
            params.append('taxId', this.parameters.tin);

        if (this.parameters.name)
            params.append('providerName', this.parameters.name);

        if (this.parameters.placeOfService)
            params.append('groupName', this.parameters.placeOfService);

        if (this.parameters.group)
            params.append('groupName', this.parameters.group);

        if (this.parameters.address)
            params.append('address', this.parameters.address);

        if (this.parameters.city) params.append('city', this.parameters.city);        

        if (this.parameters.address) params.append('addressPrimary', this.parameters.address);


        if (this.parameters.state instanceof Array) {
            if (this.parameters.state.length > 0) {
                params.append('state', this.parameters.state[0].id);
            }

        }

        if (this.parameters.specialty instanceof Array) {
            if (this.parameters.specialty.length > 0) {
                params.append('specialty', this.parameters.specialty[0].id);
            }

        }

        if (this.parameters.phone) {
            params.append('phone', this.parameters.phone);
        }


        if (this.parameters.zip) {
            params.append('postalCode', this.parameters.zip);
        }

        // Call the API URL, with the supplied parameters.
        this.providerSearchService.getProviders(params).subscribe(
            value => {
                this.searchComplete = true;
                this.newRows.emit(value);
            },
            error => this.errorMessage = <any>error
        );

    }

}
