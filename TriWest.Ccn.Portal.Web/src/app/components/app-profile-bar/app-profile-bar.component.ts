import { EventEmitter, Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { UserProfileService } from '../../authentication/services/user-profile.service';

enum portalTypes { CRM, VET, VA, NONE };

@Component({
    selector: 'app-profile-bar',
    templateUrl: 'app-profile-bar.component.html'
})

export class AppProfileBarComponent implements OnInit {
    crmHome: string = "crm"
    vetHome: string = "vet";
    crmUser: string = "Faye Nelson";
    vetUser: string = "Angela Pastura";
    userName: string = '';
    homeUrl: string = '';
    loggedIn: boolean = false;

    logoutUrl: string = 'http://www.triwest.com';
        constructor() {
            
        let temp = document.location.href;

        if (temp.indexOf('/crm') > -1) {
            this.userName = this.crmUser;
            this.homeUrl = this.crmHome;
            this.loggedIn = true;
        }
        else if (temp.indexOf('/vet') > -1) {
            this.userName = this.vetUser;
            this.homeUrl = this.vetHome;
            this.loggedIn = true;
        }
        else if (temp.indexOf('/va') > -1) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;

        }

    }

    ngOnInit(): void {
    }

    showPreference() {
        console.log("show preference");
    }

    logout(): void {

    }


}
