import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CareRadiusNotesModalComponent } from '../cr-notes-modal/cr-notes-modal.component';
import { CareRadiusNotes } from '../veteran-360.model';

@Component({
    selector: 'cr-notes',
    templateUrl: './cr-notes.component.html'
})
export class CareRadiusNotesComponent  {
    @Input() notes: CareRadiusNotes[];
    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;   

    constructor(private modalService: NgbModal) { }  

    onSelect(evt:any, row: any) {      
        const modalRef = this.modalService.open(CareRadiusNotesModalComponent, { size: 'lg' });
        modalRef.componentInstance.notes = row;//this.selected[0];
        evt.preventDefault();
        return false;
    }
}

