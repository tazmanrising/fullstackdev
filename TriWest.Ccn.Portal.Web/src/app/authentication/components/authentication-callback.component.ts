import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserManager, User } from 'oidc-client';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'authentication-callback',
    template: '<div><i class="fa fa-spin fa-cog" aria-hidden="true"></i></div>'
})
export class AuthenticationCallbackComponent implements OnInit {
    currentUser: User;
    loggedIn: boolean;

    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private activateRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.authService.signInRedirectCallback()
            .subscribe(
            (resp) => {
                var token = resp.id_token;
                this.authService.loggedIn = true;
                this.router.navigate(['/']);
            },
            (error) => {
                console.error(error);
                this.router.navigate(['/']);
            }
        );
    }


}