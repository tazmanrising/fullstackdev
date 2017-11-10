export const AuthDataMock: any = { results:[
    { authNumber: '98767767871', veteranId:1, providerId:1, profile: 'Rehabilitation', program: 'Med Therapy', vamc: 'Alexandria Medical Center', createdOn: '2017-09-06T00:00:00', status: 'Approved' },
    { authNumber: '98767767742', veteranId:1, providerId:1, profile: 'Med Operation', program: 'Med Surgical', vamc: 'Alexandria Medical Center', createdOn: '2017-09-05T00:00:00', status: 'Approved' },
    { authNumber: '98767767656', veteranId:1, providerId:1, profile: 'Med procedure', program: 'Med Treatements', vamc: 'Alexandria Medical Center', createdOn: '2017-09-03T00:00:00', status: 'Approved' },
]};

export const ClaimDataMock: any = {
        "page": 1, "pageSize": 5, "totalPages": 2, "totalRecords": 7, "nextPageUrl": "api/claims?page=2&pageSize=5",
        "results": [ { "id": 2, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-08-16T09:00:19.0055645-07:00", "charges": 1786.55, "paidAmount": 1786.55, "paidDate": "2017-08-30T09:00:19.0055645-07:00", "status": "Completed", "vamcId": 1, "vamc": "Albuquerque VAMC" },
                     { "id": 1, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-08-14T09:00:19.0055645-07:00", "charges": 2345.65, "paidAmount": 2345.65, "paidDate": "2017-08-27T09:00:19.0055645-07:00", "status": "Completed", "vamcId": 1, "vamc": "Albuquerque VAMC" },
                     { "id": 3, "providerId": 1, "veteranId": 4, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-07-23T09:00:19.0055645-07:00", "charges": 456.75, "paidAmount": 0.0, "paidDate": "2017-08-22T09:00:19.0055645-07:00", "status": "Denied", "vamcId": 1, "vamc": "Albuquerque VAMC" },
                     { "id": 10, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-07-19T09:00:19.0055645-07:00", "charges": 982.45, "paidAmount": null, "paidDate": null, "status": "Pending", "vamcId": 46, "vamc": "Phoenix VAMC" },
                     { "id": 12, "providerId": 1, "veteranId": 1, "veteranName": "Jimmy Carter", "providerName": "Charles Rogers", "beginDate": "2017-04-30T09:00:19.0055645-07:00", "charges": 11234.15, "paidAmount": 11234.15, "paidDate": "2017-05-28T09:00:19.0055645-07:00", "status": "Completed", "vamcId": 22, "vamc": "Houston VAMC" }]
};