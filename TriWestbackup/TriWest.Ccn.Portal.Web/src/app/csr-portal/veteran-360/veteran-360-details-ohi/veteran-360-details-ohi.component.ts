import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

import { Veteran360Service } from '../veteran-360.service';
import { VeteranProfile, VeteranProfileOHI } from '../veteran-360.model';

@Component({
    selector: 'veteran-360-details-ohi',
    templateUrl: './veteran-360-details-ohi.component.html',
    styleUrls: ['./veteran-360-details-ohi.component.css']
})
export class Veteran360DetailsOHIComponent implements OnInit, OnDestroy {

    @Input() veteran: VeteranProfile = new VeteranProfile();

    ohiSubscription: Subscription;
    loadingIndicator: boolean = true;
    showData: boolean = false;

    constructor(private prov360Service: Veteran360Service) {
    }

    ngOnInit(): void {
        let params = this.getSearchParams();
        console.log(params);
        this.ohiSubscription = this.prov360Service.getOHIList(params)
            .subscribe((response: any) => {
                this.veteran.veteranOHIList = this.prov360Service.getOHIDatas(response);
                this.showData = true;
            });
    }

    getSearchParams() {
        let params = new URLSearchParams();
        params.append('MemberUniqueID', this.veteran.id.toString()); //'15'); //for hardcoded ID
        params.append('UniqueID', '');
        params.append('InputQualifier', '');
        params.append('SystemSourceID', 'CRM');
        params.append('UserID', 'Grace');
        return params
    }

    public ngOnDestroy() {
        this.ohiSubscription.unsubscribe();
    }
}

