import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'veteran-home-simple',
    templateUrl: './veteran-home-simple.component.html',
    styleUrls: ['./veteran-home-simple.component.css']
})
/** veteran-home-simple component*/
export class VeteranHomeSimpleComponent implements OnInit
{
    /** veteran-home-simple ctor */
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }


    /** Called by Angular after veteran-home-simple component initialized */
    ngOnInit(): void { }
}
