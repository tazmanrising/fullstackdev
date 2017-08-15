import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class CoinService {


    private _url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,EOS,DASH&tsyms=USD'

    constructor(
        private http: Http) { }

    getAllCoins(): Observable<Response> {
       // return this.http.get(this._url).map(res => res.json());
        return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,EOS,DASH&tsyms=USD').map(res => res.json());
        
    }


    ZgetAllCoins() {
        return this.http.get(this._url)
            .map((response: Response) => response.json())
            .do(data => console.log('all test' + JSON.stringify(data)))
            .catch(this.handleError)

    }

    XgetAllCoins() {

        var blah = [];

        this.getCoins().subscribe(
            data => {
                blah = data;
                //console.log('subscriber coins', blah)
            }
        )

        return blah;
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    getCoins() {
        return this.http.get(this._url)
            .map((response: Response) => response.json())
            //.do(data => console.log(data))
            .do(data => console.log('All: ' + JSON.stringify(data)))  // do operator to peek 
            .catch(this.handleError);
    }


}

const allC =
    [{
        "BTC": {
            "USD": 3349.1
        },
        "ETH": {
            "USD": 296.3
        },
        "LTC": {
            "USD": 47.56
        },
        "EOS": {
            "USD": 1.83
        },
        "DASH": {
            "USD": 195.83
        }
    }]