import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Vamc360Component } from './vamc-360.component';
import { Vamc360AuthsComponent } from './vamc-360-auths/vamc-360-auths.component';


@NgModule({
    imports: [CommonModule, FormsModule, NgbModule.forRoot(), NgxDatatableModule],
    declarations: [Vamc360AuthsComponent],
    exports: [CommonModule, NgbModule, NgxDatatableModule, Vamc360AuthsComponent],
    providers: [],
    schemas: []

})

export class Vamc360Module
{

}