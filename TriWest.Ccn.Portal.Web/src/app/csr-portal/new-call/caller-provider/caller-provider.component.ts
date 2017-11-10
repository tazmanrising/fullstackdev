import { Component } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { CallerProvider } from '../new-call.model';
import { Provider } from './provider.model';
import { ProviderService } from './caller-provider.service';
import { CallerProviderSearchComponent } from './caller-provider-search.component';

@Component({
    selector: 'caller-provider',
    templateUrl: 'caller-provider.component.html',
    providers: [ProviderService]
})

export class CallerProviderComponent {        
    caller: CallerProvider = {
        taxId: '',
        providerName: '',
        groupName: '',
        npi: ''        
    }
    isSearch = false;
    errorMessage: string;
    providers: any;
    constructor(private providerService: ProviderService) {       
    }
    clearSearch(evt:any){
        this.isSearch=false;
        return false;
    }
    onSearch(caller) {
        let params = new URLSearchParams();
        if (caller.taxId || caller.npi) {
            if (caller.taxId)
                params.append('taxId', caller.taxId);
            if (caller.providerName)
                params.append('providerName', caller.providerName);
            if (caller.groupName)
                params.append('groupName', caller.groupName);
            if (caller.npi)
                params.append('npi', caller.npi);

            this.providerService.getProviders(params)
                .subscribe(
                value => this.providers = value,
                error => this.errorMessage = <any>error);
            this.isSearch = true;
        }
    }
}


