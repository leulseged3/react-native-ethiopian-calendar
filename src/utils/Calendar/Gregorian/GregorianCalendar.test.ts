import { GregorianCalendar } from '.';
import { BasicDate } from '../Core';

describe('EthiopicCalendar', () => {
  const GC = new GregorianCalendar();

  test('should convert gregorian date to jdn', () => {
    expect(GC.toJDN(1866, 1, 29)).toEqual(2402630.5);
  });

  test('should convert from jdn to gregorian date', () => {
    expect(GC.fromJDN(2402709)).toEqual(new BasicDate(1866, 4, 17, 2402709));
  });

  test('should return true for leap year', () => {
    expect(GC.isLeap(2020)).toEqual(true);
  });

  test('should return false for regular year', () => {
    expect(GC.isLeap(2021)).toEqual(false);
  });

  test('should return true for leap day', () => {
    expect(GC.validator(2020, 2, 29)).toBeTruthy();
  });
});
