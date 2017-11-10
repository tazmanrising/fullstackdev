import { Renderer2, ElementRef, QueryList, Component, OnInit, OnDestroy, NO_ERRORS_SCHEMA, SchemaMetadata, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { ReferralIntake } from './referral-intake.model';

import { HttpService } from '../../core/services/http.service';
import { ReferralIntakeService } from './referral-intake.service';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs/Subscription';



@Component({
  //selector: 'app-work-queue',
  templateUrl: './referral-intake.component.html',
  selector: 'app-root',
   // template: ` 
   //    <ul *ngIf="courses$ | async as courses else noData"> 
   //        <li *ngFor="let course of courses"> 
   //            {{course.description}} 
   //        </li>  
   //    </ul> 
   //    <ng-template #noData>No Data Available</ng-template> 
   //`
}) 


//})
export class ReferralIntakeComponent implements OnInit, OnDestroy {
  referral: ReferralIntake = new ReferralIntake();
  errorMessage: string;
  Id: number = 1;
  @ViewChild('f') form: any;


  appointers: any[] = [
    { id: 1, Name: 'VAMC', type: 'yesno' },
    { id: 2, Name: 'TriWest', type: 'yesno' }
  ];
  appointed: any = this.appointers[0]; // first will be selected by default by browser



  referrals: any;

  constructor(private referralIntakeService: ReferralIntakeService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private dataService: ReferralIntakeService,
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }



  setNewUser(id: any): void {
    console.log(id);
    
    this.appointed = this.appointers.filter(value => value.id === parseInt(id));
    console.log(this.appointed);
    

    var appointedResults = "<br>";

    if (id === "1") {
      appointedResults += "<input type='radio' name='vamc' value='yes' id='vamc'> Yes – if selected, DTR sets to Care in Process – Care ongoing<br><input type='radio' name='vamc' value='no' id='vamc'> No- if selected DTR sets to Completed- Appointed by VA";

    } else if (id === "2") {
      appointedResults += "<input type='radio' name='triwest' value='yes' id='triwest'> Yes - Generate task for Case Management/Disease Management <br><input type='radio' name='triwest' value='no' id='triwest'> No- Continue with Referral Entry";
      
    }


    document.getElementById("appointResult").innerHTML = appointedResults;

  }



  insertDetails() {

    console.log('call out')

    this.dataService.insertReferrals(this.referral).subscribe(() => {
      console.log('this.referral', this.referral);
    })


  }

  ngOnInit() {

    //let params = new URLSearchParams();
    let params = this.getSearchParams();
    console.log(params);
    this.referralIntakeService.getReferrals(params)
      .subscribe(
      value => this.referrals = value,
      error => this.errorMessage = <any>error);
    //this.isSearch = true;



    





    //let params = this.getSearchParams();
    //console.log(params);
    //this.notificationSubscription = this.notificationService.getNotificationList(params)
    //  .subscribe((response: any) => {
    //    this.notificationDatas = this.notificationService.getNotificationData(response);
    //    console.log('notif', this.notificationDatas);
    //    this.showData = true;
    //  });

    // works  - new httpclient get  call
    //this.productsObservable = this.dataService.get_products();

    ////////#############///////////
    //this.route.params.subscribe((params: Params) => {
    //  this.Id = params['id'];
    //  this.referralIntakeService.getVeteranDetailsById(this.Id)
    //    .subscribe(
    //    value => {
    //      this.referral = value;
    //      //this.veteranFullName = value.firstName + ' ' + value.lastName;
    //    },
    //    error => this.errorMessage = <any>error
    //    );
    //}); 
  }

  getSearchParams() {
    console.log('getSearchParams');
    let params = new URLSearchParams();
    params.append('Id', "1");
    //params.append('page', '1');
    return params
  }


  public ngOnDestroy() {
    //this.notificationSubscription.unsubscribe();
  }
}
