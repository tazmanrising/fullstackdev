import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

import { Veteran360Service } from '../veteran-360.service';
import { ClaimData } from '../veteran-360.model';

@Component({
    selector: 'claim-veteran',
    templateUrl: 'claim-veteran.component.html'
})
export class ClaimVeteranComponent  implements OnInit, OnDestroy {
    @Input() veteranId: number;
    claimDatas: ClaimData[];

    claimSubscription: Subscription;
    loadingIndicator: boolean = true;
    reorderable: boolean = true;    
    showData = false;
    constructor(private prov360Service: Veteran360Service) {
    }

    public ngOnInit() {
        let params = this.getSearchParams();
        console.log(params);
        this.claimSubscription = this.prov360Service.getClaimList(params)
            .subscribe((response: any) => {
                this.claimDatas = this.prov360Service.getClaimDatas(response);
                this.showData = true;
            });
    }

    getSearchParams() {
        let params = new URLSearchParams();
        params.append('veteranId', this.veteranId.toString());
        params.append('page', '1');
        return params
    }
    public ngOnDestroy() {
        this.claimSubscription.unsubscribe();
    }
    clickDetail(evt: any, value: number) {
        console.log("Claim ID " + value);
        return false;
    }
    clickVeteran(evt: any, row: ClaimData) {
        console.log("VeteranID " + row.veteranId);
        return false;
    }
    clickEOB(evt: any, row: ClaimData) {
        console.log("EOB " + row.id );
        return false;
    }
    viewAll(evt: any) {
        console.log("View All Claim");
        return false;
    }
}
