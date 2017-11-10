import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* App-Level Imports */
import { QsiFormComponent } from './qsi-form/qsi-form.component';
import { QsiPaneComponent } from './qsi-pane/qsi-pane.component';



@NgModule({
    declarations: [
        QsiPaneComponent,
        QsiFormComponent,
    
    ],
    exports: [
        QsiPaneComponent,
        QsiFormComponent,

            ],
    imports: [
      BrowserAnimationsModule
      ,ReactiveFormsModule
      ,FormsModule
      ,HttpModule
      ,NgbModule.forRoot()
      ,NgxDatatableModule
  ],
  providers: [],
  schemas: []
})
export class QsiModule { }

