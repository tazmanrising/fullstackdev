import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';

import { Provider360Service } from '../provider-360.service';
import { AuthData } from '../provider-360.model';

@Component({
    selector: 'auth-provider',
    templateUrl: 'auth-provider.component.html'
})
export class AuthProviderComponent  implements OnInit, OnDestroy {
    @Input() providerId: number;
    authDatas: AuthData[];

    authSubscription: Subscription;
    loadingIndicator: boolean = true;
    reorderable: boolean = true;    
    showData = false;
    constructor(private prov360Service: Provider360Service) {
    }

    public ngOnInit() {
        let params = this.getSearchParams();
        console.log(params);
        this.authSubscription = this.prov360Service.getAuthList(params)
            .subscribe((response: any) => {
                this.authDatas = this.prov360Service.getAuthDatas(response);
                this.showData = true;
            });
    }
    getDate(date: Date) {
      let dateString = (
          (date.getMonth() + 1) + '-' +
          (date.getDate()) + '-' +
          date.getFullYear()
      );
      return dateString;
    }
    getSearchParams() {
        let params = new URLSearchParams();
        params.append('providerId', this.providerId.toString());
        params.append('page', '1');
        return params
    }
    public ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
    clickVeteran(evt: any, row: AuthData) {
        console.log("VeteranID " + row.veteranId);
        return false;
    }
    clickDetail(evt: any, value: number) {
        console.log("Referral ID " + value);
        return false;
    }
    viewAll(evt: any) {
        console.log("View All Authorizations");
        return false;
    }
}