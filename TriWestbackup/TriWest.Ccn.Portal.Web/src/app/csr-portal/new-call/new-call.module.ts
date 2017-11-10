import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectModule } from 'ng2-select';
import { CoreModule } from '../../core/core.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CallerTypeComponent } from './caller-type/caller-type.component';
import { CallerOtherComponent } from './caller-other/caller-other.component';
import { VerifyVeteranCallerComponent } from './verify-veteran-caller/verify-veteran-caller.component';
import { CallerVamcComponent } from './caller-vamc/caller-vamc.component';
import { NewCallService } from '../new-call/new-call.service';

import { CallerProviderComponent } from './caller-provider/caller-provider.component';
import { CallerProviderSearchComponent } from './caller-provider/caller-provider-search.component';

import { DirectivesModule } from '../../core/directives/directives.module';

@NgModule({
    imports: [CommonModule, FormsModule, SelectModule, NgbModule.forRoot(), NgxDatatableModule, DirectivesModule],
    declarations: [CallerTypeComponent, CallerOtherComponent, CallerVamcComponent, VerifyVeteranCallerComponent, CallerProviderComponent, CallerProviderSearchComponent],
    exports: [CommonModule, CallerTypeComponent, CallerVamcComponent, CallerOtherComponent, CallerProviderComponent, CallerProviderSearchComponent, VerifyVeteranCallerComponent, NgbModule, NgxDatatableModule],   
    providers: [NewCallService]
}) 

export class NewCallModule { }
