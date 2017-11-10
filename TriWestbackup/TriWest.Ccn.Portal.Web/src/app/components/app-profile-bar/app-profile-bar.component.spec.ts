import { TestBed, fakeAsync, tick, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule } from '@angular/http';

import { AuthModule } from '../../authentication/auth.module';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { UserProfileService } from '../../authentication/services/user-profile.service';
import { VetProfileBarComponent } from './vet-profile-bar.component';

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
};

describe('VetProfileBarComponent', () => {
    let component: VetProfileBarComponent;
    let fixture: ComponentFixture<VetProfileBarComponent>;
    let AuthService = {
        getUserLoadededEvent: () => { return { subscribe: (e: any) => { } }; },
        signInRedirect: () => { },
        startSignoutMainWindow: () => { },
        getUserName: () => { return 'username'; }
    };
    let UserService = {
        getCurrentUserUsername: () => { return 'username'; }
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VetProfileBarComponent],
            imports: [
            ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: AuthenticationService, useValue: AuthService },
                { provide: UserProfileService, useValue: UserService }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(VetProfileBarComponent);
            component = fixture.componentInstance;
        })
    }));

    it('should create the csr component', fakeAsync(() => {
        const fixture = TestBed.createComponent(VetProfileBarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
