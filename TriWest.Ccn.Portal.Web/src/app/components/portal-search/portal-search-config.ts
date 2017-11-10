
import { DatePipe, CurrencyPipe } from '@angular/common';

class DateOnlyPipe extends DatePipe {
    public transform(value): any {
        return super.transform(value, 'MM/dd/y')
    }
}

class CurrencyTransformer extends CurrencyPipe {
    public transform(value): any {
        //  let dollars = '0';
        if (value == null) value = "0";
        return '$ ' + super.transform(value, 'USD', false).replace('USD', '');
     //   }
      //  return dollars;
    }
}


//    private getDollars(amount: string) {
//    let dollars = '--';
//    if (amount !== null) {
//        dollars = '$ ' + this.currencyPipe.transform(amount, 'USD', false).replace('USD', '');
//    }
//    return dollars;
//}

export const ColumnDefs = {
    'veteran': [
        { name: 'Last Name', prop: 'lastName' },
        { name: 'First Name', prop: 'firstName' },
        { name: 'Veteran #', prop: 'memberNumber' },
        { name: 'Phone', prop: 'phones.phoneNumber' },
        { name: 'SSN (Last 4)', prop: 'ssnLast4' },
        { name: 'Date of Birth ', prop: 'dateOfBirth' },
        { name: 'VAMC', prop: 'vamc' },
        { name: 'Program', prop: 'program' },
        { name: 'City', prop: 'addresses.city' },
        { name: 'State', prop: 'addresses.state' },
        { name: 'Zip', prop: 'addresses.postalCode' }
    ],
    'provider': [
        { name: 'NPI Number', prop: 'npi' },
        { name: 'Provider Tax ID Number', prop: 'taxId' },
        { name: 'Place of Service', prop: 'groupName' },
        { name: 'Provider Name', prop: 'providerName' },
        { name: 'Group', prop: 'groupName' },
        { name: 'Specialty', prop: 'practitionerSpecialty' },
        { name: 'Phone Number', prop: 'phonePrimary' },
        { name: 'Address', prop: 'addressPrimary' },
        { name: 'City', prop: 'cityPrimary' },
        { name: 'State', prop: 'statePrimary' },
        { name: 'Zip', prop: 'postalCodePrimary' }
    ],
    'referrals': [
        { name: "Referral Number", prop: "referralNumber" },
        { name: "VAMC", prop: "vamc" },
        { name: "Veteran Last Name", prop: "veteranLastName" },
        { name: "Veteran First Name", prop: "veteranFirstName" },
        { name: "Veteran Number", prop: "memberNumber" },
        { name: "Provider", prop: "provider" },
        { name: "Program", prop: "program" },
        { name: "Category of Care", prop: "categoryOfCare" },
        { name: "Profile", prop: "profile" },
        { name: "Zip Code", prop: "veteranZipCode" },
        { name: "Create Date", prop: "createdOn" },
        { name: "Reason Code", prop: "reasonCode" }
    ],
    'claims': [
        { name: 'Claim #', prop: 'claimNumber' },
        { name: 'Veteran Last Name ', prop: 'veteranLastName' },
        { name: 'Veteran First Name', prop: 'veteranFirstName' },
        { name: 'Veteran # ', prop: 'veteranNumber' },
        { name: 'Date Of Birth', prop: 'dateOfBirthFormated', pipe: new DateOnlyPipe('en-US') },
        { name: 'SSN (Last 4)', prop: 'ssnLast4' },
        { name: 'Provider Tax ID', prop: 'taxId' },
        { name: 'Provider Name ', prop: 'providerName' },
        { name: 'NPI', prop: 'npi' },
        { name: 'City', prop: 'city' },
        { name: 'State', prop: 'state' },
        { name: 'Zip', prop: 'zip' },
        { name: 'Begin Date', prop: 'beginDateFormated', pipe: new DateOnlyPipe('en-US') },
        { name: 'Charges', prop: 'charges', pipe: new CurrencyTransformer('USD') },
        { name: 'Paid Amount', prop: 'paidAmount', pipe: new CurrencyTransformer('USD')  },
        { name: 'Paid Date', prop: 'paidDateFormated', pipe: new DateOnlyPipe('en-US') },
        { name: 'Status', prop: 'status' }

    ]
}

export const Programs = [
    { text: 'Distance', id: 'Distance' },
    { text: 'Time', id: 'Time' },
]


export const usStates = [
    { text: 'Alabama', id: 'AL' },
    { text: 'Alaska', id: 'AK' },
    { text: 'American Samoa', id: 'AS' },
    { text: 'Arizona', id: 'AZ' },
    { text: 'Arkansas', id: 'AR' },
    { text: 'California', id: 'CA' },
    { text: 'Colorado', id: 'CO' },
    { text: 'Connecticut', id: 'CT' },
    { text: 'Delaware', id: 'DE' },
    { text: 'District Of Columbia', id: 'DC' },
    { text: 'Federated States Of Micronesia', id: 'FM' },
    { text: 'Florida', id: 'FL' },
    { text: 'Georgia', id: 'GA' },
    { text: 'Guam', id: 'GU' },
    { text: 'Hawaii', id: 'HI' },
    { text: 'Idaho', id: 'ID' },
    { text: 'Illinois', id: 'IL' },
    { text: 'Indiana', id: 'IN' },
    { text: 'Iowa', id: 'IA' },
    { text: 'Kansas', id: 'KS' },
    { text: 'Kentucky', id: 'KY' },
    { text: 'Louisiana', id: 'LA' },
    { text: 'Maine', id: 'ME' },
    { text: 'Marshall Islands', id: 'MH' },
    { text: 'Maryland', id: 'MD' },
    { text: 'Massachusetts', id: 'MA' },
    { text: 'Michigan', id: 'MI' },
    { text: 'Minnesota', id: 'MN' },
    { text: 'Mississippi', id: 'MS' },
    { text: 'Missouri', id: 'MO' },
    { text: 'Montana', id: 'MT' },
    { text: 'Nebraska', id: 'NE' },
    { text: 'Nevada', id: 'NV' },
    { text: 'New Hampshire', id: 'NH' },
    { text: 'New Jersey', id: 'NJ' },
    { text: 'New Mexico', id: 'NM' },
    { text: 'New York', id: 'NY' },
    { text: 'North Carolina', id: 'NC' },
    { text: 'North Dakota', id: 'ND' },
    { text: 'Northern Mariana Islands', id: 'MP' },
    { text: 'Ohio', id: 'OH' },
    { text: 'Oklahoma', id: 'OK' },
    { text: 'Oregon', id: 'OR' },
    { text: 'Palau', id: 'PW' },
    { text: 'Pennsylvania', id: 'PA' },
    { text: 'Puerto Rico', id: 'PR' },
    { text: 'Rhode Island', id: 'RI' },
    { text: 'South Carolina', id: 'SC' },
    { text: 'South Dakota', id: 'SD' },
    { text: 'Tennessee', id: 'TN' },
    { text: 'Texas', id: 'TX' },
    { text: 'Utah', id: 'UT' },
    { text: 'Vermont', id: 'VT' },
    { text: 'Virgin Islands', id: 'VI' },
    { text: 'Virginia', id: 'VA' },
    { text: 'Washington', id: 'WA' },
    { text: 'West Virginia', id: 'WV' },
    { text: 'Wisconsin', id: 'WI' },
    { text: 'Wyoming', id: 'WY' }
];

export const mockSpecialties = [
    { text: '(MOCK) Sports', id: 'Sports' },
    { text: '(MOCK) Throat', id: 'Throat' },
    { text: '(MOCK) Laparoscopy', id: 'Laparoscopy' },
    { text: '(MOCK) Foot', id: 'Foot' },
    { text: '(MOCK) Dental', id: 'Dental' },
    { text: '(MOCK) Family', id: 'Family' },
]


