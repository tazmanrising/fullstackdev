import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { VeteranProfile } from '../../../csr-portal/veteran-360/veteran-360.model';
import { VeteranHomeService } from '../veteran-home.service';

@Component({
    selector: 'veteran-view',
    templateUrl: './status-bar.component.html',
    providers: [VeteranHomeService]
})

export class StatusBarComponent implements OnInit
{
    yearString = (new Date()).getFullYear();
    veteran: VeteranProfile;
    errorMessage: string;
    
  
    constructor(private vetHomeService: VeteranHomeService) { }

    ngOnInit(): void {
        this.vetHomeService.getVeteranDetails('2') // need to pass the right veteranId 
            .subscribe(
                value => this.veteran = value,
                error => this.errorMessage = <any>error);
    }   
      
}
