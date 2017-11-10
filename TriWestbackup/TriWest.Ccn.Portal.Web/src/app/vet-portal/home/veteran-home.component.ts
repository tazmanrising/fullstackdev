import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'veteran-home',
    templateUrl: './veteran-home.component.html',
    styleUrls: ['./veteran-home.component.css'],
    encapsulation: ViewEncapsulation.None
})

/** veteran-home component*/
export class VeteranHomeComponent implements OnInit {

/** veteran-home ctor */
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }

 /** Called by Angular after veteran-home component initialized */

    ngOnInit() { }


}
