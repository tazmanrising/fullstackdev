import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SafComponent } from './saf/saf.component';
import { SafAdminComponent } from './saf-admin/saf-admin.component';

import { OnlyNumbers } from './core/directives/onlynumbrer.directive';

import { NgPipesModule} from 'ngx-pipes';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';



@NgModule({
  declarations: [
    AppComponent,
    SafComponent,
    SafAdminComponent,
    OnlyNumbers
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

