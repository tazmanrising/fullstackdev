import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common'

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../core/services/http.service';

import { VeteranProfile } from './veteran-360.model';
import { VeteranProfileOHI } from './veteran-360.model';

import { URLSearchParams } from '@angular/http';
import { AuthData, ClaimData } from './veteran-360.model';
import { CareRadiusNotes } from './veteran-360.model';

import { environment } from '../../../environments/environment';

const authsUrl = environment.apiUrl + 'api/authorizations';
const claimsUrl = environment.apiUrl + 'api/claims';
const ohiUrl = environment.sbApiUrl + 'api/OHI/V1';

@Injectable()
export class Veteran360Service {
    private serviceUrl = environment.apiUrl;
    private veteranInMemory: Observable<VeteranProfile>;
    private notesInMemory: Observable<CareRadiusNotes>;
    private currencyPipe: CurrencyPipe;

    constructor(public http: Http, private httpService: HttpService) {
        this.currencyPipe = new CurrencyPipe('en');
    }

    public getAuthList(params: URLSearchParams) {
        return this.httpService.getItem<any>(authsUrl, params);
    }

    public getClaimList(params: URLSearchParams) {
        return this.httpService.getItem<any>(claimsUrl, params);
    }

    public getOHIList(params: URLSearchParams) {
        return this.httpService.getItem<any>(ohiUrl, params);
    }

    public getOHIDatas(response: any): VeteranProfileOHI[] {
        let ohiDatas = [];

        response['Response'].forEach((cd: VeteranProfileOHI) => {
            let dBegin = new Date(cd.StartDate);
            dBegin.setTime(dBegin.getTime() + dBegin.getTimezoneOffset() * 60 * 1000);
            let dEnd = new Date(cd.EndDate);
            dEnd.setTime(dEnd.getTime() + dEnd.getTimezoneOffset() * 60 * 1000);
            let ohiData = new VeteranProfileOHI(
                cd.MemberUniqueID,
                cd.MemberBenefitCoordinationUniqueID,
                cd.OrganizationUniqueID,
                cd.OHICarrierName,
                this.getDate(dBegin),
                this.getDate(dEnd),
                cd.OHIPriorityNumber,
                cd.OHIMemberID,
                cd.HeathGroupID,
                cd.HealthPlanID,
                cd.AddressLine1,
                cd.AddressLine2,
                cd.CityName,
                cd.StateCode,
                cd.CountyCode,
                cd.PostOfficeCode,
                cd.PhoneNumber,
                cd.CareClassificationCode);
            ohiDatas.push(ohiData);
        });

        return ohiDatas;
    }

    getDate(date: Date) {
        let dateString = '1/1/2000';
        try {
            let dateString = (
                (date.getMonth() + 1) + '/' +
                (date.getDate()) + '/' +
                date.getFullYear()
            );
        }
        catch(e){}


        return dateString;
    }

    public getAuthDatas(response: any): AuthData[] {
        let authDatas = [];
        response['results'].forEach((ad: AuthData) => {
            let d = new Date(ad.createdOn);
            d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000)
            let authData = new AuthData();
            authData.id = ad.id;
            authData.categoryOfCare = ad.categoryOfCare;
            authData.createdOn = ad.createdOn;
            authData.memberNumber = ad.memberNumber;
            authData.profile = ad.profile;
            authData.program = ad.program;
            authData.provider = ad.provider;
            authData.reasonCode = ad.reasonCode;
            authData.referralNumber = ad.referralNumber;
            authData.ssnLast4 = ad.ssnLast4;
            authData.vamc = ad.vamc;
            authData.veteranFirstName = ad.veteranFirstName;
            authData.veteranFullName = ad.veteranFirstName + ' ' + ad.veteranLastName;
            authData.veteranLastName = ad.veteranLastName;
            authData.veteranId = ad.veteranId;
            authData.veteranZipCode = ad.veteranZipCode;

            authDatas.push(authData);
        });
        return authDatas;
    }

    public getVeteranDetailsById(id: number) {
        if (!this.veteranInMemory) {
            let searchHeader = new Headers();
            searchHeader.append('Content-Type', 'application/json');
            let options = new RequestOptions({
                headers: searchHeader
            });

            return this.http.get(this.serviceUrl + 'api/veterans/' + id, options)
                .map(res => <VeteranProfile>res.json())
                .catch(this.handleError);
        }
        return this.veteranInMemory;
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
            let paidAmount = this.getDollars(cd.paidAmount);
            let claimData = new ClaimData(
                cd.id, cd.claimNumber, cd.veteranLastName, cd.veteranFirstName, cd.providerName,
                this.getDate(dBegin), charges,
                paidAmount, this.getDate(dPaid),
                cd.status, cd.veteranId, cd.veteranNumber,
                cd.providerId, cd.taxId, cd.ssnLast4,
                cd.npi, this.getDate(dob), cd.city, cd.state, cd.zip);
            claimDatas.push(claimData);
        });
        return claimDatas;
    }

    public getCareRadiusNotesByVeteranId(searchParams: URLSearchParams) {
        if (!this.notesInMemory) {
            let searchHeader = new Headers();
            searchHeader.append('Content-Type', 'application/json');
            let options = new RequestOptions({
                headers: searchHeader, params: searchParams
            });

            return this.http.get(this.serviceUrl + 'api/careRadiusNotes', options)
                .map(res => <any>res.json())
                .catch(this.handleError);
        }

        return this.notesInMemory;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service Error');
    }

}

