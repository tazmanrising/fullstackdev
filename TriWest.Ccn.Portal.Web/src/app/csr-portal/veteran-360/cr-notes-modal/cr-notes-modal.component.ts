import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CareRadiusNotes } from '../veteran-360.model';

@Component({
    selector: 'cr-notes-modal',
    templateUrl: './cr-notes-modal.component.html'
})
export class CareRadiusNotesModalComponent {
    @Input() notes: CareRadiusNotes;       

    constructor(public activeModal: NgbActiveModal) { }   
}