import { Component, OnInit, NO_ERRORS_SCHEMA, SchemaMetadata } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'vamc-360',
  templateUrl: './vamc-360.component.html',
  styleUrls: ['./vamc-360.component.css']
})

export class Vamc360Component implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        // Use of the snapshot interface just temp to grab and display id. 
        // Should be built out with a full observable interface and supporting service.
        this.id = +this.route.snapshot.paramMap.get('id');
        console.log(this.id);
  }

}
