/// <reference path="home/veteran-home.service.ts" />
/// <reference path="../app.routes.module.ts" />
/// <reference path="home/dashboard/to-do-today/to-do-today.component.ts" />
import { NgModule } from '@angular/core';
import { DirectivesModule } from "../core/directives/directives.module";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from "@swimlane/ngx-datatable/release";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routes.module';
import { TruncatePipe } from '../core/pipes/truncate.pipe';


/* Veteran Imports */
import { VeteranHomeComponent } from './home/veteran-home.component';
import { VeteranHomeSimpleComponent } from './home/veteran-home-simple.component';
import { VeteranHomeFooterComponent } from './home/footer/veteran-home-footer.component';
import { ProviderDirectoryComponent } from './provider-directory/provider-directory.component';
import { VetReferralsComponent } from './vet-referrals/vet-referrals.component';
import { VetAppointmentsComponent } from './vet-appointments/vet-appointments.component';
import { VetClaimsComponent } from './vet-claims/vet-claims.component';

import { GeneralInfoDocumentationComponent } from './home/general-info-documentation/general-info-documentation.component';
import { VeteranHomeService } from './home/veteran-home.service';
import { BannerComponent } from './home/banner/banner.component';
import { StatusBarComponent } from './home/status-bar/status-bar.component';
import { ToDoTodayComponent } from './home/dashboard/to-do-today/to-do-today.component';

import { NotificationsComponent } from './notification-details/notification-details.component';
import { NotificationService } from './notification-details/notification-details.service';
import { NotificationDetailsModalComponent } from './notification-details-modal/notification-details-modal.component';

// app-level components
import { CrumbtrailComponent } from '../components/crumbtrail/crumbtrail.component';


@NgModule({
    imports: [
        CommonModule,
        DirectivesModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxDatatableModule,
        CoreModule,
        AppRoutingModule
    ],
    declarations: [
        VeteranHomeComponent,
        VeteranHomeSimpleComponent,
        VeteranHomeFooterComponent,
        ProviderDirectoryComponent,
        VetReferralsComponent,
        VetAppointmentsComponent,
        VetClaimsComponent,
        CrumbtrailComponent,
        GeneralInfoDocumentationComponent,
        StatusBarComponent,       
        BannerComponent,
        ToDoTodayComponent,
        NotificationsComponent,
        TruncatePipe,
        NotificationDetailsModalComponent
        
       
    ],
    exports: [
        CommonModule,
        NgbModule,
        NgxDatatableModule,
        // VeteranHomeComponent,
        VeteranHomeSimpleComponent,
        BannerComponent,
        ToDoTodayComponent,
        ProviderDirectoryComponent,
        VetAppointmentsComponent,
        NotificationsComponent,
        NotificationDetailsModalComponent
                
     
    ],
    entryComponents: [
      NotificationDetailsModalComponent
    ],
    providers: [
        VeteranHomeService,
        NotificationService
    ],
  
    //schemas: []
})

export class VetPortalModule {}

