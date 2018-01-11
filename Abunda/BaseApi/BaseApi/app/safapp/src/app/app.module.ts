import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SafComponent } from './saf/saf.component';
import { SafAdminComponent } from './saf-admin/saf-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SafComponent,
    SafAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

