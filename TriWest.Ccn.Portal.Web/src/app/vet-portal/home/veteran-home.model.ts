export class NgbTab {
    constructor(
        public title: string,
        public content: Link[],
    ) { }
}


export class Link {
    constructor(
        public title: string,
        public url: string,
    ) { }
}

export class Banner {
    constructor(
        public id: string,
        public source: string,
        public alternate: string,
        public header: string,
        public message: string

    ) { }

}

export class NgbAccordion {
    constructor(
        public id: string,
        public title: string,
        public content: string
    ) { }
}


export class NgbPanel {
    constructor(
        public id: string,
        public nextState: boolean,
    ) { }
}



