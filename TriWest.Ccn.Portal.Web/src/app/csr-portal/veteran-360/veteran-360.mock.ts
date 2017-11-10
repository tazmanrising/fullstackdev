export const AuthDataMock: any = { results:[
    { authNumber: '98767767871', profile: 'Rehabilitation', program: 'Med Therapy', vamc: 'Alexandria Medical Center', createdOn: '2017-09-06T00:00:00', status: 'Approved' },
    { authNumber: '98767767742', profile: 'Med Operation', program: 'Med Surgical', vamc: 'Alexandria Medical Center', createdOn: '2017-09-05T00:00:00', status: 'Approved' },
    { authNumber: '98767767656', profile: 'Med procedure', program: 'Med Treatements', vamc: 'Alexandria Medical Center', createdOn: '2017-09-03T00:00:00', status: 'Approved' },
]
};
export const ClaimDataMock: any = {
    "page": 1, "pageSize": 5, "totalPages": 2, "totalRecords": 7, "nextPageUrl": "api/claims?page=2&pageSize=5",
    "results": [{ "id": 2, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-08-16T09:00:19.0055645-07:00", "charges": 1786.55, "paidAmount": 1786.55, "paidDate": "2017-08-30T09:00:19.0055645-07:00", "status": "Completed", "vamcId": 1, "vamc": "Albuquerque VAMC" },
    { "id": 1, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-08-14T09:00:19.0055645-07:00", "charges": 2345.65, "paidAmount": 2345.65, "paidDate": "2017-08-27T09:00:19.0055645-07:00", "status": "Completed", "vamcId": 1, "vamc": "Albuquerque VAMC" },
    { "id": 3, "providerId": 1, "veteranId": 4, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-07-23T09:00:19.0055645-07:00", "charges": 456.75, "paidAmount": 0.0, "paidDate": "2017-08-22T09:00:19.0055645-07:00", "status": "Denied", "vamcId": 1, "vamc": "Albuquerque VAMC" },
    { "id": 10, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-07-19T09:00:19.0055645-07:00", "charges": 982.45, "paidAmount": null, "paidDate": null, "status": "Pending", "vamcId": 46, "vamc": "Phoenix VAMC" },
    { "id": 12, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-04-30T09:00:19.0055645-07:00", "charges": 11234.15, "paidAmount": 11234.15, "paidDate": "2017-05-28T09:00:19.0055645-07:00", "status": "Completed", "vamcId": 22, "vamc": "Houston VAMC" }]
};
export const VeteranDataMock: Array<any> = [
    {
        "id": 1,
        "memberNumber": "99473",
        "lastName": "Carter",
        "firstName": "Jimmy",
        "phoneNumber": "555-376-5465",
        "ssnLast4": "4321",
        "dateOfBirth": "1924-10-01T00:00:00",
        "vamc": "GA",
        "city": "Altanta",
        "state": "GA",
        "postalCode": "30309",
        "program": "Choice",
        "countOfAuths": 4,
        "primaryCareProvider": "Some Doctor, MD",
        "countOfProviders": 2,
        "countOfAppointments": 6,
        "countOfPrescriptions": 3,
        "veteranOHIList": [
            {
                "id": 3,
                "careClassification": "OHI - Commercial - Med",
                "carrierName": "Blue Cross",
                "memberId": "",
                "effectiveDate": "2016-12-12T00:00:00-08:00",
                "groupId": "",
                "planId": "",
                "endDate": "2017-10-01T00:00:00-07:00"
            },
            {
                "id": 4,
                "careClassification": "OHI - Commercial - Dental",
                "carrierName": "Delta Dental",
                "memberId": "",
                "effectiveDate": "2017-01-01T00:00:00-08:00",
                "groupId": "",
                "planId": "",
                "endDate": "2017-10-01T00:00:00-07:00"
            }
        ],
        "enrollments": [
            { "endDate": null, "programCareManager": "", "programName": "Distance and/or Wait time", "startDate": "01/01/2017" },
            { "endDate": null, "programCareManager": "2548 Joyce Finial", "programName": "Case Management", "startDate": "01/01/2017" },
            { "endDate": null, "programCareManager": "3279 George Reynolds", "programName": "Disease Management", "startDate": "02/28/2017" },
            { "endDate": null, "programCareManager": "3690 Tina Flanders", "programName": "Care Coordination", "startDate": "03/30/2017" }
        ]
    }
];

export const NotesMock: Array<any> = [
    {
        "id": 11,
        "veteranId": 2,
        "noteCategory": "Case Management Enrollment",
        "noteType": "Note",
        "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus nibh quis magna malesuada, quis egestas lectus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam quam, blandit non mauris non, semper commodo risus. Vestibulum dui metus, eleifend id ex eget, dignissim feugiat nisi. Vestibulum ac risus et.",
        "createdOn": "2017-06-13T16:31:18.7034387-07:00"
    },
    {
        "id": 10,
        "veteranId": 2,
        "noteCategory": "Survey",
        "noteType": "Note",
        "note": "Praesent velit metus, tristique nec interdum non, imperdiet egestas leo. Nam fringilla, elit non bibendum finibus, tellus lectus malesuada risus, ac vulputate sem metus sit amet neque.",
        "createdOn": "2017-06-12T16:31:18.7034387-07:00"
    },
    {
        "id": 9,
        "veteranId": 2,
        "noteCategory": "Disease Management Enrollment",
        "noteType": "Note",
        "note": "Fusce placerat magna varius ligula consectetur efficitur.",
        "createdOn": "2017-06-11T16:31:18.7034387-07:00"
    }
];
