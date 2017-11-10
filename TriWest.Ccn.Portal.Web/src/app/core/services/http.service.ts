import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    defaultParams = new URLSearchParams();
    constructor(private http: Http) {
    }

    public getItem<t>(url: string, params: URLSearchParams = this.defaultParams) {
        let options = this.getOptions(params);
        return this.http.get(url, options)
            .map(response => <t>response.json());
    }
    public getItemById<t>(url: string, id:string, params: URLSearchParams = this.defaultParams) {
        let options = this.getOptions(params);
        return this.http.get(url + id, options)
            .map(response => <t>response.json());
    }

    public addItem<t>(body: string, url: string, params: URLSearchParams = this.defaultParams) {
        let options = this.getOptions(params);
        return this.http.post(url, body, options)
            .map(response => <t>response.json().data);
    }

    public updateItem<t>(id: number, body: string, url: string, params: URLSearchParams = this.defaultParams) {
        let options = this.getOptions(params);
        return this.http.put(url + '/' + id, body, options)
            .map(response => <t>response.json().data);
    }

    public deleteItem<t>(id: number, url: string, params: URLSearchParams = this.defaultParams) {
        let options = this.getOptions(params);
        return this.http.delete(url + '/' + id, options)
            .map(response => <t>response.json().data);
    }
    private getOptions(params:URLSearchParams): RequestOptions {
        let headers = new Headers();
        let userToken = 'user23432';
        headers.append('Content-Type', 'application/json');
        headers.append("UserID", userToken);

        return new RequestOptions({ headers: headers, params: params });
    }
}
