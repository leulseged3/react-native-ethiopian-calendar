import { CalendarError, mod } from '../Core';
import { BasicDate } from '../Core/BasicDate';
import type { ICalendar } from '../Core/ICalendar';

const epoch = 1724220.5;
export class EthiopicCalendar implements ICalendar {
  isLeap(year: number): boolean {
    return mod(year, 4) === 3;
  }

  toJDN(year: number, month: number, day: number): number {
    this.validator(year, month, day);

    return (
      epoch -
      1 +
      365 * (year - 1) +
      Math.floor(year / 4) +
      30 * (month - 1) +
      day
    );
  }

  fromJDN(jdn: number): BasicDate {
    const year = Math.floor((4 * (jdn - epoch) + 1463) / 1461);
    const month = 1 + Math.floor((jdn - this.toJDN(year, 1, 1)) / 30);
    const day = jdn + 1 - this.toJDN(year, month, 1);

    return new BasicDate(year, month, day, jdn);
  }

  validator(year: number, month: number, day: number): boolean {
    // month cannot be more than 13 or less than 1.
    if (month < 1 || month > 13) {
      throw new CalendarError('INVALID_MONTH');
    }
    // The 13th month cannot be more than 5 or 6 days.
    const leapMaxDays = this.isLeap(year) ? 6 : 5;
    if (month === 13 && day > leapMaxDays) {
      throw new CalendarError('INVALID_LEAP_DAY');
    }

    // Days cannot be less than 1 or more than 30.
    if (day < 1 || day > 30) {
      throw new CalendarError('INVALID_DAY');
    }

    return true;
  }
}
