import { Component, Input, Output, EventEmitter } from '@angular/core'

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

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})


export class EventThumbnailComponent {
    // need to create a public property in order to pass it
    // typescript  property called event,   and "any" as we don't care what data type

    // we then also added at top of page import of  "Input"   to have angular to expext a value

    // this is not javascript event , but like a conference , meeting ...
    //event: any 
    // Input decorator tells angular that this 
    @Input() event: any
    //[event] in list component matches 

    // above is to pass data Into 

    // Out is to receive 

    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        //console.log('clicked');
        // we are in the child component  ( thumbnail is the child,  parent is the events-list)
        //this.eventClick.emit('foo')
        this.eventClick.emit(this.event.name)
    }

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' }
        return {}
    }
}