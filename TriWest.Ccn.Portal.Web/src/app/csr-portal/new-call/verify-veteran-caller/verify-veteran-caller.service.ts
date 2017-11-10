import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { SearchParameters, VeteranVerificationInfo } from './verify-veteran-caller.model';

@Injectable()
export class VerifyVeteranCallerService {

    constructor(public http: Http) { }

    private vetSearchUrl = environment.apiUrl + 'api/veterans'; // URL to web api

    getVeterans(searchParams: URLSearchParams): Observable<any> {
        let searchHeader = new Headers();
        searchHeader.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: searchHeader, params: searchParams });

        return this.http.get(this.vetSearchUrl, options)
            .map(res => <any>res.json())
            .catch(this.handleError);

    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}