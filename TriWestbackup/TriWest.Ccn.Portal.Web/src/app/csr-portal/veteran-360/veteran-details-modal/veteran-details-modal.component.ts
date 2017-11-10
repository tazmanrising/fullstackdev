import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VeteranProfile } from '../veteran-360.model';

@Component({
    selector: 'veteran-details-modal',
    templateUrl: './veteran-details-modal.component.html'
})
export class VeteranDetailsModalComponent {
    @Input() veteran: VeteranProfile;    
    email: string = '';
    phone: string = '';

    constructor(public activeModal: NgbActiveModal) { }
   
    onSave(event) {       
        /*save data*/        
        this.activeModal.close();
    }
}