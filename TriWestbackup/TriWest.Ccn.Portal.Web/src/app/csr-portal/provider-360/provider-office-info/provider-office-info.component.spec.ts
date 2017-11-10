import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProviderOfficeInfoComponent } from './provider-office-info.component';

let component: ProviderOfficeInfoComponent;
let fixture: ComponentFixture<ProviderOfficeInfoComponent>;

describe('Provider-360 Office Info Details Component', () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [ProviderOfficeInfoComponent],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProviderOfficeInfoComponent);
        component = fixture.componentInstance;
    }));

    it('should be created', async(() => {
    expect(component).toBeTruthy();
    }));

    it('should contain a provider value', async(() => {
        expect(component.providerInfo).toBeTruthy();
    }));
    
});