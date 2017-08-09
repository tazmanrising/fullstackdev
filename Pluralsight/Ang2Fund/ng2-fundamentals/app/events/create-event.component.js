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
var router_1 = require("@angular/router");
var CreateEventComponent = (function () {
    function CreateEventComponent(router) {
        this.router = router;
    }
    CreateEventComponent.prototype.cancel = function () {
        // navigate ,  we inject angular router service 
        this.router.navigate(['/events']);
    };
    return CreateEventComponent;
}());
CreateEventComponent = __decorate([
    core_1.Component({
        template: "\n        <h1>New Event</h1>\n        <hr>\n        <div class=\"col-md-6\">\n            <h3>[Create Event Form will go here]</h3>\n            <br/>\n            <br/>\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CreateEventComponent);
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map