import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { VeteranDetailsModalComponent } from '../veteran-details-modal/veteran-details-modal.component';

import { VeteranProfile } from '../veteran-360.model';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'veteran-details',
    templateUrl: './veteran-details.component.html'
})

export class VeteranDetailsComponent {

    @Input() veteran: VeteranProfile; 

    constructor(private modalService: NgbModal) { }

    ngOnInit(): void {             
    }
    
    moreDetails(veteran) {
        const modalRef = this.modalService.open(VeteranDetailsModalComponent, { size: 'lg' });
        modalRef.componentInstance.veteran = this.veteran;
    }
}