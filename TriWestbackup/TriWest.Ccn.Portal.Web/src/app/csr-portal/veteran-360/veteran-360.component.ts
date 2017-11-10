import { Component, OnInit, NO_ERRORS_SCHEMA, SchemaMetadata, ViewChild, ViewEncapsulation  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Veteran360Service } from './veteran-360.service';

import { VeteranProfile, VeteranProfileOHI, CareRadiusNotes } from './veteran-360.model';

@Component({
  selector: 'veteran-360',
  templateUrl: './veteran-360.component.html',
  styleUrls: ['./veteran-360.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Veteran360Component implements OnInit {
    veteran: VeteranProfile;
    notes: CareRadiusNotes;
    errorMessage: string;
    veteranId: number = 0;
    veteranFullName: string;

    constructor(private veteran360Service: Veteran360Service,
        private route: ActivatedRoute,
        private router: Router) {
    }   

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.veteranId = params['id'];
            this.veteran360Service.getVeteranDetailsById(this.veteranId)
                .subscribe(
                  value => {
                      this.veteran = value;
                      this.veteranFullName = value.firstName + ' ' + value.lastName;
                  },
                  error => this.errorMessage = <any>error
                );           
        }); 

        this.route.params.subscribe((params: Params) => {
            this.veteranId = params['id'];
            let searchParams = new URLSearchParams();
            searchParams.append('veteranId', this.veteranId.toString());

            this.veteran360Service.getCareRadiusNotesByVeteranId(searchParams)
                .subscribe(
                value => this.notes = value,
                error => this.errorMessage = <any>error
                );
        }); 
    }   
}
