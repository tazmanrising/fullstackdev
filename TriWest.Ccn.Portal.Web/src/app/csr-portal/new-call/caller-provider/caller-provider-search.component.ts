import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'caller-provider-search',    
    templateUrl: 'caller-provider-search.component.html' 
    
})
export class CallerProviderSearchComponent implements OnInit, OnChanges {
    @Input() data: Array<any>;
    gridData: any;

    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;    

    constructor( private router: Router
                ) {}   
    ngOnInit() {
        this.selected = [];
        this.gridData=[];
    }
    
    ngOnChanges(changes: SimpleChanges) {
        var searchResults: Array<any> = changes.data.currentValue;
        
        if (searchResults)
        {
            this.gridData = searchResults;
        }                  
    }

    onSelect({ selected })
    {      
            
    }

    clickContinue() {
        this.router.navigate(['crm/provider-360', this.selected[0].id]);
    }

    clickGeneral() {
      this.router.navigate(['crm/general-info/']);
    }
}
