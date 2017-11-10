import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { HttpService } from '../core/services/http.service';
import { environment } from '../../environments/environment';


@Injectable()
export class QsiService {

    private modeQsiSubject = new Subject<boolean>();
    pubmodeQsiSubject = this.modeQsiSubject.asObservable();

}
