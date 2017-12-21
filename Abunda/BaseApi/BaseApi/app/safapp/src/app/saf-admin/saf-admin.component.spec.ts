import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafAdminComponent } from './saf-admin.component';

describe('SafAdminComponent', () => {
  let component: SafAdminComponent;
  let fixture: ComponentFixture<SafAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
