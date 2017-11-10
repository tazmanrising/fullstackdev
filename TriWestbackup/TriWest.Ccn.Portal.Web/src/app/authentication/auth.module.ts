import { NgModule } from '@angular/core';

import { UserProfileService } from './services/user-profile.service';
import { ApplicationStorageService } from '../core/services/app-storage.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationCallbackComponent } from './components/authentication-callback.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
    declarations: [
        AuthenticationCallbackComponent
    ],
    providers: [
        UserProfileService,
        ApplicationStorageService,
        AuthenticationService,
        AuthGuardService

    ]
})
export class AuthModule {}
