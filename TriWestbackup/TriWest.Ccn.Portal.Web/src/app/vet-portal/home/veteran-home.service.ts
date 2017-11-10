/// <reference path="veteran-home.model.ts" />
import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { Http, Response, URLSearchParams } from '@angular/http';
import { HttpService } from '../../core/services/http.service';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { NgbTab, Link, Banner, NgbAccordion } from './veteran-home.model';

import { VeteranProfile } from '../../csr-portal/veteran-360/veteran-360.model';

const bannerUrl = environment.apiUrl + 'api/banners';
const veteranUrl = environment.apiUrl + 'api/veterans/'

@Injectable()
export class VeteranHomeService {

    private portalServiceUrl = environment.apiUrl; // URL to web api    
    constructor(private httpService: HttpService) {
    }

    public getBannerList() {
        return this.httpService.getItem<any>(bannerUrl);
    }

    public getBannerDatas(response: any): Banner[] {
        let bannerDatas = [];

        response.forEach((b: Banner) => {
            let bannerData = new Banner(
                b.id,
                b.source,
                b.alternate,
                b.header,
                b.message
            );
            bannerDatas.push(bannerData);
        });
        return bannerDatas;
    }

    public getVeteranDetails(veteranId: string) {
        return this.httpService.getItemById<VeteranProfile>(veteranUrl, veteranId);
    } 

    public getTabs() {
        return [
            new NgbTab('GENERAL INFORMATION',
                [
                    new Link('What is the Community Care Network?', '#'),
                    new Link('Frequently Asked Questions in Community Care', '#'),
                    new Link('What is Care Coordination, Case Management and Disease Management?', '#'),
                    new Link('Seeking Care with a Community Provider', '#'),
                    new Link('What if I have Other Insurance?', '#'),
                    new Link('Having Trouble? See our Tools & Resources', '#'),

                ]
            ),
            new NgbTab('VETERAN360° PORTAL SUPPORT',
                [
                    new Link('VETERAN360°', '#'),
                    new Link('VETERAN360° Guide', '#'),
                    new Link('VETERAN360° Ethics', '#'),
                ]
            ),
            new NgbTab('EDUCATIONAL RESOURCES',
                [
                    new Link('Get Educated', '#'),
                    new Link('Education Training Guide', '#'),
                    new Link('Education Ethics', '#'),
                ]
            ),
            new NgbTab('FORMS',
                [
                    new Link('Appeals and Grievance Forms', '#'),
                    new Link('Health Care Quality Concern Form', '#'),
                    new Link('HIPAA Records Request Form - Confidential Communications Request', '#'),
                    new Link('HIPAA Records Request Form - HIPAA Disclosure Accounting Request', '#'),
                    new Link('HIPAA Records Request Form - HIPAA Privacy Complaint', '#'),
                    new Link('HIPAA Records Request Form - HIPAA Restriction Request', '#'),
                ]
            ),
           
            
        ];
    }

    
    private handleError(error: Response) {
        console.group('handleError');
        console.error(error);
        console.groupEnd();
        return Observable.throw(error.json().error || 'Server error');
    }
}
