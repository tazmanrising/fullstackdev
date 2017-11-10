import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, HttpModule } from "@angular/http";
import { TrainingComponent } from './training.component';
import { TrainingService } from './training.service';
import { FormatDatePipe } from '../../../core/pipes/format-date.pipe';

describe('TrainingComponent', () => {
    let component: TrainingComponent;
    let fixture: ComponentFixture<TrainingComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [TrainingComponent, FormatDatePipe], // declare the test component
            providers: [TrainingService, FormatDatePipe]
        });

        fixture = TestBed.createComponent(TrainingComponent);

        component = fixture.componentInstance;      
        de = fixture.debugElement.query(By.css('h4'));
        el = de.nativeElement;
        
        fixture.detectChanges();
    });

    it('should create training component', () => {
        expect(component).toBeTruthy();
    });

    it('should display heading `Training message`', async(() => {
        let title = el.innerHTML;
        expect(title).toContain('Training Message');
    }));

});
