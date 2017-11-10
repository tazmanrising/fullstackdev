import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CallerTypeComponent } from './caller-type.component';
import { NewCallService } from '../../../../app/csr-portal/new-call/new-call.service';
import { HttpService } from '../../../core/services/http.service';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
describe('CallerTypeComponent integrated', () => {
    let fixture: ComponentFixture<CallerTypeComponent>,
      component: CallerTypeComponent,
      element: HTMLElement,
      debugEl: DebugElement;
    let httpService = {};
    beforeEach(async(() => {
        let mockNewCallService = {
          getCallerTypes: () => []
        };
        TestBed.configureTestingModule({
          imports: [],
          declarations: [CallerTypeComponent],
          providers: [NewCallService,
              { provide: HttpService, useValue: httpService }]
        }).compileComponents();
    }));
    it('should show 4 buttons', () => {
      fixture = TestBed.createComponent(CallerTypeComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      element = debugEl.nativeElement;

      fixture.detectChanges();
      let buttons = element.querySelectorAll('.btn.btn-default')
      expect(buttons.length).toBe(4);
    });

    it('should highlight one button on select', () => {
      fixture = TestBed.createComponent(CallerTypeComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      element = debugEl.nativeElement;

      fixture.detectChanges();
      component.typeSelect(component.callerTypes[0], {});
      fixture.detectChanges();
      let buttons = element.querySelectorAll('.btn.btn-primary')
      expect(buttons.length).toBe(1);
    });
    it('should highlight clear button and highlight on select', () => {
      fixture = TestBed.createComponent(CallerTypeComponent);
      component = fixture.componentInstance;
      debugEl = fixture.debugElement;
      element = debugEl.nativeElement;

      fixture.detectChanges();
      component.typeSelect(component.callerTypes[0], {});
      fixture.detectChanges();
      component.typeSelect(component.callerTypes[1], {});
      fixture.detectChanges();
      let buttons = element.querySelectorAll('.btn.btn-primary')
      expect(buttons.length).toBe(1);
    });
});