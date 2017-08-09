import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {


    private _url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,EOS,DASH&tsyms=USD'

    constructor(
        private http: Http,
        private Request: Request) { }

    getAllCoins() {

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
            .do(data => console.log('All: ' + JSON.stringify(data)))  // do operator to peek 
            .catch(this.handleError);
    }

   
}