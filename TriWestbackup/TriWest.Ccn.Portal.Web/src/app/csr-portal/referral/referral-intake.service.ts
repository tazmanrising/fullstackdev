import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../core/services/http.service';

import { HttpClient } from '@angular/common/http';

import { ReferralIntake } from './referral-intake.model';

import { URLSearchParams } from '@angular/http';

import { environment } from '../../../environments/environment';

const authsUrl = environment.apiUrl + 'api/authorizations';
const claimsUrl = environment.apiUrl + 'api/claims';

const referrals = environment.apiUrl + 'api/referrals';

//const url = environment.apiUrl + 'api/csrinteractions';



@Injectable()
export class ReferralIntakeService {
  private serviceUrl = environment.apiUrl;
  //private veteranInMemory: Observable<VeteranProfile>;
  //private notesInMemory: Observable<CareRadiusNotes>;
  //private currencyPipe: CurrencyPipe;
  private referralInMemory: Observable<ReferralIntake>;


  constructor(public http: Http,
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {
    //this.currencyPipe = new CurrencyPipe('en');
  }
  private products = []; 

  get_products() {

    //return this.httpClient.get(this.serviceUrl + '/api/referrals');

    //or

    //return this.httpClient.get(this.serviceUrl + '/api/referrals')
    //  ((res: any[]) => {
    //    console.log(res);
    //    this.products = res;
    //  });

  }


  //insertSession(session: SessionTracker): Observable<SessionTracker> {
  //  return this.http.post(referrals, session)
  //    .map((res: Response) => {
  //      const data = res.json();
  //      console.log('insert session: ' + data.status);
  //      return data.session;
  //    })
  //    .catch(this.handleError);
  //}



//    this.date = new Date().toString();
//this.model.timerStart = new Date().toISOString();
//this.characterCounter();
//this.dataService.addSession().subscribe(
//  result => {
//    this.model.sessionId = result.sessionId + '-1-1'
//  },
//  error => {
//    console.log(error);
//  }
//)



  //updateSession(tracker: TrackerForm) {
  //  let headers = new Headers({ 'Content-Type': 'application/json' });
  //  let options = new RequestOptions({ headers: headers });
  //  console.log('service tracker', tracker);
  //  return this.http.put(referrals, JSON.stringify(tracker), options)
  //    .map((response: Response) => response.json())


  //}

  insertReferrals(referralIntake: ReferralIntake) {

    console.log('referralIntake', referralIntake);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

     //let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    //return this.http.post(this._url, JSON.stringify({}), options).catch(this.handleError);

    return this.http.post(referrals, JSON.stringify(referralIntake), options)
      .map((response: Response) => response.json());


  }


  getReferrals(searchParams: URLSearchParams): Observable<any> {
    let searchHeader = new Headers();
    searchHeader.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: searchHeader, params: searchParams });

    return this.http.get(this.serviceUrl + '/api/referrals', options)
      .map(res => <any>res.json())
      .catch(this.handleError);
  }



  public getVeteranDetailsById(id: number) {
    if (!this.referralInMemory) {
      let searchHeader = new Headers();
      searchHeader.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers: searchHeader
      });

      return this.http.get(this.serviceUrl + 'api/referrals/' + id, options)
        .map(res => <ReferralIntake>res.json())
        .catch(this.handleError);
    }
    return this.referralInMemory;
  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Service Error');
  }






}
