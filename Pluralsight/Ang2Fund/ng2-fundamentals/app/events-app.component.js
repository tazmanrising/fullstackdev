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
var EventsAppComponent = (function () {
    function EventsAppComponent() {
    }
    return EventsAppComponent;
}());
EventsAppComponent = __decorate([
    core_1.Component({
        selector: 'events-app',
        //template: '<h2>Hello Worldddd</h2>'
        // We created a component events-list and we are pulling it into this page
        // We are missing 1 step though 
        // We have to register ALL of our components 
        // app.module.ts  needs to know about it
        template: "\n        <nav-bar></nav-bar>\n        <events-list></events-list>\n        "
    }),
    __metadata("design:paramtypes", [])
], EventsAppComponent);
exports.EventsAppComponent = EventsAppComponent;
//# sourceMappingURL=events-app.component.js.map