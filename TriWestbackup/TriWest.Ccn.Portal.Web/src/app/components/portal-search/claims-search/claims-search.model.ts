export class ClaimsSearchParameters {
    claimsNumber: string;
    veteranFirstName: string;
    veteranLastName: string;
    veteranNumber: string;
    providerTaxId: string;
    npi: string;
    providerName: string;
    ssnLast4: string;
    dateOfBirth: DatePickerModel;
    city: string;
    state: Array<any>;
    postalCode: string;
}

export class ClaimsSearchResult {
    ClaimsNumber: string;
    VeteranFirstName: string;
    VeteranLastName: string;
    VeteranNumber: string;
    SsnLast4: string;
    ProviderTaxId: number;
    DateOfBirth: string;
    ProviderName: string;
    City: string;
    State: string;
    PostalCode: string;
    Npi: string;
    paid: string;
    CountOfAuths: number;
}

export class DatePickerModel {
    year: number;
    month: number;
    day: number;

}

export class ClaimData {
    constructor(
        public id: string,
        public claimNumber: string,
        public veteranLastName: string,
        public veteranFirstName: string,
        public providerName: string,
        public beginDate: string,
        public beginDateFormated: Date,
        public charges: string,
        public paidAmount: string,
        public paidDate: string,
        public paidDateFormated: Date,
        public status: string,
        public veteranId: string,
        public veteranNumber: string,
        public providerId: string,
        public taxId: string,
        public ssnLast4: string,
        public npi: string,
        public dateOfBirth: string,
        public dateOfBirthFormated: Date,
        public city: string,
        public state: string,
        public zip: string
    ) { }
}
