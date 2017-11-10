import { Injectable } from '@angular/core';
import { TrainingMessage } from './training.model.mock';
import { Training } from './training.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TrainingService {

    constructor(public http: Http) {  }

    private portalServiceUrl = environment.apiUrl + 'api/TrainingMessages'; // URL to web api

    getTrainingMessage() {
        return this.http.get(this.portalServiceUrl)
            .map(res => <Training>res.json())
            .catch(this.handleError);        
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
