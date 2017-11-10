import { Component, OnInit } from '@angular/core';
import { TrackerSliderComponent } from '../tracker-slider/tracker-slider.component';

@Component({
    selector: 'tracker-pane',
    templateUrl: './tracker-pane.component.html',
    styleUrls: ['./tracker-pane.component.css']
})
/** tracker-pane component*/
export class TrackerPaneComponent implements OnInit
{

    in = '<';
    out = '>';
    /** tracker-pane ctor */
    constructor(private trackerSlider: TrackerSliderComponent) { }

    /** Called by Angular after tracker-pane component initialized */

    ngOnInit(): void { }

    toggleMenu() {
        this.trackerSlider.toggleMenu();
    }

    state() {
        return this.trackerSlider.menuState;
    }
}
