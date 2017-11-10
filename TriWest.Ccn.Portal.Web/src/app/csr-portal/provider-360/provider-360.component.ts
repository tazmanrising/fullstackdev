import { Component, OnInit, NO_ERRORS_SCHEMA, SchemaMetadata } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Provider360Service } from './provider-360.service';
import { Provider360Info } from './provider-360.model';

@Component({
  selector: 'provider-360',
  templateUrl: './provider-360.component.html',
  styleUrls: ['./provider-360.component.css']
})

export class Provider360Component implements OnInit {
    id: number;
    providerInfo: Provider360Info;
    errorMessage: string;

    constructor(private providerService: Provider360Service,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        // Use of the snapshot interface just temp to grab and display id. 
        // Should be built out with a full observable interface and supporting service.
        try {
            this.id = +this.route.snapshot.paramMap.get('id');
        }
        catch(es) {
            this.id = 0;
        }

        this.providerService.getProvider(this.id)
            .subscribe(
            value => this.providerInfo = value,
            error => this.errorMessage = <any>error);
  }

}
