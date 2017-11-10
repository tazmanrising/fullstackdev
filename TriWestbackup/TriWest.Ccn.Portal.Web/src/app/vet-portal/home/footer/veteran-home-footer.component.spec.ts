import { TestBed, getTestBed, async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { NgbModule, NgbCarouselConfig, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { VeteranHomeFooterComponent } from './veteran-home-footer.component';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { inject } from "@angular/core/testing";
import { Banner } from '../veteran-home.model';

import { Subject } from "rxjs/Subject";


describe('Veteran Home Footer Component', () => {


  let component: VeteranHomeFooterComponent;
  let fixture: ComponentFixture<VeteranHomeFooterComponent>;
  let debugEl: DebugElement;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        NgbModule

      ],
      declarations: [
        VeteranHomeFooterComponent

      ],
      //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

      providers: [
        NgbTabsetConfig,
        NgbCarouselConfig,
        RouterTestingModule
                        
      ],



    });


   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranHomeFooterComponent);
    component = fixture.componentInstance;

  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();

  });


  it('veteran home footer should have partial year', () => {
    fixture.detectChanges();
    expect(component.year).toContain(20);
  });

  

});
