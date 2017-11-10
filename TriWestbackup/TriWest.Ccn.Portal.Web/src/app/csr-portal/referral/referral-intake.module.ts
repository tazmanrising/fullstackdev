import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* App-Level Imports */
//import { QsiFormComponent } from './qsi-form/qsi-form.component';
//import { QsiPaneComponent } from './qsi-pane/qsi-pane.component';

import { ReferralIntakeComponent } from './referral-intake.component';
import { ReferralIntakeService } from './referral-intake.service'


@NgModule({
  declarations: [
    //QsiPaneComponent,
    //QsiFormComponent,
    ReferralIntakeComponent

  ],
  exports: [
    //QsiPaneComponent,
    //QsiFormComponent,
    ReferralIntakeComponent

  ],
  imports: [
    BrowserAnimationsModule
    , ReactiveFormsModule
    , FormsModule
    , HttpModule
    , NgbModule.forRoot()
    , NgxDatatableModule
  ],
  providers: [
    ReferralIntakeService
  ],
  schemas: []
})
export class ReferralIntakeModule { }

