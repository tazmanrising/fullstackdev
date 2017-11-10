import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Veteran360Component } from '../veteran-360.component';
import { CareRadiusNotesModalComponent } from '../cr-notes-modal/cr-notes-modal.component';
import { CareRadiusNotesComponent } from '../cr-notes/cr-notes.component';

//describe('Care Radius Notes Modal Component', () => {
//    let component: CareRadiusNotesComponent;
//    let fixture: ComponentFixture<CareRadiusNotesComponent>;
//    let modalService: NgbModal;
//    let de: DebugElement;

//    //beforeEach((() => {
//    //    TestBed.configureTestingModule({
//    //        imports: [FormsModule, NgbModule.forRoot()],
//    //        declarations: [Veteran360Component, CareRadiusNotesComponent, CareRadiusNotesModalComponent],
//    //        providers: [NgbModal, NgbActiveModal,
//    //            { provide: ComponentFixtureAutoDetect, useValue: true }],
//    //        schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//    //    });

//    //    fixture = TestBed.createComponent(CareRadiusNotesComponent);
//    //    component = fixture.componentInstance;
       
//    //}));

//    //it('should be created', async(() => {
//    //    expect(component).toBeTruthy();
//    //}));
//});
