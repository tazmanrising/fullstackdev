import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'crumbtrail',
    templateUrl: './crumbtrail.component.html'
})

export class CrumbtrailComponent implements OnInit
{
    label: string = "home"
    route: string = "vet"
    entries: CrumbtrailEntry[] = [];

    constructor(newRoute: Router) {
        newRoute.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let path: string[] = event.url.split("/").slice(1);
                let tempEntries: CrumbtrailEntry[] = [];

                path.forEach(function (val: string, idx: number) {
                    tempEntries.push({ label: val, route: '/' + path.slice(0, idx + 1).join('/') })
                });

                this.entries = tempEntries;






            }

        })

    }

    ngOnInit(): void {
        console.log(window.location.href);

    }
}

export class CrumbtrailEntry {
    label: string;
    route: string;

}
