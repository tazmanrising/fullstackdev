import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { Http, Response, URLSearchParams } from '@angular/http';
import { HttpService } from '../../core/services/http.service';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Provider360Info } from './provider-360.model';
import { AuthData, ClaimData, MedicalClaimData } from './provider-360.model';

import { environment } from '../../../environments/environment';
const authsUrl = environment.apiUrl + 'api/authorizations';
const claimsUrl = environment.apiUrl + 'api/claims';
const medicalClaimsUrl = environment.apiUrl + 'api/medicalClaims';


@Injectable()
export class Provider360Service {
    private providerCache: Observable<Provider360Info>;
    private portalServiceUrl = environment.apiUrl; // URL to web api    
    private currencyPipe: CurrencyPipe;
    constructor(private httpService: HttpService,
        public http: Http) {
        this.currencyPipe = new CurrencyPipe('en');
    }

    public getAuthList(params: URLSearchParams) {
        return this.httpService.getItem<any>(authsUrl, params);
    }

    public getClaimList(params: URLSearchParams) {
        return this.httpService.getItem<any>(claimsUrl, params);
    }

    public getMedicalClaimList(params: URLSearchParams) {
        return this.httpService.getItem<any>(medicalClaimsUrl, params);
    }

    getDate(date: Date) {
        let dateString = (
            (date.getMonth() + 1) + '/' +
            (date.getDate()) + '/' +
            date.getFullYear()
        );
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
            let charges = this.getDollars(cd.charges);
            let paidAmount = this.getDollars(cd.paidAmount);
            let claimData = new ClaimData(
                cd.id, `${cd.veteranFirstName} ${cd.veteranLastName}`,
                cd.veteranFirstName,
                cd.veteranLastName,
                this.getDate(dBegin), charges,
                paidAmount, this.getDate(dPaid),
                cd.status,
                cd.providerId, cd.veteranId);
            claimDatas.push(claimData);
        });
        return claimDatas;
    }


    public getMedicalClaimDatas(response: any): MedicalClaimData[] {
      //  let medicalClaimDatas = [];

        return response['results'].map((cd: MedicalClaimData) => {
            let dService = new Date(cd.serviceDate);
            dService.setTime(dService.getTime() + dService.getTimezoneOffset() * 60 * 1000);
            let dPaid = new Date(cd.paidDate);
            dPaid.setTime(dPaid.getTime() + dPaid.getTimezoneOffset() * 60 * 1000);
            // let charges = this.getDollars(cd.charges);
            let paidAmount = this.getDollars(cd.paidAmount);
            let claimData = new MedicalClaimData(
                cd.id, cd.claimNumber, cd.patientLastName, cd.patientFirstName,
                `${cd.patientFirstName} ${cd.patientLastName}`,
                this.getDate(dService),
                cd.paidAmount,
                this.getDate(dPaid),
                cd.status);
            return claimData;
           // medicalClaimDatas.push(claimData);
        });
    //    return medicalClaimDatas;
    }

    public getProvider(id: number) {

        if (this.providerCache) {
            console.log('provider info:');
            console.log(this.providerCache);
            return this.providerCache
        }
        else {
            let searchHeader = new Headers();
            searchHeader.append('Content-Type', 'application/json');
            let options = new RequestOptions({ headers: searchHeader });

            console.log('API URL: ' + this.portalServiceUrl + 'api/Providers/' + id)
            this.providerCache = this.http.get(this.portalServiceUrl + 'api/Providers/' + id, options)
                .map(res => <any>res.json())
                .catch(this.handleError);

            return this.providerCache;
        }

    }
    private handleError(error: Response) {
        console.group('handleError');
        console.error(error);
        console.groupEnd();
        return Observable.throw(error.json().error || 'Server error');
    }
}
