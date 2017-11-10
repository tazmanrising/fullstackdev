import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from "@angular/http";
import { Vamc360AuthsComponent } from './vamc-360-auths.component';
import { Vamc360AuthsService } from './vamc-360-auths.service';

describe('Vamc 360 Auths Component', () => {
    let component: Vamc360AuthsComponent;
    let fixture: ComponentFixture<Vamc360AuthsComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, FormsModule],
            declarations: [Vamc360AuthsComponent], 
            providers: [Vamc360AuthsService],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(Vamc360AuthsComponent);
        component = fixture.componentInstance;       
        fixture.detectChanges();
    }));

    it('should create Vamc360AuthsComponent', () => {
        expect(component).toBeTruthy();
    });
    
    it('should contain the data table', async(() => {
        de = fixture.debugElement;
        el = de.query(By.css("ngx-datatable")).nativeElement;
        expect(el).toBeTruthy();
    }));         
});
