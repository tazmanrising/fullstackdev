import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Provider360Info } from '../provider-360.model';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'provider-individual-details',
    templateUrl: './provider-individual-details.component.html',
    styleUrls: ['./provider-individual-details.component.css']

})


/** ProviderIndividualDetails component*/
export class ProviderIndividualDetailsComponent implements OnInit
{
    @Input() public providerInfo: Provider360Info = new Provider360Info();
    @Input() public serviceErrorMessage: string = '';

        /** ProviderIndividualDetails ctor */
    constructor() { }

    /** Called by Angular after ProviderIndividualDetails component initialized */
    ngOnInit(): void {

    }

    updateInfo() {
        window.open(environment.appRootUrl + 'update-info')
    }
}