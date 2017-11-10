import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { VeteranSearchParameters, VeteranSearchResult } from './veteran-search.model';

@Injectable()
export class VeteranSearchService {
    constructor(public http: Http) { }

    private vetSearchUrl = environment.apiUrl + 'api/veterans'; // URL to web api
    private vamcListUrl = environment.apiUrl + 'api/vamcs'; // URL to web api

    getVeterans(searchParams: URLSearchParams): Observable<any> {
        let searchHeader = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: searchHeader, params: searchParams });
        console.log('Calling get() for VeteranSearchService');

        return this.http.get(this.vetSearchUrl, options)
            .map(res => {
                let fred = <any>res.json();
                console.log('fred', fred)
                fred.forEach(function (val, idx) {
                    // Format Dates. Required due to dynamic nature of columns.
                    let tDate: Date = new Date(val.dateOfBirth);
                    val.dateOfBirth = tDate.toLocaleDateString();
                    if (val.addresses) {
                        val.addresses = val.addresses[0];
                    }

                    if (val.phones) {
                        val.phones = val.phones[0];
                    }
                });
                return fred;
            })
            .catch(this.handleError);
    }

    public getVamcList(): Observable<any> {
      let searchHeader = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: searchHeader });
       
      return this.http.get(this.vamcListUrl, options)
            .map(res => {
                let fred = <any>res.json();
                let result: any[] = [];
                fred.forEach(function(e) { result.push({id: e.id, text: e.name}) });
                console.log("Service response for 'api/vamcs'", result)
                return result;
            })
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
