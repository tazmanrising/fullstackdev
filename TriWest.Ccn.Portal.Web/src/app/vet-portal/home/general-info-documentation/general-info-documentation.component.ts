import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbTab, Link} from '../veteran-home.model';
import { VeteranHomeService} from '../veteran-home.service'

@Component({
    selector: 'general-info-documentation',
    templateUrl: './general-info-documentation.component.html',
    styleUrls: ['./general-info-documentation.component.css'],
    //encapsulation: ViewEncapsulation.None
})
/** genreal-info-documentation component*/
export class GeneralInfoDocumentationComponent implements OnInit
{
    /** properties **/
    tabs: NgbTab[];



    /** genreal-info-documentation ctor */
    constructor(private vetHomeService: VeteranHomeService) { }

    /** Called by Angular after genreal-info-documentation component initialized */
    ngOnInit(): void {
        this.tabs = this.vetHomeService.getTabs();
        console.log(this.tabs);

        
    }

    
}
