import { AppRoutingModule  } from "../../../app.routes.module";
import { UserMenuBarService } from "./user-menu-bar.service";
import { UserMenuBarComponent } from "./user-menu-bar.component";
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { routingComponentsMenubar } from "../../../app.routes.module";

import { NewCallComponent } from '../../new-call/new-call.component';
import { ResearchComponent } from '../../research/research.component';
import { WorkQueueComponent } from '../../work-queue/work-queue.component';

import { NewCallModule } from '../../new-call/new-call.module';

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from "@angular/common";


describe('UserMenuBarComponent integrated', () => {
    let fixture: ComponentFixture<UserMenuBarComponent>,
        component: UserMenuBarComponent,
        element: HTMLElement,
        debugEl: DebugElement,
        userMenuBarService: UserMenuBarService,
        buttons: any[];

    beforeEach(async(() => {
        userMenuBarService = new UserMenuBarService();
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, NewCallModule],
            declarations: [UserMenuBarComponent, routingComponentsMenubar, WorkQueueComponent,
                ResearchComponent, NewCallComponent],
            providers: [
             UserMenuBarService
               // { provides: LocationStrategy, useValue: PathLocationStrategy }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserMenuBarComponent);
        component = fixture.componentInstance;
        buttons = userMenuBarService.getDefaultMenu();
        element = fixture.nativeElement;
    });

    it('User Menu Display', () => {
        component.defaultMenu = userMenuBarService.getDefaultMenu();
    });

    it('has fixture', () => {
        expect(fixture).toBeDefined();
    });

    it('has component', () => {
        expect(component).toBeDefined();
    });

    it('should load 3 buttons', () => {
        expect(buttons.length).toBe(3);
    });
    it('should display 3 buttons', () => {
        fixture.detectChanges();
        let menuButtons = element.querySelectorAll('.menu-items')
        expect(menuButtons.length).toBe(3);
    });
   
});
