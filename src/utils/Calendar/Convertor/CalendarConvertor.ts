import { EthiopicCalendar } from '../Ethiopic';
import { GregorianCalendar } from '../Gregorian';
import type { BasicDate } from '../Core';

export const ethiopicCalendar = new EthiopicCalendar();

export const gregorianCalendar = new GregorianCalendar();

/**
 * Convert Gregorian Date to Ethiopic Date.
 * @param year
 * @param month
 * @param day
 * @returns Date object.
 */
export const toEthiopic = (
  year: number,
  month: number,
  day: number
): BasicDate => {
  const gregorianJdn: number = gregorianCalendar.toJDN(year, month, day);

  return ethiopicCalendar.fromJDN(gregorianJdn);
};

/**
 * Convert Ethiopic Date to Gregorian Date.
 * @param year
 * @param month
 * @param day
 * @returns Date object.
 */
export const toGregorian = (
  year: number,
  month: number,
  day: number
): BasicDate => {
  const ethioJdn: number = ethiopicCalendar.toJDN(year, month, day);

  return gregorianCalendar.fromJDN(ethioJdn);
};
