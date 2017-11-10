export class Announcement {
    constructor(
        public id: number,
        public createdOn: Date,
        public hub: string,
        public title: string,
        public content: string
    ){};
}