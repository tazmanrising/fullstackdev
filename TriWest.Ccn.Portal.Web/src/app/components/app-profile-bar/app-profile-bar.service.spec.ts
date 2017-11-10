/* import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileBarComponent } from './user-profile-bar.component'

describe('HeaderBarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserProfileBarComponent
            ],
            imports: [BrowserModule,
                NgbModule.forRoot()]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(UserProfileBarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('There should be a portal name on the right-hand side.', async(() => {
        const fixture = TestBed.createComponent(UserProfileBarComponent);
        var numMenuAnchors;

        fixture.detectChanges();
        let menuButtons = fixture.debugElement.nativeElement.querySelectorAll('div.dropdown a');

        console.log(menuButtons.length);
    }));

});
*/