import { Injectable } from '@angular/core'

Injectable()
export class UserMenuBarService {

    public getDefaultMenu() {
        // URLs are relative to the "/crm" url.
        return [
            { name: 'New Call', url: 'newcall' },
            { name: 'Research', url: 'research' },
            { name: 'Work Queue/Task List', url: 'workqueue' },
            { name: 'Referral', url: 'referral' }
        ];
    }
}
