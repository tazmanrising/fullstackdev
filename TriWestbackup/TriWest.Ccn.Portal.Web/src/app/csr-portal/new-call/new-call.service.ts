import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from '../../core/services/http.service';
import { Subject } from 'rxjs/Subject';
import { CallerType } from './new-call.model';
import { environment } from '../../../environments/environment';

import { Vamc } from './new-call.model';

const vamcsUrl = environment.apiUrl + 'api/vamcs';
@Injectable()
export class NewCallService{

    private vamcListSubject = new Subject<any[]>();
    vamcListPub = this.vamcListSubject.asObservable();

    vamcList: Vamc[] = [];

    constructor(private httpService: HttpService) {
    }

    // get list of caller types
    public getCallerType(type: string) {
        let callerTypes = this.getCallerTypes();
        let callerType = callerTypes.find((ct: CallerType) => {
            return ct.type === type;
        })
        return callerType;
    }
    public getCallerTypes(): CallerType[] {
        return [
            new CallerType('Veteran', 'veteran'),
            new CallerType('Provider', 'provider'),
            new CallerType('VAMC', 'vamc'),
            new CallerType('Other', 'other'),
        ];
    }

    // get VMAC data from server
    // component: newCallService.vamcListPub.subscribe()
    public getVamcList() {
        if (this.vamcList.length > 0) {
            this.vamcListSubject.next(this.vamcList);
        } else {
            this.httpService.getItem<Vamc[]>(vamcsUrl)
                .subscribe((vamcs: Vamc[]) => {
                    this.vamcList = vamcs;
                    this.vamcListSubject.next(vamcs);
                });
        }
    }
}