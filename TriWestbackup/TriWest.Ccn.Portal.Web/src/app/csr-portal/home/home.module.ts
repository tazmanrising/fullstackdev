import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { HttpService } from '../../core/services/http.service'
/* CSR Home View-Wide Imports */
import { AnnouncementsComponent } from '../home/announcements/announcements.component';
import { AnnouncementService } from '../home/announcements/announcement.service';
import { TrainingComponent } from '../home/training/training.component';
import { HomeComponent } from './home.component';
import { UserMenuBarComponent } from './user-menu-bar/user-menu-bar.component';
import { UserMenuBarService } from './user-menu-bar/user-menu-bar.service';

import { AppRoutingModule } from '../../app.routes.module';
import { RouterModule } from '@angular/router';

/* Global Imports */
import { FormatDatePipe } from '../../core/pipes/format-date.pipe';

@NgModule({
    declarations: [
        AnnouncementsComponent,
        TrainingComponent,
        HomeComponent,
        FormatDatePipe,
        UserMenuBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule,
        NgxDatatableModule,
        AppRoutingModule
    ],
    providers: [HttpService, AnnouncementService, UserMenuBarService],
    bootstrap: [HomeComponent]
})

export class HomeModule {  }
