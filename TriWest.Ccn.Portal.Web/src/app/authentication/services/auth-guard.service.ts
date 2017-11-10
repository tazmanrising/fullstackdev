import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

const loginUrl: string = 'http://localhost:5000/account/login';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate() {
        let isLoggedIn = this.authService.isLoggedIn();
        isLoggedIn.subscribe((loggedIn) => {
            if (!loggedIn) {
                ///TODO: jnazarian temp 
                window.location.href = loginUrl;
            }
        });
        return isLoggedIn;
    }

}