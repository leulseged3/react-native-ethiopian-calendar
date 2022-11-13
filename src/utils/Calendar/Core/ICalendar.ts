import type { BasicDate } from './BasicDate';

export interface ICalendar {
  /**
   * Test if a year is leap year or not.
   * @param {number} year
   * @returns {boolean} Boolean
   */
  isLeap(year: number): boolean;
  /**
   * Convert Date to Julian day number (JDN)
   * @param {number} day
   * @param {number} month
   * @param {number} year
   * @returns {number} jdn (Julian Date Number)
   */
  toJDN(year: number, month: number, day: number): number;
  /**
   * Convert Julian day number (JDN) to Date.
   * @param {number} jdn (Julian Date Number)
   * @returns {BasicDate} Date object.
   */
  fromJDN(jdn: number): BasicDate;
  /**
   * Validate Dates.
   * @param {number} day
   * @param {number} month
   * @param {number} year
   * @returns void.
   */
  validator(year: number, month: number, day: number): boolean;
}
