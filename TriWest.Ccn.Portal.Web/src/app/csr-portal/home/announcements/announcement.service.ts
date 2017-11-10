import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Subject } from 'rxjs/Subject';

import { Announcement } from './announcement.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AnnouncementService {

    private announcementUrl = environment.apiUrl + 'api/announcements'; // URL to web api
    private announcementsSubject = new Subject<Announcement[]>();
    announcementsPub = this.announcementsSubject.asObservable();

    announcements: Announcement[] = [];
    constructor(private httpService: HttpService) {
        this.getAnnouncements();
    }

    getAnnouncements() {
        if (this.announcements.length > 0) {
            this.pubAnnouncements();
        }
        this.httpService.getItem<Announcement[]>(this.announcementUrl)
            .subscribe((announcements: Announcement[]) => {
                this.announcements = announcements;
                this.pubAnnouncements();
            });
    }
    pubAnnouncements() {
        this.announcementsSubject.next(this.announcements);
    }
}
