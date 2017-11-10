import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProviderIndividualDetailsComponent } from './provider-individual-details/provider-individual-details.component';
import { ProviderOfficeInfoComponent } from './provider-office-info/provider-office-info.component';
import { AuthProviderComponent } from './auth/auth-provider.component';
import { MedicalClaimsComponent } from './medical-claims/medical-claims.component';
import { Provider360Service } from './provider-360.service';


@NgModule({
    imports: [CommonModule, FormsModule, NgbModule.forRoot(), NgxDatatableModule],
    declarations: [
        ProviderIndividualDetailsComponent,
        AuthProviderComponent,      
        MedicalClaimsComponent,
        ProviderOfficeInfoComponent
    ],
    exports: [
        CommonModule,
        NgbModule,
        NgxDatatableModule,
        ProviderIndividualDetailsComponent,
        ProviderOfficeInfoComponent,
        AuthProviderComponent,       
        MedicalClaimsComponent
    ],
    providers: [Provider360Service],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class Provider360Module
{
}
