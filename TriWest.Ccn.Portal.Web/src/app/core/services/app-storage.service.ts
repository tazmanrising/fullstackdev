import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApplicationStorageService {

    public ID_TOKEN_KEY: string = "id_token";
    public USER_PROFILE_KEY: string = "user_profile";

    public setItem(key: string, value: any): void {
        window.sessionStorage.setItem(key, value)
    }

    public getItem(key: string): any {
        return window.sessionStorage.getItem(key)
    }

    public removeItem(key: string): void {
        window.sessionStorage.removeItem(key);
    }

}