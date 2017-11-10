import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'veteran-home-footer',
    templateUrl: './veteran-home-footer.component.html'
})
/** veteran-home-footer component*/
export class VeteranHomeFooterComponent implements OnInit
{

    year = new Date();
    /** veteran-home-footer ctor */
    constructor() { }

    /** Called by Angular after veteran-home-footer component initialized */
    ngOnInit(): void { }
}
