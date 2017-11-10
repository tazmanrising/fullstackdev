import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

import { Veteran360Service } from '../veteran-360.service';
import { AuthData } from '../veteran-360.model';

@Component({
    selector: 'auth-veteran',
    templateUrl: 'auth-veteran.component.html'
})
export class AuthVeteranComponent implements OnInit, OnDestroy {
    @Input() veteranId: number;
    authDatas: AuthData[];


    authSubscription: Subscription;
    loadingIndicator: boolean = true;
    reorderable: boolean = true;    
    showData = false;
    constructor(private vet360Service: Veteran360Service) {
    }

    public ngOnInit() {
        let params = this.getSearchParams();
        console.log(params);
        // this.authDatas = this.vet360Service.getMockAuthData();
        this.authSubscription = this.vet360Service.getAuthList(params)
            .subscribe((response: any) => {
                this.authDatas = this.vet360Service.getAuthDatas(response);
                this.showData = true;
            });
    }

    getSearchParams() {
        let params = new URLSearchParams();
        params.append('veteranId', this.veteranId.toString());
        params.append('page', '1');
        params.append('pageSize', '5');
        return params
    }
    public ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
    clickDetail(evt: any, value: number) {
        console.log("Detail " + value);
        return false;
    }
    viewAll(evt: any) {
        console.log("View All Authorizations");
        return false;
    }
}
