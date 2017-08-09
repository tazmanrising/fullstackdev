"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
//router
//forms
var http_1 = require("@angular/http");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var event_service_1 = require("./events/shared/event.service");
var toastr_service_1 = require("./common/toastr.service");
var request_1 = require("./events/request");
var event_details_component_1 = require("./events/event-details/event-details.component");
var routes_1 = require("./routes");
var create_event_component_1 = require("./events/create-event.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            http_1.HttpModule
        ],
        declarations: [
            events_app_component_1.EventsAppComponent,
            events_list_component_1.EventsListComponent,
            event_thumbnail_component_1.EventThumbnailComponent,
            event_details_component_1.EventDetailsComponent,
            navbar_component_1.NavBarComponent,
            create_event_component_1.CreateEventComponent
        ],
        providers: [
            event_service_1.EventService,
            toastr_service_1.ToastrService,
            request_1.Request
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map