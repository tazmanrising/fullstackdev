export class ProviderSearchParameters {
    npi: string;
    tin: string;
    placeOfService: string;
    name: string;
    group: string;
    specialty: Array<any>;
    phone: string;
    address: string;
    city: string;
    state: Array<any>;
    zip: string;
}

export class ProviderSearchResult {
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
