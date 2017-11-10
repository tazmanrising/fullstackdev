import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-title-bar',
    templateUrl: 'app-title-bar.component.html'
})

export class AppTitleBarComponent {
    brand = 'Veteran360°';
    name =  'Portal';

    constructor() {
        let temp = document.location.href;

        if (temp.indexOf('/crm') > -1) this.brand = 'CRM360°';
        else if (temp.indexOf('/vet') > -1) this.brand = 'Veteran360°';
        else if (temp.indexOf('/va') > -1) this.brand = 'VA360°';
        else this.brand = 'C.C.N. ';
    }


}
