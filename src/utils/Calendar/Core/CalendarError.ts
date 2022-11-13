export class CalendarError extends Error {
  constructor(public error: string) {
    super(error);
  }
}
