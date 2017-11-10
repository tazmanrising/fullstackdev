import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NewCallService } from '../../../../app/csr-portal/new-call/new-call.service';
import { CallerType, CallerOther } from '../new-call.model';

@Component({
    selector: 'caller-other',
    styleUrls: ['caller-other.component.css'],
    templateUrl: 'caller-other.component.html'
})
export class CallerOtherComponent implements OnInit {
    @Output() validated: EventEmitter<boolean>;
    caller: CallerOther = {
      firstName: '',
      lastName: ''
    }
    constructor(private newCallService: NewCallService,
          private router: Router
        ) {
        this.validated = new EventEmitter<boolean>();
    }

    public ngOnInit() {
    }

    generalInfo(evt: any) {
        this.router.navigate(['']);
    }
}