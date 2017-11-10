import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DirectivesModule } from '../core/directives/directives.module'
/* App-Level Imports */
import { TrackerPaneComponent } from './tracker-pane/tracker-pane.component';
import { TrackerSliderComponent } from './tracker-slider/tracker-slider.component';
import { TrackerFormTemplateComponent } from './tracker-form/tracker-form-template.component';
import { PreventSelectValidatorDirective } from './tracker-directives/prevent-select.directive';
import { MaskDirective } from './tracker-directives/mask.directive';
import { TrackerFormService } from './tracker-service/tracker-form.service';

@NgModule({
    declarations: [
        TrackerPaneComponent,
        TrackerSliderComponent,
        TrackerFormTemplateComponent,
        PreventSelectValidatorDirective,
        MaskDirective
    ],
    exports: [
        TrackerPaneComponent,
        TrackerSliderComponent,
        TrackerFormTemplateComponent,
        DirectivesModule,
        PreventSelectValidatorDirective,
        MaskDirective
    ],
    imports: [
      BrowserAnimationsModule
      ,ReactiveFormsModule
      ,FormsModule
      ,HttpModule
      ,NgbModule.forRoot()
      ,NgxDatatableModule
      ,DirectivesModule
  ],
  providers: [TrackerFormService],
  schemas: []
})
export class TrackerModule { }

