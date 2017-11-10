import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

import { Provider360Service } from '../provider-360.service';
import { ClaimData, MedicalClaimData } from '../provider-360.model';

@Component({
    selector: 'medical-claims',
    templateUrl: 'medical-claims.component.html'
})
export class MedicalClaimsComponent implements OnInit, OnDestroy {
    @Input() providerId: number;
    claimDatas: MedicalClaimData[];

    claimSubscription: Subscription;
    loadingIndicator: boolean = true;
    reorderable: boolean = true;
    showData = false;
    constructor(private prov360Service: Provider360Service) {
    }

    public ngOnInit() {
        let params = this.getSearchParams();
        console.log(params);
        this.claimSubscription = this.prov360Service.getMedicalClaimList(params)
            .subscribe((response: any) => {
                this.claimDatas = this.prov360Service.getMedicalClaimDatas(response);
                this.showData = true;
            });
    }

    getSearchParams() {
        let params = new URLSearchParams();
        params.append('providerId', this.providerId.toString());
        params.append('page', '1');
        params.append('sortColumn', 'ServiceDate');
        params.append('sortDirection', 'descending');
      
        return params
    }
    public ngOnDestroy() {
        this.claimSubscription.unsubscribe();
    }
    clickDetail(evt: any, value: number) {
        console.log("MedicalClaim ID " + value);
        return false;
    }
    clickVeteran(evt: any, row: ClaimData) {
        console.log("VeteranID " + row.veteranId);
        return false;
    }
   
   
}
