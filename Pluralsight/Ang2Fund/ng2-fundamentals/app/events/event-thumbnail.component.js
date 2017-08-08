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
// @Component({
//     selector: 'event-thumbnail',
//     template: `
//        <div class="well hoverwell thumbnail">
//         <h2>{{event.name}}</h2>
//         <div>Date: {{event.date}}</div>
//         <div>Time: {{event.time}}</div>
//         <div>Price: \${{event.price}}</div>
//         <div>
//             <span>Location: {{event.location.address}}</span>
//             <span>&nbsp;</span>
//             <span>{{event.location.city}}, {{event.location.country}}</span>
//         </div>
//         <button class="btn btn-primary" (click)="handleClickMe()
//         ">Click me!</button>
//     </div>
//     `
// })
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
        // need to create a public property in order to pass it
        // typescript  property called event,   and "any" as we don't care what data type
        //[event] in list component matches 
        // above is to pass data Into 
        // Out is to receive 
        this.eventClick = new core_1.EventEmitter();
    }
    EventThumbnailComponent.prototype.handleClickMe = function () {
        //console.log('clicked');
        // we are in the child component  ( thumbnail is the child,  parent is the events-list)
        //this.eventClick.emit('foo')
        this.eventClick.emit(this.event.name);
    };
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
    };
    return EventThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventThumbnailComponent.prototype, "eventClick", void 0);
EventThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'event-thumbnail',
        template: "\n    <div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n      <h2>{{event?.name}}</h2>\n      <div>Date: {{event?.date}}</div>\n      <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">\n        Time: {{event?.time}}\n        <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n        <span *ngSwitchDefault>(Normal Start)</span>\n      </div>\n      <div>Price: ${{event?.price}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">\n        Online URL: {{event?.onlineUrl}}\n      </div>\n    </div>\n  ",
        styles: ["\n    .thumbnail { min-height: 210px; }\n    .pad-left { margin-left: 10px; }\n    .well div { color: #bbb; }\n  "]
    }),
    __metadata("design:paramtypes", [])
], EventThumbnailComponent);
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map