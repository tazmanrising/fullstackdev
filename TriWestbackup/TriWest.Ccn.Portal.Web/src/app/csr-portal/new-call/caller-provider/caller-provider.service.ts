import { Injectable } from '@angular/core';
import { Provider } from './provider.model';
import { Http, Response, URLSearchParams } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProviderService {

    constructor(public http: Http) {}

    private portalServiceUrl = environment.apiUrl + 'api/Providers'; // URL to web api    

    getProviders(searchParams: URLSearchParams): Observable<any> {
        let searchHeader = new Headers();
        searchHeader.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: searchHeader, params: searchParams });
        
        return this.http.get(this.portalServiceUrl, options)
            .map(res => <any>res.json())
            .catch(this.handleError);        
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
