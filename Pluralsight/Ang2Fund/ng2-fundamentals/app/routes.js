"use strict";
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var create_event_component_1 = require("./events/create-event.component");
var coins_list_component_1 = require("./coins/coins-list.component");
//import { LoginComponent } from './user/login.component'
// extra intellisense 
exports.appRoutes = [
    { path: 'coins', component: coins_list_component_1.CoinsListComponent },
    { path: 'events/new', component: create_event_component_1.CreateEventComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    //{ path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map