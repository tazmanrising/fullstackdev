export class CallerType {
    constructor(
        public title: string,
        public type: string
    ) { };
}

export class CallerOther {
    constructor(
        public firstName: string,
        public lastName: string
    ) { };
}

export class Vamc {
    constructor(
        public id: number,
        public name: string
    ) { };
}

export class CallerVamc {
    constructor(
        public firstName: string,
        public lastName: string,
        public vamcid: string,
        public stationId: string,
        public email: string
    ) { };
}

export class CallerProvider {
    constructor(
        public taxId: string,
        public providerName: string,
        public groupName: string,
        public npi: string
    ) { };
}