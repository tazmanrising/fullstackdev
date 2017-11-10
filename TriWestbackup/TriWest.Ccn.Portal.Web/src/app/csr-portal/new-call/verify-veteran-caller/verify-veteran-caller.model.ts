export class DatePickerModel {
    year: number;
    month: number;
    day: number;

}

export class SearchParameters {
    firstName: string;
    lastName: string;
    ssnLast4: string;
    repFName: string;
    repLName: string;
    dob: DatePickerModel;

}

export class HippaInfo {

}


export class VeteranVerificationInfo {
    id: number;
    memberNumber: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    ssnLast4: string;
    dob: string;
    vamc: string;
    city: string;
    state: string;
    postalCode: string;
    program: string;
    countOfAuths: number;

}
