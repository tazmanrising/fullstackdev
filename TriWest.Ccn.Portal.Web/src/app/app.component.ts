import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { TrackerService } from './tracker/tracker.service';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    // Temporary until authentication.
    loggedIn: boolean = true;
    isTrackerShown: boolean = false;
    subTrackerSubject: Subscription;


    constructor(private trackerService: TrackerService) {
        this.subTrackerSubject = trackerService.pubTrackerSubject.subscribe((show: boolean) => {

            this.isTrackerShown = show;


        })
    }


    ngOnInit() {
     

    };


    ngOnDestroy() {
        this.subTrackerSubject.unsubscribe();


    };

}


