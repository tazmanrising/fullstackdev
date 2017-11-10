import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NewCallService } from '../../../../app/csr-portal/new-call/new-call.service';
import { Vamc, CallerVamc } from '../new-call.model';

@Component({
    selector: 'caller-vamc',
    templateUrl: 'caller-vamc.component.html',
    styleUrls: ['caller-vamc.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CallerVamcComponent implements OnInit, OnDestroy {
    caller: CallerVamc = new CallerVamc('', '', '', '', '');
    vamcid = ''
    vamcSelects: any[] = [];
    vamctouched = false;  //vamc select touch flag to support ng-select

    vamcSelectSubscription: Subscription;
    constructor(private newCallService: NewCallService,
                private router: Router
            ) {
        this.vamcSelectSubscription = this.newCallService.vamcListPub
            .subscribe((vamcs: Vamc[]) => {
                this.vamcSelects = [];
                vamcs.forEach((vamc: Vamc) => {
                    this.vamcSelects.push({ id: vamc.id, text: vamc.name  });
                });
            });
    }

    ngOnInit() {
        this.vamcSelects = [];
        this.newCallService.getVamcList();
    }
    ngOnDestroy() {
        this.vamcSelectSubscription.unsubscribe();
    }
    blurVAMC(evt:any) {
        this.vamctouched = true;
        console.log('blur' + JSON.stringify(this.caller));
        return false;
    }
    validateForm(valid: boolean) {
        console.log(valid);
    }
    public selected(value: any): void {
        this.caller.vamcid = value['id'];
    }

    generalInfo(evt:any) {
        this.router.navigate(['crm/general-info/']);
        return false;
    }
    continue(evt: any) {
        console.log('vamc:' + this.caller.vamcid);
        this.router.navigate(['crm/vamc-360', this.caller.vamcid]);
        return false;
    }
}