export class Provider360Info {
    addressBilling: string;
    addressOther: string;
    addressPrimary: string;
    cityBilling: string;
    cityOther: string;
    cityPrimary: string;
    emailBilling: string;
    emailContracting: string;
    emailOfficeManager: string;
    emailPrimary: string;
    faxBilling: string;
    faxPrimary: string;
    groupAcceptingPatients: string;
    groupContractDcn: string;
    groupContractEndOn: string;
    groupContractStartOn: string;
    groupContractStatus: string;
    groupName: string;
    groupNpi: string;
    groupSpecialty: string;
    groupTaxId: string;
    id: string;
    medDocCollectionNo: string;
    npi: string;
    phoneBilling: string;
    phonePrimary: string;
    postalCodeBilling: string;
    postalCodeOther: string;
    postalCodePrimary: string;
    practitionerAcceptingPatients: string;
    practitionerContractDcn: string;
    practitionerContractEndOn: string;
    practitionerContractStartOn: string;
    practitionerContractStatus: string;
    practitionerGender: string;
    practitionerNpi: string;
    practitionerSpecialty: string;
    providerName: string;
    stateBilling: string;
    stateOther: string;
    statePrimary: string;
    taxId: string;
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

export class ClaimData {
    constructor(
        public id: string,
        public veteranName: string,
        public veteranLastName: string,
        public veteranFirstName: string,
        public beginDate: string,
        public charges: string,
        public paidAmount: string,
        public paidDate: string,
        public status: string,
        public veteranId: string,
        public providerId: string
    ) { }
}


export class MedicalClaimData {
    constructor(
        public id: string,
        public claimNumber: string,
        public patientLastName: string,
        public patientFirstName: string,
        public patientName: string,
        public serviceDate: string,
        public paidAmount: string,
        public paidDate: string,
        public status: string,
    ) { }
}
