import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { VeteranDetailsComponent } from './veteran-details/veteran-details.component';
import { Veteran360DetailsOHIComponent } from './veteran-360-details-ohi/veteran-360-details-ohi.component';
import { Veteran360DetailsEnrollmentComponent } from './veteran-360-details-enrollment/veteran-360-details-enrollment.component';
import { Veteran360DetailsEnrollmentModalComponent } from './veteran-360-details-enrollment/veteran-360-details-enrollment-modal.component';
import { VeteranDetailsModalComponent } from './veteran-details-modal/veteran-details-modal.component';
import { AuthVeteranComponent } from './auth/auth-veteran.component';

/* DO NOT REMOVE THE FOLLOWING LINES */
import { PortalSearchComponent } from '../../components/portal-search/portal-search.component';
import { VeteranSearchComponent } from '../../components/portal-search/veteran-search/veteran-search.component';
import { ProviderSearchComponent } from '../../components/portal-search/provider-search/provider-search.component';
import { ReferralSearchComponent } from '../../components/portal-search/referral-search/referral-search.component';
import { ClaimsSearchComponent } from '../../components/portal-search/claims-search/claims-search.component';

import { ClaimVeteranComponent } from './claim/claim-veteran.component';
import { CareRadiusNotesComponent } from './cr-notes/cr-notes.component';
import { CareRadiusNotesModalComponent } from './cr-notes-modal/cr-notes-modal.component';
import { InlineEditComponent } from '../../core/directives/inline-edit/inline-edit.component';
import { Veteran360Service } from './veteran-360.service';
import { ReferralSearchService } from '../../components/portal-search/referral-search/referral-search.service';
import { MatchPhoneTypePipe } from '../../core/pipes/match-phone-type.pipe';
import { RemovePhoneTypePipe } from '../../core/pipes/remove-phone-type.pipe';
import { MatchAddressTypePipe } from '../../core/pipes/match-address-type.pipe';
import { DirectivesModule } from '../../core/directives/directives.module';
import { CoreModule } from '../../core/core.module';
import { ClaimsSearchService } from "../../components/portal-search/claims-search/claims-search.service";


@NgModule({
    imports: [
        CommonModule,
        DirectivesModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxDatatableModule,
        CoreModule
    ],
    declarations: [
        VeteranDetailsComponent,
        Veteran360DetailsOHIComponent,
        Veteran360DetailsEnrollmentComponent,
        Veteran360DetailsEnrollmentModalComponent,
        VeteranDetailsModalComponent,
        AuthVeteranComponent,
        ClaimVeteranComponent, 
        CareRadiusNotesComponent,
        CareRadiusNotesModalComponent,
        InlineEditComponent,
        MatchPhoneTypePipe,
        MatchAddressTypePipe,
        RemovePhoneTypePipe,
        PortalSearchComponent,
        VeteranSearchComponent,
        ClaimsSearchComponent,
        ProviderSearchComponent,
        ReferralSearchComponent
    ],
    exports: [
        CommonModule,
        NgbModule,
        NgxDatatableModule,
        VeteranDetailsComponent,
        Veteran360DetailsOHIComponent,
        Veteran360DetailsEnrollmentComponent,
        Veteran360DetailsEnrollmentModalComponent,
        VeteranDetailsModalComponent,
        AuthVeteranComponent,
        ClaimVeteranComponent, 
        CareRadiusNotesComponent,
        CareRadiusNotesModalComponent,
        PortalSearchComponent

    ],
    entryComponents: [
        VeteranDetailsModalComponent,
        CareRadiusNotesModalComponent,
        Veteran360DetailsEnrollmentModalComponent
    ],
    providers: [
        Veteran360Service,
        ClaimsSearchService,
        ReferralSearchService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class Veteran360Module {

}
