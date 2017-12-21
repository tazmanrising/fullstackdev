import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafComponent } from './saf.component';

describe('SafComponent', () => {
  let component: SafComponent;
  let fixture: ComponentFixture<SafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
