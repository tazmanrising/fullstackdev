import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { VeteranHomeService } from '../veteran-home.service';
import { Banner } from '../veteran-home.model';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css'],
    providers: [NgbCarouselConfig]

})

export class BannerComponent implements OnInit {

    bannerDatas: Banner[] = [];
    bannerSubscription: Subscription;

    constructor(
        private veteranHomeService: VeteranHomeService,
        private ngbCarouselConfig: NgbCarouselConfig
    ) {
        ngbCarouselConfig.interval = 7000;

    }

    ngOnInit() {

        this.bannerSubscription = this.veteranHomeService.getBannerList()
            .subscribe((response: any) => {
                this.bannerDatas = this.veteranHomeService.getBannerDatas(response);

            });

    }

    public ngOnDestroy() {
        this.bannerSubscription.unsubscribe();
    }




}


