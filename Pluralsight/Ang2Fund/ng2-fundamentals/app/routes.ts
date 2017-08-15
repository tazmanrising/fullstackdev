import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { Routes } from '@angular/router'
import { CreateEventComponent } from './events/create-event.component'
import { CoinsListComponent } from './coins/coins-list.component'
// extra intellisense 


export const appRoutes:Routes = [
    { path: 'coins', component: CoinsListComponent },
    { path: 'events/new', component: CreateEventComponent },  // process this first , since we have events/:id
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
    //{ path: '', redirectTo: '/events', pathMatch: 'full'}
    //{ path: }
]