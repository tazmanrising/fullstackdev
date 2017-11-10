import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';

@Injectable()
export class Vamc360AuthsService {

    constructor(public http: Http) { }

    private portalServiceUrl = environment.apiUrl + 'api/authorizations'; // URL to web api    

    getAuths(searchParams: URLSearchParams): Observable<any> {
        let searchHeader = new Headers();
        searchHeader.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: searchHeader, params: searchParams });
        console.log('URL: ' + this.portalServiceUrl)
        return this.http.get(this.portalServiceUrl, options)
            .map(res => <any>res.json())
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}