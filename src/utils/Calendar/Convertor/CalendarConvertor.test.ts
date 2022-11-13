import { toGregorian, toEthiopic } from '.';
import { BasicDate } from '../Core';

describe('ethiopicCalendar', () => {
  test('should convert ethiopic date to gregorian date', () => {
    expect(toGregorian(2013, 5, 10)).toEqual(
      new BasicDate(2021, 1, 18, 2459232.5)
    );
  });

  test('should convert gregorian date to ethiopic date', () => {
    expect(toEthiopic(2021, 1, 18)).toEqual(
      new BasicDate(2013, 5, 10, 2459232.5)
    );
  });
});
