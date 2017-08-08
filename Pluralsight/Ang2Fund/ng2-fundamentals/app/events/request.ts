import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Config } from '../Config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Request {
	
	constructor(public http: Http)
	{
	
	}

	get(url): Promise<any>
	{
		//return this.http.get(Config.baseUrl + url).map(response => {
        return this.http.get("https://conduit.productionready.io/api/profiles/eric").map(response => {
			return response.json() || {success: false, message: "No response from server"};
		}).catch((error: Response | any) => {
			return Observable.throw(error.json());
		}).toPromise();
	}

	// post(url, data): Promise<any>
	// {
	// 	return this.http.post(Config.baseUrl + url, data).map(response => {
	// 		return response.json() || {success: false, message: "No response from server"};
	// 	}).catch((error: Response | any) => {
	// 		return Observable.throw(error.json());
	// 	}).toPromise();
	// }
}