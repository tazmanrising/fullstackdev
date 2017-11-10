export class VeteranSearchParameters {
    lastName: string;
    firstName: string;
    memberNumber: string;
    phone: string;
    ssnLast4: string;
    dateOfBirth: DatePickerModel;
    vamc: Array<any>;
    program: Array<any>;
    city: string;
    state: Array<any>;
    postalCode: string;
}

export class VeteranSearchResult {
    Id: number;
    MemberNumber: number;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    SsnLast4: string;
    DateOfBirth: string;
    Vamc: string;
    City: string;
    State: string;
    PostalCode: string;
    Program: string;
    CountOfAuths: number;
}

export class DatePickerModel {
    year: number;
    month: number;
    day: number;

}
