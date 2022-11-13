import { mod, CalendarError, BasicDate, ICalendar } from '../Core';

const epoch = 1721425.5;
const MONTH_MAX_DAYS: any = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export class GregorianCalendar implements ICalendar {
  /**
   * Test if a year is leap year or not.
   * @param {number} year
   * @returns {boolean} Boolean
   */
  isLeap(year: number): boolean {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  /**
   * Convert Gregorian Date to Julian day number (JDN)
   * @param {number} day
   * @param {number} month
   * @param {number} year
   * @returns {number} jdn (Julian Date Number)
   */
  toJDN(year: number, month: number, day: number): number {
    this.validator(year, month, day);

    const y1 = year - 1;

    const isLeapYear = this.isLeap(year);

    const jdn =
      epoch -
      1 +
      365 * y1 +
      Math.floor(y1 / 4) -
      Math.floor(y1 / 100) +
      Math.floor(y1 / 400) +
      Math.floor(
        (367 * month - 362) / 12 + (month <= 2 ? 0 : isLeapYear ? -1 : -2) + day
      );

    return jdn;
  }

  /**
   * Convert Julian day number (JDN) to Gregorian Date.
   * @param {number} jdn (Julian Date Number)
   * @returns {object} Date object.
   */
  fromJDN(jdn: number): BasicDate {
    const jd0 = Math.floor(jdn - 0.5) + 0.5;
    const year = this.jdnToYear(jd0);

    const yearDay = jd0 - this.toJDN(year, 1, 1);
    const isLeapYear = this.isLeap(year);

    const leapAdj = jd0 < this.toJDN(year, 3, 1) ? 0 : isLeapYear ? 1 : 2;
    const month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);

    const day = jd0 - this.toJDN(year, month, 1) + 1;

    return new BasicDate(year, month, day, jdn);
  }

  validator(year: number, month: number, day: number): boolean {
    // Month cannot be less than 1 or greater than 12.
    if (month < 1 || month > 12) {
      throw new CalendarError('INVALID_MONTH');
    }

    // Day cannot be less than 1
    if (day < 1) {
      throw new CalendarError('INVALID_DAY');
    }

    // February can only be 28 or 29 days.
    MONTH_MAX_DAYS[1] = this.isLeap(year) ? 29 : 28;
    if (month === 2 && day > MONTH_MAX_DAYS[1]) {
      throw new CalendarError('INVALID_LEAP_DAY');
    }

    if (MONTH_MAX_DAYS[month - 1] < day) {
      throw new CalendarError('INVALID_DAY');
    }

    return true;
  }

  /**
   * Convert Julian day number (JDN) to Year.
   * @param {number} jdn Julian day number
   * @returns {number} year
   */
  private jdnToYear = (jdn: number): number => {
    const jd0: number = Math.floor(jdn - 0.5) + 0.5;
    const depoch: number = jd0 - epoch;
    const quadricent: number = Math.floor(depoch / 146097);
    const dqc: number = mod(depoch, 146097);
    const cent: number = Math.floor(dqc / 36524);
    const dcent: number = mod(dqc, 36524);
    const quad: number = Math.floor(dcent / 1461);
    const dquad: number = mod(dcent, 1461);
    const yindex: number = Math.floor(dquad / 365);

    return (
      quadricent * 400 +
      cent * 100 +
      quad * 4 +
      yindex +
      (cent !== 4 && yindex !== 4 ? 1 : 0)
    );
  };
}
