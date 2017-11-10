



export const Session: any =
    
        {
            "sessionId": 1234567890,
            "firstName": null,
            "lastName": null,
            "timerStart": "2017-09-22T19:51:36.427",
            "timerEnd": null,
            "sessionNote": null,
            "phone": null,
            "phoneExtension": null,
            "contactTypeId": null,
            "contactType": null,
            "subCategoryId": null,
            "subCategory": null
        }
    ;
    

export const ContactDataMock: any = [
    {
        "contactTypeId": 1,
        "contactTypeName": "Call"
    },
    {
        "contactTypeId": 2,
        "contactTypeName": "Chat"
    },
    {
        "contactTypeId": 3,
        "contactTypeName": "Email"
    },
    {
        "contactTypeId": 4,
        "contactTypeName": "Fax"
    },
    {
        "contactTypeId": 5,
        "contactTypeName": "Project"
    }
];

export const CcsDataMock: any = [
    {
        "customerTypeId": 1,
        "customerTypeName": "VAMC",
        "childCategories": [
            {
                "categoryId": 1,
                "categoryName": "VAMC-Cat-1",
                "customerTypeID": 1,
                "childSubCategories": [
                    {
                        "subCategoryId": 1,
                        "subCategoryName": "VAMC-SubCat-1-1",
                        "categoryID": 1
                    },
                    {
                        "subCategoryId": 2,
                        "subCategoryName": "VAMC-SubCat-1-2",
                        "categoryID": 1
                    }
                ]
            },
            {
                "categoryId": 2,
                "categoryName": "VAMC-Cat-2",
                "customerTypeID": 1,
                "childSubCategories": [
                    {
                        "subCategoryId": 3,
                        "subCategoryName": "VAMC-SubCat-2-1",
                        "categoryID": 2
                    },
                    {
                        "subCategoryId": 4,
                        "subCategoryName": "VAMC-SubCat-2-2",
                        "categoryID": 2
                    }
                ]
            }
        ]
    },
    {
        "customerTypeId": 2,
        "customerTypeName": "Vet",
        "childCategories": [
            {
                "categoryId": 3,
                "categoryName": "Vet-Cat-1",
                "customerTypeID": 2,
                "childSubCategories": [
                    {
                        "subCategoryId": 5,
                        "subCategoryName": "Vet-SubCat-1-1",
                        "categoryID": 3
                    },
                    {
                        "subCategoryId": 6,
                        "subCategoryName": "Vet-SubCat-1-2",
                        "categoryID": 3
                    }
                ]
            },
            {
                "categoryId": 4,
                "categoryName": "Vet-Cat-2",
                "customerTypeID": 2,
                "childSubCategories": [
                    {
                        "subCategoryId": 7,
                        "subCategoryName": "Vet-SubCat-2-1",
                        "categoryID": 4
                    },
                    {
                        "subCategoryId": 8,
                        "subCategoryName": "Vet-SubCat-2-2",
                        "categoryID": 4
                    }
                ]
            }
        ]
    },
    {
        "customerTypeId": 3,
        "customerTypeName": "Provider",
        "childCategories": [
            {
                "categoryId": 5,
                "categoryName": "Provider-Cat-1",
                "customerTypeID": 3,
                "childSubCategories": [
                    {
                        "subCategoryId": 9,
                        "subCategoryName": "Provider-SubCat-1-1",
                        "categoryID": 5
                    },
                    {
                        "subCategoryId": 10,
                        "subCategoryName": "Provider-SubCat-1-2",
                        "categoryID": 5
                    }
                ]
            },
            {
                "categoryId": 6,
                "categoryName": "Provider-Cat-2",
                "customerTypeID": 3,
                "childSubCategories": [
                    {
                        "subCategoryId": 11,
                        "subCategoryName": "Provider-SubCat-2-1",
                        "categoryID": 6
                    },
                    {
                        "subCategoryId": 12,
                        "subCategoryName": "Provider-SubCat-2-2",
                        "categoryID": 6
                    }
                ]
            }
        ]
    },
    {
        "customerTypeId": 4,
        "customerTypeName": "Other",
        "childCategories": [
            {
                "categoryId": 7,
                "categoryName": "Other-Cat-1",
                "customerTypeID": 4,
                "childSubCategories": [
                    {
                        "subCategoryId": 13,
                        "subCategoryName": "Other-SubCat-1-1",
                        "categoryID": 7
                    },
                    {
                        "subCategoryId": 14,
                        "subCategoryName": "Other-SubCat-1-2",
                        "categoryID": 7
                    }
                ]
            },
            {
                "categoryId": 8,
                "categoryName": "Other-Cat-2",
                "customerTypeID": 4,
                "childSubCategories": [
                    {
                        "subCategoryId": 15,
                        "subCategoryName": "Other-SubCat-2-1",
                        "categoryID": 8
                    },
                    {
                        "subCategoryId": 16,
                        "subCategoryName": "Other-SubCat-2-2",
                        "categoryID": 8
                    }
                ]
            }
        ]
    },
    {
        "customerTypeId": 5,
        "customerTypeName": "None",
        "childCategories": [
            {
                "categoryId": 9,
                "categoryName": "None-Cat-1",
                "customerTypeID": 5,
                "childSubCategories": [
                    {
                        "subCategoryId": 17,
                        "subCategoryName": "None-SubCat-1-1",
                        "categoryID": 9
                    },
                    {
                        "subCategoryId": 18,
                        "subCategoryName": "None-SubCat-1-2",
                        "categoryID": 9
                    }
                ]
            },
            {
                "categoryId": 10,
                "categoryName": "None-Cat-2",
                "customerTypeID": 5,
                "childSubCategories": [
                    {
                        "subCategoryId": 19,
                        "subCategoryName": "None-SubCat-2-1",
                        "categoryID": 10
                    },
                    {
                        "subCategoryId": 20,
                        "subCategoryName": "None-SubCat-2-2",
                        "categoryID": 10
                    }
                ]
            }
        ]
    }
]
