import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkQueueComponent } from './work-queue.component';

describe('WorkQueueComponent', () => {
  let component: WorkQueueComponent;
  let fixture: ComponentFixture<WorkQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
