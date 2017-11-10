import { Component, OnInit, ViewChild, Input, Output, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnDefs } from './portal-search-config';
import { VeteranSearchComponent } from './veteran-search/veteran-search.component';
import { ProviderSearchComponent } from './provider-search/provider-search.component';
import { ReferralSearchComponent } from './referral-search/referral-search.component';
import { ClaimsSearchComponent } from './claims-search/claims-search.component';

@Component({
    selector: 'portal-search',
    templateUrl: './portal-search.component.html'
})

/** Portal Search component*/
export class PortalSearchComponent implements OnInit {
    @Input() defaultsearch: string;

    public isCollapsed: boolean = false;
    public isSearching: boolean = false;
    public canSearch: boolean = false;
    public searchTypeName: string; // = 'provider'
    public columns: Array<any> = null;
    public rows: Array<any> = null;
    public searchComponent: any;
    public maxRows: number = 5;
    public selected: any[] = [];

    /* Bind child-component references here. */
    @ViewChild(VeteranSearchComponent) public veteranChild: VeteranSearchComponent;
    @ViewChild(ProviderSearchComponent) public providerChild: ProviderSearchComponent;
    @ViewChild(ReferralSearchComponent) public referralChild: ReferralSearchComponent;
    @ViewChild(ClaimsSearchComponent) public claimsChild: ClaimsSearchComponent;
    @ViewChild('dateCellTmpl') public dateTemplate: TemplateRef<any>;

    constructor(private cd: ChangeDetectorRef, private router: Router) {

    }

    /** Called by Angular after Three-Sixty Search component initialized */
    ngOnInit(): void {
        this.canSearch = false;
        this.searchTypeName = this.defaultsearch;
        this.columns = ColumnDefs[this.searchTypeName];
        this.cd.markForCheck();
    }

    dblClick(e) {

        switch (this.searchTypeName) {
            case 'veteran':
                this.isCollapsed = true;
                this.router.navigate(['crm/veteran-360', this.selected[0].id]);
                break;
            case 'provider':
                this.isCollapsed = true;
                this.router.navigate(['crm/provider-360', this.selected[0].id]);
                break;
            case 'vamc':
                this.isCollapsed = true;
                this.router.navigate(['crm/vamc-360', this.selected[0].id]);
                break;
            case 'referrals':
                this.isCollapsed = true;
                this.router.navigate(['crm/referrals-360', this.selected[0].id]);
                break;
            case 'claims':
                // this.router.navigate(['crm/claims-360', this.selected[0].id]);
                alert('This will go to the view claim page');
                break;

        }

    }

    selectNewNumRows() {
        this.rows = [];
        let temptoss = this.rows;
        this.cd.markForCheck();
        this.veteranChild.doSearch();

    }

    updateData(newRows: Array<any>) {
        this.isSearching = false;
        this.rows = [];
        this.rows = newRows;
    }

    validated(searchState: boolean) {
        // this.veteranChild.checkValid();
        this.canSearch = searchState;

    }

    doClear() {
        this.rows = [];
        this.cd.markForCheck();
        this.canSearch = false;
        switch (this.searchTypeName) {
            case 'veteran':
                this.veteranChild.clearFields();
                break;
            case 'provider':
                this.providerChild.clearFields();
                break;
            case 'referrals':
                this.referralChild.clearFields();
                break;
            case 'claims':
                this.claimsChild.clearFields();
                break;
        }
    }

    doSearch() {
        this.isSearching = true;
        switch (this.searchTypeName) {
            case 'veteran':
                this.rows = [];
                this.veteranChild.doSearch();
                this.cd.markForCheck();
                break;
            case 'provider':
                this.rows = [];
                this.providerChild.doSearch();
                this.cd.markForCheck();
                break;
            case 'vamc':
                break;
            case 'referrals':
                this.rows = [];
                this.referralChild.doSearch();
                this.cd.markForCheck();
                break;
            case 'claims':
                this.rows = [];
                this.claimsChild.doSearch();
                this.cd.markForCheck();
                break;
            default:
                break;
        }
    }

    selectNewSearchType() {
        console.log(this.searchTypeName);
        switch (this.searchTypeName) {
            case 'veteran':
                this.rows = [];
                this.columns = ColumnDefs['veteran'];
                this.searchComponent = this.veteranChild;
                this.searchComponent.clearFields();
                this.cd.markForCheck();
                break;
            case 'provider':
                this.rows = [];
                this.columns = ColumnDefs['provider'];
                this.searchComponent = this.providerChild;
                this.searchComponent.clearFields();
                this.cd.markForCheck();
                break;
            case 'vamc':
                break;
            case 'referrals':
                this.rows = [];
                this.columns = ColumnDefs['referrals'];
                this.searchComponent = this.referralChild;
                this.searchComponent.clearFields();
                this.cd.markForCheck();
                break;
            case 'claims':
                this.rows = [];
                this.columns = ColumnDefs['claims'];
                this.searchComponent = this.claimsChild;
                this.searchComponent.clearFields();
                this.cd.markForCheck();
                //  this.doSearch();
                break;
            default:
                break;
        }

    }
}
