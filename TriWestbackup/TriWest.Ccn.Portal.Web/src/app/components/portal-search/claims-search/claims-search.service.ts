import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common'

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


//import { VeteranProfile } from './veteran-360.model';
//import { VeteranProfileOHI } from './veteran-360.model';

import { URLSearchParams } from '@angular/http';
import { environment } from "../../../../environments/environment";
import { HttpService } from "../../../core/services/http.service";
import { ClaimData } from "./claims-search.model";

//import { AuthData, ClaimData } from './veteran-360.model';
//import { CareRadiusNotes } from './veteran-360.model';

//import { environment } from '../../../environments/environment';
const claimsUrl = environment.apiUrl + 'api/claims';


@Injectable()
export class ClaimsSearchService {
    private serviceUrl = environment.apiUrl;
    private currencyPipe: CurrencyPipe;

    constructor(public http: Http, private httpService: HttpService) {
        this.currencyPipe = new CurrencyPipe('en');
    }



    public getClaimList(params: URLSearchParams) {
        return this.httpService.getItem<any>(claimsUrl, params);
    }



    getDate(date: Date) { 
            let dateString = (
                (date.getMonth() + 1) + '/' +
                (date.getDate()) + '/' +
                date.getFullYear()
            );        
        return dateString;
    }




    private getDollars(amount: string) {
        let dollars = '--';
        if (amount !== null) {
            dollars = '$ ' + this.currencyPipe.transform(amount, 'USD', false).replace('USD', '');
        }
        return dollars;
    }

    public getClaimDatas(response: any): ClaimData[] {
        let claimDatas = [];

        response['results'].forEach((cd: ClaimData) => {
            let dBegin = new Date(cd.beginDate);
            dBegin.setTime(dBegin.getTime() + dBegin.getTimezoneOffset() * 60 * 1000);
            let dPaid = new Date(cd.paidDate);
            dPaid.setTime(dPaid.getTime() + dPaid.getTimezoneOffset() * 60 * 1000);
            let dob = new Date(cd.dateOfBirth);
            dob.setTime(dob.getTime() + dob.getTimezoneOffset() * 60 * 1000);
            let charges = this.getDollars(cd.charges);
            let paidAmount = "0";
            if (cd.paidAmount != null) {
                paidAmount = cd.paidAmount;
            }

            let claimData = new ClaimData(
                cd.id, cd.claimNumber, cd.veteranLastName, cd.veteranFirstName, cd.providerName,
                this.getDate(dBegin), new Date(cd.beginDate), cd.charges,
                paidAmount, this.getDate(dPaid), new Date(cd.paidDate),
                cd.status, cd.veteranId, cd.veteranNumber,
                cd.providerId, cd.taxId, cd.ssnLast4,
                cd.npi, this.getDate(dob), new Date(cd.dateOfBirth), cd.city, cd.state, cd.zip);
            claimDatas.push(claimData);
        });
        return claimDatas;
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service Error');
    }

}

