/* import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar.component';
import { UserProfileBarComponent } from './components/user-profile-bar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [
              AppComponent,
              HeaderBarComponent,
              UserProfileBarComponent
          ],
          imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              NgbModule.forRoot()
          ],
          providers: []
      }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log("fixture: " + fixture);
    const app = fixture.debugElement.componentInstance;
    console.log("app: " + app);
    expect(app).toBeTruthy();
  }));

  it('There should be a user name in the right-hand menu.', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#dropdownBasic1').textContent).toContain('Sandra Servicerep');
  }));
});
*/