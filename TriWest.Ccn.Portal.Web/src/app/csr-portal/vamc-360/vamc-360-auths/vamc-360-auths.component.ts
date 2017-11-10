import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { environment } from '../../../../environments/environment';

import { Vamc360AuthsService } from './vamc-360-auths.service'
import { Vamc360Authorization } from './vamc-360-auths.model';
import { RowData } from './vamc-360-auths.mock';


@Component({
    selector: 'vamc-360-auths',
    templateUrl: './vamc-360-auths.component.html',
    styleUrls: ['./vamc-360-auths.component.css'],
    providers: [Vamc360AuthsService]
})

export class Vamc360AuthsComponent implements OnInit
{
    @Input() public vamcId: string = "1";

    public results: Vamc360Authorization[];
    private errorMessage: string;
    constructor(private vamcAuthsService: Vamc360AuthsService) {

    }

    /** Called by Angular after vamc-360-auths component initialized */
    ngOnInit(): void {
        // this.results = RowData;
        let params = new URLSearchParams();
        params.append('vamcId', this.vamcId);
        params.append('page', '1');
        params.append('pageSize', '5');
        params.append('sortColumn', 'createdOn');
        params.append('sortDirection', 'asc');

        this.vamcAuthsService
            .getAuths(params)
            .subscribe(
            value => {
                this.results = value.results;

            },
            error => {
                console.log(<any>error)
                this.errorMessage = <any>error
            });
    }
    viewAll() {
        console.log('ViewAll()');

    }

}