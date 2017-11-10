import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { AuthenticationCallbackComponent } from './authentication/components/authentication-callback.component';
import { HomeComponent } from './csr-portal/home/home.component';
import { NewCallComponent } from './csr-portal/new-call/new-call.component'
import { ResearchComponent } from './csr-portal/research/research.component';
import { WorkQueueComponent } from './csr-portal/work-queue/work-queue.component';
import { ReferralIntakeComponent } from './csr-portal/referral/referral-intake.component';
import { Provider360Component } from './csr-portal/provider-360/provider-360.component';
import { Veteran360Component } from './csr-portal/veteran-360/veteran-360.component';
import { Vamc360Component } from './csr-portal/vamc-360/vamc-360.component';
import { AppLandingPageComponent } from './components/app-landing-page/app-landing-page.component'

/* Vet Portal */
import { VeteranHomeSimpleComponent } from './vet-portal/home/veteran-home-simple.component';
import { ProviderDirectoryComponent } from './vet-portal/provider-directory/provider-directory.component';
import { VetReferralsComponent } from './vet-portal/vet-referrals/vet-referrals.component';
import { VetAppointmentsComponent } from './vet-portal/vet-appointments/vet-appointments.component';
import { VetClaimsComponent } from './vet-portal/vet-claims/vet-claims.component';

// Configure router path and its component 
const routes: Routes = [
    { path: '', component: AppLandingPageComponent, pathMatch: 'full' },

    /* CRM Portal Routes */
    { path: 'crm', component: HomeComponent, pathMatch: 'full' },
    { path: 'crm/newcall', component: NewCallComponent, pathMatch: 'full'  }, 
    { path: 'crm/research', component: ResearchComponent, pathMatch: 'full'  }, 
    { path: 'crm/workqueue', component: WorkQueueComponent, pathMatch: 'full' },
    { path: 'crm/referral', component: ReferralIntakeComponent, pathMatch: 'full' },
    { path: 'crm/referral/:id', component: ReferralIntakeComponent, pathMatch: 'full' },
    { path: 'crm/provider-360/:id', component: Provider360Component, pathMatch: 'full'  }, 
    { path: 'crm/veteran-360/:id', component: Veteran360Component, pathMatch: 'full'  }, 
    { path: 'crm/vamc-360/:id', component: Vamc360Component, pathMatch: 'full'  },

    /* Veteran portal routes */
    { path: 'vet', component: VeteranHomeSimpleComponent },
    { path: 'vet/provider-directory', component: ProviderDirectoryComponent },
    { path: 'vet/referrals', component: VetReferralsComponent },
    { path: 'vet/appointments', component: VetAppointmentsComponent },
    { path: 'vet/claims', component: VetClaimsComponent },

    /* Misc/utility routes */
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule {

}

