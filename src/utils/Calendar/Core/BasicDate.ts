export class BasicDate {
  jdn?: number;
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
  constructor(...args: number[]) {
    const numArgs = args.length;
    switch (numArgs) {
      case 1:
        this.jdn = args[0];
        break;
      case 3:
        this.year = args[0];
        this.month = args[1];
        this.day = args[2];
        break;
      case 4:
        this.year = args[0];
        this.month = args[1];
        this.day = args[2];
        if (args[3] !== undefined) this.jdn = args[3];
        break;
      case 6:
        this.year = args[0];
        this.month = args[1];
        this.day = args[2];
        if (args[3] !== undefined) this.hour = args[3];
        if (args[4] !== undefined) this.minute = args[4];
        if (args[5] !== undefined) this.second = args[5];
        break;
      case 7:
        this.year = args[0];
        this.month = args[1];
        this.day = args[2];
        if (args[3] !== undefined) this.hour = args[3];
        if (args[4] !== undefined) this.minute = args[4];
        if (args[5] !== undefined) this.second = args[5];
        if (args[6] !== undefined) this.millisecond = args[6];
        break;
      default:
        break;
    }
  }
}
