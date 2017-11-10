export class Contact {
    constructor(
        public contactTypeId: number,
        public contactTypeName: string) { }
}

export class Customer {
    constructor(
        public customerTypeId: number,
        public customerTypeName: string,
        public childCategories: Category[]
    ) { }
}

export class Category {
    constructor(
        public categoryId: number,
        public categoryName: string,
        public customerTypeID: number,
        public childSubCategories: SubCategory[]
      ) { }
}

export class SubCategory {
    constructor(
        public subCategoryId: number,
        public subCategoryName: string,
        public categoryID: number,
        ) { }
}

export class TrackerForm {
    constructor(
        public sessionId: string = '',
        public firstName: string = '',
        public lastName: string = '',

        public timerStart: string = '',
        public timerEnd: string = '',
        
        public contactTypeId: string = '',
        public customerTypeId: string = '',
        public categoryId: string = '',
        public subCategoryId: string = '',

        public sessionNote: string = '',

        public phone: string = '',
        public phoneExtension: string = '' 
    ) { }
}

