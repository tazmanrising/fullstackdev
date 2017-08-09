import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

//router
//forms

import { HttpModule } from '@angular/http'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { Request } from './events/request'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'
import { CoinsListComponent} from './coins/coins-list.component'
import { CoinService } from './coins/coin.service'
 
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        CoinsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent
    ],
    providers: [
        EventService, 
        CoinService,
        ToastrService,
        Request], // registered as a provider, angulars inject is aware of it
    bootstrap: [EventsAppComponent]

})

export class AppModule {}