import { Component, OnInit } from '@angular/core';

import { NewCallService } from '../../../app/csr-portal/new-call/new-call.service';
import { CallerType } from './new-call.model';

@Component({
    selector: 'new-call',
    templateUrl: 'new-call.component.html'
})
export class NewCallComponent implements OnInit {
    type: string
    disableContinue = true;
    constructor(private newCallService:NewCallService) {
    }

    public ngOnInit() {
    }

    setCallerType(callerType: CallerType) {
        this.type = callerType.type;
    }
}