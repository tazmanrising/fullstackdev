//import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { Component, DebugElement } from '@angular/core';
//import { By } from '@angular/platform-browser';

//import { AppRoutingModule, routingComponentsMenubar } from '../../../app.routes.module';

//import { UserMenuBarComponent } from './user-menu-bar.component';
//import { UserMenuBarService } from './user-menu-bar.service';


//describe('UserMenuBarComponent Unit testing ', () => {
//    let userMenuBarComponent: UserMenuBarComponent;
//    let userMenuBarService= new UserMenuBarService();
//    let defaultMenu: any[];

//  beforeEach(() => {
//      userMenuBarComponent = new UserMenuBarComponent(userMenuBarService);
//      defaultMenu = userMenuBarService.getDefaultMenu();
//  });

//  it('userMenubar should be created', () => {
//    expect(userMenuBarComponent).toBeTruthy();
//  });

//  it('should get the default menu object of index 0, with name and url ', () => {
//      expect(defaultMenu[0]).toEqual({ name: 'New Call', url: '/newcall' }); 
//  });

//  it('Check for 3 buttons', () => {
//      expect(defaultMenu.length).toBe(3);
//  });

//  it('should activate button as active on click', () => {
//      let selectItem = defaultMenu[0];
//      userMenuBarComponent.activate(selectItem);
//      let activeType = userMenuBarComponent.isActive;
//      expect(activeType).toBe(selectItem);
//  });

//});
