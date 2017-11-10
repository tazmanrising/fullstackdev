import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TrackerService } from '../tracker.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'tracker-slider',
    templateUrl: './tracker-slider.component.html',
    styleUrls: ['./tracker-slider.component.css'],
    animations: [trigger('slideInOut', [
        state('in', style({
            transform: 'translateX(85%)'
        })),
        state('out', style({
            transform: 'translateX(0%)'
        })),
        transition('in => out', animate('0s linear')),
        transition('out => in', animate('0s linear'))
    ])
    ]
})
/** tracker-slider component*/
export class TrackerSliderComponent implements OnInit, OnDestroy {
    menuShow = false;

   public menuState = 'out';

   subTrackerSubject: Subscription;

    /** tracker-slider ctor */
    constructor(private ts: TrackerService) {

        this.subTrackerSubject = ts.pubTrackerSubject.subscribe((show: boolean) => {
           
                this.menuShow = show;
            
        });
        ts.setTrackerMode(true);
    }

    /** Called by Angular after tracker-slider component initialized */
    ngOnInit(): void { }

    ngOnDestroy() {
        this.subTrackerSubject.unsubscribe();
    }


    toggleMenu() {
        this.menuState = this.menuState == 'out' ? 'in' : 'out';
        this.ts.setTrackerMode(this.menuState === 'out')
        console.log(this.menuState);
    }
}
