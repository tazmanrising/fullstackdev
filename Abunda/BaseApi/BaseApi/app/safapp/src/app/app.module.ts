import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SafComponent } from './saf/saf.component';
import { SafAdminComponent } from './saf-admin/saf-admin.component';

import { OnlyNumbers } from './core/directives/onlynumbrer.directive';

import { NgPipesModule} from 'ngx-pipes';


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
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

