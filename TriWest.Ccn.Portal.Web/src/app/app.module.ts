
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.module';

import { NewCallComponent } from './csr-portal/new-call/new-call.component';
import { ResearchComponent } from './csr-portal/research/research.component';
import { WorkQueueComponent } from './csr-portal/work-queue/work-queue.component';
import { ReferralIntakeComponent } from './csr-portal/referral/referral-intake.component';
import { Provider360Component } from './csr-portal/provider-360/provider-360.component';
import { Veteran360Component } from './csr-portal/veteran-360/veteran-360.component';
import { Vamc360Component } from './csr-portal/vamc-360/vamc-360.component';

/* App-Level Imports */
import { AppLandingPageComponent } from './components/app-landing-page/app-landing-page.component'
import { AppTitleBarComponent } from './components/app-title-bar/app-title-bar.component'
import { AppProfileBarComponent } from './components/app-profile-bar/app-profile-bar.component';
import { ViewLabelComponent } from './components/view-label/view-label.component';


import { HomeModule } from './csr-portal/home/home.module';
import { NewCallModule } from './csr-portal/new-call/new-call.module';
import { Provider360Module } from './csr-portal/provider-360/provider-360.module';
import { Vamc360Module } from './csr-portal/vamc-360/vamc-360.module';
import { Veteran360Module } from './csr-portal/veteran-360/veteran-360.module';
import { AuthModule } from './authentication/auth.module';

//vet-portal imports//
import { VetPortalModule } from './vet-portal/vet-portal.module';

//tracker imports//
import { TrackerModule } from './tracker/tracker.module';
import { TrackerService } from './tracker/tracker.service';

//qsi imports//
import { QsiModule } from './qsi/qsi.module';

// referral intake
import { ReferralIntakeModule } from './csr-portal/referral/referral-intake.module';

@NgModule({
    declarations: [
        AppComponent,
        AppLandingPageComponent,
        AppTitleBarComponent,
        AppProfileBarComponent,
        ViewLabelComponent,
        NewCallComponent,
        ResearchComponent,
        WorkQueueComponent,
        Provider360Component,
        Veteran360Component,
        Provider360Component,
        Vamc360Component
    ],
  exports: [TrackerModule],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      HomeModule,
      NewCallModule,
      Provider360Module,
      Vamc360Module,
      Veteran360Module,
      AppRoutingModule,
      NgbModule.forRoot(),
      NgxDatatableModule,
      AuthModule,
      TrackerModule,
      VetPortalModule,
      QsiModule,
      ReferralIntakeModule
  ],
  providers: [TrackerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }

