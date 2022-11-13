import { EthiopicCalendar } from '.';
import { BasicDate } from '../Core';

describe('EthiopicCalendar', () => {
  const EC = new EthiopicCalendar();

  test('should convert ethiopic date to jdn', () => {
    expect(EC.toJDN(1855, 2, 20)).toEqual(2401442.5);
  });

  test('should convert from jdn to ethiopic date', () => {
    expect(EC.fromJDN(2402422.5)).toEqual(
      new BasicDate(1857, 10, 29, 2402422.5)
    );
  });

  test('should return true for leap year', () => {
    expect(EC.isLeap(2011)).toEqual(true);
  });

  test('should return false for regular year', () => {
    expect(EC.isLeap(2013)).toEqual(false);
  });

  test('should return true for leap day', () => {
    expect(EC.validator(2011, 13, 6)).toBeTruthy();
  });
});
