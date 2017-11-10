import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ReferralSearchService {
    private authServiceUrl      = environment.apiUrl + 'api/authorizations';
    private vamcListUrl         = environment.apiUrl + 'api/vamcs'; 
    private categoryOfCareUrl   = environment.apiUrl + 'api/categoryofcare';
    private veteranProfilesUrl  = environment.apiUrl + 'api/veteranprofiles';
    private veteranProgramsUrl  = environment.apiUrl + 'api/veteranprograms';
    private reasonCodeUrl       = environment.apiUrl + 'api/reasoncodes';
    private searchHeader = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    public searchReferrals(searchParams: URLSearchParams): Observable<any> {
        let options = new RequestOptions({ headers: this.searchHeader, params: searchParams });
        return this.http.get(this.authServiceUrl, options)
            .map(res => {
                let list = <any>res.json();
                return list;
            })
            .catch(this.handleError);
    }

    public getReasonCodes(): Observable<any> {
        return this.getDropDownList(this.reasonCodeUrl);
    }

    public getCategoryOfCareList(): Observable<any> {
        return this.getDropDownList(this.categoryOfCareUrl);
    }

    public getVamcList(): Observable<any> {
        return this.getDropDownList(this.vamcListUrl);
    }

    public getVeteranProfiles(): Observable<any> {
        return this.getDropDownList(this.veteranProfilesUrl);
    }

    public getVeteranPrograms(): Observable<any> {
        return this.getDropDownList(this.veteranProgramsUrl);
    }

    private getDropDownList(url: string): Observable<any> {
        let options = new RequestOptions({ headers: this.searchHeader });
        return this.http.get(url, options)
            .map(res => {
                let list = <any>res.json();
                let result: any[] = [];
                list.forEach(function(e) { result.push({ id: e.id, text: e.name }) });
                return result;
            });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
