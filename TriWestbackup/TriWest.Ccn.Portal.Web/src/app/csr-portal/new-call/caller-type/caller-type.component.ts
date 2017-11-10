import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NewCallService } from '../../../../app/csr-portal/new-call/new-call.service';

import { CallerType } from '../new-call.model';

@Component({
    selector: 'caller-type',
    templateUrl: 'caller-type.component.html'
})
export class CallerTypeComponent implements OnInit {
    @Output() selectCaller: EventEmitter<CallerType>;
    callerTypes: CallerType[] = [];
    activeType: CallerType;
    constructor(private newCallService: NewCallService) {
        this.selectCaller = new EventEmitter<any>();
    }

    public ngOnInit() {
        this.callerTypes = this.newCallService.getCallerTypes();
    }

    typeSelect(callerType: CallerType, evt: any) {
        this.activeType = callerType;
        this.selectCaller.emit(callerType);
    }
}