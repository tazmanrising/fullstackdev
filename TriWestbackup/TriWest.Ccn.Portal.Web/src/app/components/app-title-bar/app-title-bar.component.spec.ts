import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppTitleBarComponent } from './app-title-bar.component'

describe('AppTitleBarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppTitleBarComponent
            ],
            imports: [BrowserModule,
                NgbModule.forRoot()]
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(AppTitleBarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('There should be a portal name on the right-hand side.', async(() => {
        const fixture = TestBed.createComponent(AppTitleBarComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        console.log(compiled.querySelector('.portal-title-portal'));
        expect(compiled.querySelector('.portal-title-portal').textContent).toContain('CSR Portal');
    }));

});
