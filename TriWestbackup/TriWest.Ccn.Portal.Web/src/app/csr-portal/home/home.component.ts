import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
/** home component*/
export class HomeComponent implements OnInit
{
    /** home ctor */
    constructor() { }

    /** Called by Angular after home component initialized */
    ngOnInit(): void { }
}