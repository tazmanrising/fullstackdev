export class SessionTracker {

    constructor(
      public Id: number,
      public sessionId: number,
      public timerStart: Date,
      public timerEnd: Date,
      public sessionNote: string,
      public firstName: string,
      public lastName: string,
      public phoneNumber: string
    )
    { }
}


