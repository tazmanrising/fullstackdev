import { Component } from '@angular/core'

@Component({
    selector: 'events-app',
    //template: '<h2>Hello Worldddd</h2>'
    // We created a component events-list and we are pulling it into this page
    // We are missing 1 step though 
    // We have to register ALL of our components 
    // app.module.ts  needs to know about it
    template: `
        <nav-bar></nav-bar>
        <events-list></events-list>
        `  
})
export class EventsAppComponent {

}