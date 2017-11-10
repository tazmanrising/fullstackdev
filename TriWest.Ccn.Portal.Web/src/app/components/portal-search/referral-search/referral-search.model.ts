export class ReferralSearchParameters {
    veteranLastName: string;
    veteranFirstName: string;
    veteranZipCode: string;
    memberNumber: string;
    ssnLast4: string;
    referralNumber: string;
    provider: string;
    createdOnStart: string; // { month: null, day: null, year: null };
    createdOnEnd: string; // { month: null, day: null, year: null };
    vamcs: any[];
    veteranPrograms: any[];
    veteranProfiles: any[];
    reasonCodes: any[];
    categoryOfCares: any[];

    constructor() {
        this.vamcs            = [];
        this.veteranPrograms  = [];
        this.veteranProfiles  = [];
        this.reasonCodes      = [];
        this.categoryOfCares  = [];
        this.veteranLastName  = '';
        this.veteranFirstName = '';
        this.veteranZipCode   = '';
        this.memberNumber     = '';
        this.ssnLast4         = '';
        this.referralNumber   = '';
        this.createdOnStart   = '';//{ month: null, day: null, year: null };
        this.createdOnEnd     = '';//{ month: null, day: null, year: null };
        this.provider         = '';
    }
}

