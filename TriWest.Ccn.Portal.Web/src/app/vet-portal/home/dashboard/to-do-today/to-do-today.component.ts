/// <reference path="../../veteran-home.model.ts" />
/// <reference path="../../veteran-home.service.ts" />
import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NgbPanel } from '../../veteran-home.model';
import { NgbAccordionConfig, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'to-do-today',
    templateUrl: './to-do-today.component.html',
    styleUrls: ['./to-do-today.component.css'],
    providers: [NgbAccordionConfig]
})
/** to-do-today component*/
export class ToDoTodayComponent implements OnInit, NgbPanelChangeEvent {
    panelId: string = '1';
    nextState: boolean = false;
    currentState: boolean = true;

    panelList: NgbPanel[] = [];


    preventDefault: () => void;

    /** to-do-today ctor */
    constructor(
        private ngbAccordionConfig: NgbAccordionConfig,
        private elRef: ElementRef,
        private ren: Renderer2
    ) {
        this.panelList.push(new NgbPanel('1', true));
        this.panelList.push(new NgbPanel('2', false));
        this.panelList.push(new NgbPanel('3', false));
        this.panelList.push(new NgbPanel('4', false));
        this.panelList.push(new NgbPanel('5', false));
    }


    changeDetector() {


    }

    /** properties */

    activate($event: NgbPanelChangeEvent) {
        for (var i = 0; i < this.panelList.length; i++) {
            this.panelList[i].nextState = false;
        }            
         if (this.panelList.find(p => p.id == $event.panelId)) {
            this.panelList[parseInt($event.panelId) - 1].nextState = $event.nextState;
        }
         console.log(this.panelList);
    }

    clickAccordion($event: NgbPanelChangeEvent) {
        for (var i = 0; i < this.panelList.length; i++) {
            this.panelList[i].nextState = false;
        }
       this.panelList[parseInt($event.panelId) - 1].nextState = !this.panelList[parseInt($event.panelId) - 1].nextState;
        
        console.log(this.panelList);
    }

    

    /** Called by Angular after to-do-today component initialized */
    ngOnInit(): void {

    }

}
