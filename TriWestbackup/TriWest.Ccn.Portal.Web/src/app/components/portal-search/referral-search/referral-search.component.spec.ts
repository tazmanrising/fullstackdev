import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ReferralSearchComponent } from './referral-search.component';

let component: ReferralSearchComponent;
let fixture: ComponentFixture<ReferralSearchComponent>;

describe('Referral Search component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReferralSearchComponent],
            imports: [BrowserModule],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ReferralSearchComponent);
        component = fixture.componentInstance;
    }));

    /*
    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));

    */
});
