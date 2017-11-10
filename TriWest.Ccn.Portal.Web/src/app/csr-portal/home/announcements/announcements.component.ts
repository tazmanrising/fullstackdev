import { Component, OnInit, OnDestroy } from '@angular/core';
import { Announcement } from './announcement.model';
import { AnnouncementService } from './announcement.service';
import { FormatDatePipe } from '../../../core/pipes/format-date.pipe';

import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'announcements',
    templateUrl: './announcements.component.html',
    providers: [AnnouncementService, FormatDatePipe]
})

export class AnnouncementsComponent implements OnInit, OnDestroy {
    announcements: Announcement[];
    announcmentsSubscription: Subscription;
    user: object = { hub: 'Phoenix' };
    constructor(private announcementService: AnnouncementService, private formatDate: FormatDatePipe) {
    }
    ngOnInit() {
        this.announcmentsSubscription = this.announcementService.announcementsPub
            .subscribe((announcements: Announcement[]) => this.setAnnouncements(announcements));
        this.announcementService.getAnnouncements();
    }
    ngOnDestroy() {
        this.announcmentsSubscription.unsubscribe();
    }
    setAnnouncements(announcements) {
        this.announcements = announcements;
    }
}
