export class Notification {
  constructor(public id: number, public message: string, public createdAt : Date) {
  }
}


export class Click {
  constructor(public content : string) {
  }
}

export class Impression {
  constructor(public content : string) {
  }
}

export class Conversion {
  constructor(public content : string) {
  }
}
