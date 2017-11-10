import { Provider360Info } from '../provider-360/provider-360.model';

export class VeteranProfile {
    id: number;
    memberNumber: string;
    lastName: string;
    firstName: string;    
    ssnLast4: string;
    dateOfBirth: string;
    dateOfDeath: string;
    gender: string;
    emailAddress: string;
    vamc: string;
    program: string;
    additionalEmailAddress: string;
    subscriptionType: string;
    countOfAuths: number;
    countOfProviders: number;
    countOfPrescriptions: number;
    countOfAppointments: number;
    phones: Phone[];
    addresses: Address[];
    hippaAlerts: HippaAlert[];
    veteranOHIList: VeteranProfileOHI[];
    enrollments: VeteranEnrollment[];
    primaryCareProviderHistory: VeteranPrimaryCareProviderItem[];

    constructor() { }
}

export class Phone {
    id: number;
    phoneNumber: string;
    phoneType: string;
}

export class Address {
    id: number;
    street: string;
    city; string;
    state: string;
    postalCode: string;
    addressType: string;
}

export class VeteranProfileOHI {
    constructor(
        public MemberUniqueID: number,
        public MemberBenefitCoordinationUniqueID: number,
        public OrganizationUniqueID: number,
        public OHICarrierName: string,
        public StartDate: string,
        public EndDate: string,
        public OHIPriorityNumber: number,
        public OHIMemberID: string,
        public HeathGroupID: string,
        public HealthPlanID: string,
        public AddressLine1: string,
        public AddressLine2: string,
        public CityName: string,
        public StateCode: string,
        public CountyCode: string,
        public PostOfficeCode: string,
        public PhoneNumber: string,
        public CareClassificationCode: string
    ) { }
}

export class VeteranEnrollment {
    id: number;
    enrollmentType: string;
    programName: string;
    programCareManager: string;
    programCareManagerId: string;
    enrollDate: string;
    endDate: string;

    constructor() { }
}

export class HippaAlert {
    id: number;
    alertType: string;
    beginOn: string;
    endOn: string;
    message: string;   
}

export class AuthData {
    id: number;
    veteranId: number;
    providerId: number;
    vamcId: number;
    veteranLastName: string;
    veteranFirstName: string;
    veteranFullName: string;
    veteranZipCode: string;
    memberNumber: string;
    ssnLast4: string;
    referralNumber: string;
    profile: string;
    program: string;
    provider: string;
    categoryOfCare: string;
    vamc: string;
    createdOn: string;
    reasonCode: string;
}

export class CareRadiusNotes {
    id: number;
    veteranId: number;
    noteCategory: string;
    noteType; string;
    note: string;
    createdOn: string;

    constructor() { }
}

export class ClaimData {
    constructor(
        public id: string,
        public claimNumber: string,
        public veteranLastName: string,
        public veteranFirstName: string,
        public providerName: string,
        public beginDate: string,
        public charges: string,
        public paidAmount: string,
        public paidDate: string,
        public status: string,
        public veteranId: string,
        public veteranNumber: string,
        public providerId: string,
        public taxId: string,
        public ssnLast4: string,
        public npi: string,
        public dateOfBirth: string,
        public city: string,
        public state: string,
        public zip: string
    ) { }
}

export class VeteranPrimaryCareProviderItem {
    public updateDate: string;
    public provider: Provider360Info;

    constructor() { }
}
