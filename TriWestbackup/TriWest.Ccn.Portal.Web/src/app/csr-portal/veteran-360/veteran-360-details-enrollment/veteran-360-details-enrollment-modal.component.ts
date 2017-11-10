import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VeteranProfile, VeteranEnrollment } from '../veteran-360.model';
import { Provider360Info } from '../../provider-360/provider-360.model';

@Component({
    selector: 'veteran-360-details-enrollment-modal',
    templateUrl: './veteran-360-details-enrollment-modal.component.html'
})
export class Veteran360DetailsEnrollmentModalComponent implements OnInit {

    @Input() veteran: VeteranProfile = new VeteranProfile();

    hasInfo: Boolean = false;
    distanceProgram: VeteranEnrollment;
    waitTimeProgram: VeteranEnrollment;
    enrollments: VeteranEnrollment[] = [];
    pcp: Provider360Info;
    pcpUpdate: string;
    updateDate = new Date();

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void {
        if (this.veteran.enrollments == null) this.veteran.enrollments = [];
        this.hasInfo = this.veteran.enrollments.length > 0;
        for (let e of this.veteran.enrollments) {
            // check programs
            if (e.enrollmentType == 'Distance') {
                this.distanceProgram = e;
                continue;
            }
            if (e.enrollmentType == 'WaitTime') {
                this.waitTimeProgram = e;
                continue;
            }
            // fill enrollments
            this.enrollments.push(e);
        }
        // setup pcp
        if (this.veteran.primaryCareProviderHistory) {
            this.pcp = this.veteran.primaryCareProviderHistory[0].provider;
            this.pcpUpdate = this.veteran.primaryCareProviderHistory[0].updateDate;
        }
    }

    close() {
        this.activeModal.close();
    }
}
