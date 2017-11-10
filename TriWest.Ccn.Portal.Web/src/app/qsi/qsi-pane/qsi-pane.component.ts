/// <reference path="../../tracker/tracker.service.ts" />
import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations';
import {TrackerService} from '../../tracker/tracker.service';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'qsi-pane',
    templateUrl: './qsi-pane.component.html',
    styleUrls: ['./qsi-pane.component.css'],
    animations:
    [
       [trigger('upAndDown', [
            state('in-up',
                style({
                    transform: 'translateY(0%)',
                    width: '96%'

                })),
            state('in-down', style({
                transform: 'translateY(88%)',
                width: '96%'

            })),
            state('out-up',
                style({
                    transform: 'translateY(0%)',
                    width : '77.8125%'

                })),
            state('out-down', style({
                transform: 'translateY(88%)',
                width: '77.8125%'
                
            })),
            transition('in-up => in-down', animate('300ms linear')),
            transition('in-down => in-up', animate('300ms linear')),
            transition('out-up => out-down', animate('300ms linear')),
            transition('out-down => out-up', animate('300ms linear')),



        ])]
    ],
    providers: []
})


export class QsiPaneComponent implements OnInit, OnDestroy, DoCheck {
    
    isShown : boolean = false;
    moveVertical = 'out-up';
    trackerState = 'out';
    prevState;
    changeDetected: boolean;
    differ: any;
    subTrackerSubject: Subscription;
    subQsiSubject: Subscription;

   constructor(private ts: TrackerService) {
     this.subTrackerSubject =   ts.pubmodeTrackerSubject.subscribe((isExpanded: boolean) => {
           if (isExpanded) {
               this.trackerState = 'out';
           }
           else this.trackerState = 'in';

     })

     this.subQsiSubject = ts.pubTrackerSubject.subscribe((show: boolean) => {
         
             this.isShown = show;
         

     })

   
   }

    ngOnInit() {

    }

    
    ngDoCheck() {
        if (this.prevState !== this.trackerState) {
            this.autoHorizonal();
        }
    }
  


    ngOnDestroy() {
        this.subTrackerSubject.unsubscribe();
        this.subQsiSubject.unsubscribe();
    }


    isQsiUp(): boolean {
        return (this.moveVertical === 'in-up' || this.moveVertical === 'out-up');
    }


    autoHorizonal() {
        if (this.trackerState === 'out') {
            if (this.moveVertical === 'in-up') {
                this.moveVertical = 'out-up';

            } else if (this.moveVertical === 'in-down') {
                this.moveVertical = 'out-down';
            }

        }
        else if (this.trackerState === 'in') {
            if (this.moveVertical === 'out-up') {
                this.moveVertical = 'in-up';

            } else if (this.moveVertical === 'out-down') {
                this.moveVertical = 'in-down';
            }
        }
    }

    verticalShifts() {

        if (this.trackerState === 'out') {
            if (this.moveVertical === 'out-up') {
               this.prevState = this.moveVertical = 'out-down';
            } else if (this.moveVertical === 'out-down') {
                this.prevState = this.moveVertical = 'out-up';
            }
            else if (this.moveVertical === 'in-down') {
                this.prevState = this.moveVertical = 'out-down';
            }
            else if (this.moveVertical === 'in-up') {
                this.prevState = this.moveVertical = 'out-up';
            }
        }
        else if (this.trackerState === 'in') {
            if (this.moveVertical === 'out-up') {
                this.prevState =  this.moveVertical = 'in-up';
            }
            else if (this.moveVertical === 'out-down') {
                this.prevState = this.moveVertical = 'in-down';
            }
            else if (this.moveVertical === 'in-down') {
                this.prevState = this.moveVertical = 'in-up';
            }
            else if (this.moveVertical === 'in-up') {
                this.prevState = this.moveVertical = 'in-down';
            }
                
        }

        //console.log('horizontal ', this.trackerState);
        //console.log('vertical ', this.moveVertical);

        }
        
    }





