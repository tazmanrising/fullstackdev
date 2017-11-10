/// <reference path="../../../environments/environment.ts" />
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TrackerForm } from '../tracker.model';
import { environment } from '../../../environments/environment';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'; 

import { SessionTracker } from '../tracker-classes/SessionTracker';

const url = environment.apiUrl + 'api/csrinteractions';
@Injectable()
export class TrackerFormService {

    //private _url = 'http://localhost:60696/api/tracker';
    //private url = 'http://localhost:60696/api/csrinteractions';


    sessionTracker: SessionTracker;


    constructor(
        //private _http: HttpClient) { }
        private http: Http) { }

    getSessionTracker(): Observable<SessionTracker[]> {
        return this.http.get(url)
            .map((res: Response) => {
                let data = res.json();
                return data;
            })
            .do(data => console.log('tracker' + JSON.stringify(data)))
            .catch(this.handleError)
    } 


    insertSession(session: SessionTracker): Observable<SessionTracker> {
        return this.http.post(url, session)
            .map((res: Response) => {
                const data = res.json();  
                console.log('insert session: ' + data.status);
                return data.session;
            })
            .catch(this.handleError);
    }


    updateSession(tracker: TrackerForm) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log('service tracker', tracker);
        return this.http.put(url, JSON.stringify(tracker), options)
            .map((response: Response) => response.json())
           

    }


    addSession() {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        //return this.http.post(this._url, JSON.stringify({}), options).catch(this.handleError);

        return this.http.post(url, JSON.stringify({}), options)
            .map((response: Response) => response.json());
        
    }
        
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}






