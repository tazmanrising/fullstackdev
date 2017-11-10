import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProviderIndividualDetailsComponent } from './provider-individual-details.component';

let component: ProviderIndividualDetailsComponent;
let fixture: ComponentFixture<ProviderIndividualDetailsComponent>;

describe('ProviderIndividualDetails component', () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [ProviderIndividualDetailsComponent],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProviderIndividualDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() =>
    {
        expect(true).toEqual(true);
    }));

    it('should be created', async(() => {
    expect(component).toBeTruthy();
    }));

    it('should contain a provider value', async(() => {
        expect(component.providerInfo).toBeTruthy();
    }));
    
});