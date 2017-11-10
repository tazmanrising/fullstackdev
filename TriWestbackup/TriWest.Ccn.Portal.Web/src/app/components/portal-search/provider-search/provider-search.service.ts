import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { ProviderSearchParameters, ProviderSearchResult } from './provider-search.model';
import { mockSpecialties } from '../portal-search-config';


@Injectable()
export class ProviderSearchService {
    constructor(public http: Http) { }

    private providerSearchUrl = environment.apiUrl + 'api/providers'; // URL to web api

    getProviders(searchParams: URLSearchParams): Observable<any> {
        let searchHeader = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: searchHeader, params: searchParams });
        console.log('Calling get() for VeteranSearchService');

        return this.http.get(this.providerSearchUrl, options)
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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    getSpecialties(): Observable<any> {
        return Observable.of(mockSpecialties)

    }
}
