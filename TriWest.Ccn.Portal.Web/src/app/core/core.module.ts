import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpService } from '../core/services/http.service';

import { SelectModule } from 'ng2-select';

@NgModule({
    imports: [HttpModule, SelectModule],
    declarations: [],
    exports: [SelectModule],
    providers: [HttpService]
})

export class CoreModule { }