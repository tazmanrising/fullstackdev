import { Component, OnInit } from '@angular/core';
import { UserMenuBarService } from './user-menu-bar.service';

@Component({
    selector: 'user-menu-bar',
    templateUrl: 'user-menu-bar.component.html',
    styleUrls: ['user-menu-bar.component.css'],
    providers: [UserMenuBarService]
})

export class UserMenuBarComponent implements OnInit {
    constructor(private userMenuBarService : UserMenuBarService) { }
    defaultMenu: any[];
    isActive: any;
    
    ngOnInit() {
        this.defaultMenu = this.userMenuBarService.getDefaultMenu()
    }

    activate(item) {
        this.isActive = item;
      
    }
    

}

