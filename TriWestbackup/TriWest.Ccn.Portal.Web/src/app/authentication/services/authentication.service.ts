import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserManager, User } from 'oidc-client';

import { environment } from '../../../environments/environment';
import { UserProfileService } from './user-profile.service';

const settings: any = {
    authority: environment.idServerUrl,
    client_id: 'portal',
    redirect_uri: environment.appRootUrl + 'auth-callback',
    response_type: 'id_token code',
    scope: 'openid profile portalApi',
    post_logout_redirect_uri: environment.appRootUrl + 'auth-callback',
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true
};

const URL_USER_PROFILE: string = environment.idServerUrl + 'account/getuser?id=';

@Injectable()
export class AuthenticationService {
    mgr: UserManager = new UserManager(settings);
    userLoadededEvent: EventEmitter<any> = new EventEmitter<any>();
    currentUser: User;
    loggedIn = false;

    constructor(private http: Http, private profile: UserProfileService) {
        this.mgr.getUser()
            .then((user) => {
                if (user) {
                    this.loggedIn = true;
                    this.currentUser = user;
                    this.userLoadededEvent.emit(user);
                }
                else {
                    this.loggedIn = false;
                }
            })
            .catch((err) => {
                this.loggedIn = false;
            });
    }

    // TODO : implement user signin to veteran page
    public getUserName() {
      return 'Johnny Hero';
    }

    public getUserLoadededEvent() {
        return this.userLoadededEvent;
    }

    public getCurrentUser(id: string) {
        this.http.get(URL_USER_PROFILE + id)
            .subscribe((user) => {
                this.profile.setSessionUser(user["_body"]);
            });
        return this.currentUser;
    }

    public isLoggedIn(): Observable<any> {
        return Observable.fromPromise(this.mgr.getUser()).map<User, boolean>((user) => {
            if (user) return true;
            else return false;
        });
    }

    public signInRedirectCallback(): Observable<any> {
        return Observable.fromPromise(this.mgr.signinRedirectCallback()
            .then((resp) => {
                this.profile.setCurrentToken(resp.id_token);
                this.http.get(URL_USER_PROFILE + resp.profile.sub)
                    .subscribe((user) => {
                        console.group('*** signInRedirectCallback ***');
                        console.info('storing user profile in session');
                        console.log(user["_body"]);
                        this.profile.setSessionUser(user["_body"]);
                        this.userLoadededEvent.emit(user);
                        console.groupEnd();
                    });

                return Promise.resolve(resp);
            }));
    }

    public signInRedirect(): void {
        this.mgr.signinRedirectCallback()
            .then((user) => {
                console.info('user signed in', user);
            })
            .catch((err) => {
                console.error('signinRedirect error, retrying...', err);
                this.mgr.signinRedirect({ data: settings }).then((res) => {
                    console.info('signinRedirect', res);
                });
            });
    }

    public startSignoutMainWindow(): void {
        this.profile.removeCurrentToken();
        this.profile.removeSessionUser();
        this.mgr.getUser().then(user => {
            return this.mgr.signoutRedirect({ id_token_hint: user.id_token }).then(resp => {
                console.log('signed out', resp);
            }).catch(function(err) {
                console.log(err);
            });
        });
    };

    public getUser(): Observable<any> {
        return Observable.fromPromise(
            this.mgr.getUser().then((user) => {
                this.currentUser = user;
                this.userLoadededEvent.emit(user);
            }).catch(function(err) {
                console.log(err);
            }));
    }
}
