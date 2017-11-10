import { Injectable } from '@angular/core';

import { ApplicationStorageService } from '../../core/services/app-storage.service';

@Injectable()
export class UserProfileService {

    user: any;

    constructor(private storage: ApplicationStorageService) {
        var storage_value = this.storage.getItem(this.storage.USER_PROFILE_KEY);
        if (storage_value)
            this.user = JSON.parse(storage_value);
    }

    public setSessionUser(userJson: string) {
        this.storage.setItem(this.storage.USER_PROFILE_KEY, userJson);
    }

    public removeSessionUser(): void {
        this.storage.removeItem(this.storage.USER_PROFILE_KEY);
    }

    public setCurrentToken(token: string): void {
        this.storage.setItem(this.storage.ID_TOKEN_KEY, token);
    }

    public getCurrentToken(): string {
        return this.storage.getItem(this.storage.ID_TOKEN_KEY);
    }

    public removeCurrentToken(): void {
        this.storage.removeItem(this.storage.ID_TOKEN_KEY);
    }

    public getCurrentUserClaims(): any[] {
        if (this.user)
            if (this.user.claims) {
                console.info('getCurrentUserClaims', this.user.claims)
                return this.user.claims;
            }
            else return [];
        else {
            if (this.storage.getItem(this.storage.USER_PROFILE_KEY)) {
                this.user = JSON.parse(this.storage.getItem(this.storage.USER_PROFILE_KEY));
                return this.user.claims;
            } else {
                return [];
            }
        }
    }

    public getCurrentUserUsername(): string {
        if (this.user) {
            if (this.user.username) {
                var name = this.user.claims[0].value;
                console.info('getCurrentUserUsername', name)
                return name;
            }
            else return '';
        }
        else {
            if (this.storage.getItem(this.storage.USER_PROFILE_KEY)) {
                this.user = JSON.parse(this.storage.getItem(this.storage.USER_PROFILE_KEY));
                var name = this.user.claims[0].value;
                return name;
            } else {
                return '';
            }
        }
    }
}